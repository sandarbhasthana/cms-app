-- This is an empty migration.
/* ============================================================
   0) Ensure composite uniques on parents (for composite FKs)
   ============================================================ */
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'u_user_id_org') THEN
    ALTER TABLE "public"."User" ADD CONSTRAINT u_user_id_org UNIQUE ("id","orgId");
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'u_vessel_id_org') THEN
    ALTER TABLE "public"."Vessel" ADD CONSTRAINT u_vessel_id_org UNIQUE ("id","orgId");
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'u_crew_id_org') THEN
    ALTER TABLE "public"."Crew" ADD CONSTRAINT u_crew_id_org UNIQUE ("id","orgId");
  END IF;
END $$;

/* ============================================================
   1) CREW: backfill orgId (you added a NOT NULL column above)
   ============================================================ */
-- If Crew has userId (recommended), inherit org from User
UPDATE "public"."Crew" c
SET "orgId" = u."orgId"
FROM "public"."User" u
WHERE c."userId" = u."id"
  AND c."orgId" IS NULL;

/* If any Crew still NULL here, try via an active VesselAssignment */
UPDATE "public"."Crew" c
SET "orgId" = va."orgId"
FROM "public"."VesselAssignment" va
WHERE va."crewId" = c."id"
  AND c."orgId" IS NULL
  AND va."orgId" IS NOT NULL;

/* Safety check: fail fast if any Crew orgId still NULL */
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM "public"."Crew" WHERE "orgId" IS NULL) THEN
    RAISE EXCEPTION 'Crew.orgId still NULL for some rows — fix data then rerun migration.';
  END IF;
END $$;

/* ============================================================
   2) VESSEL ASSIGNMENT: backfill + NOT NULL + composite FKs
   ============================================================ */

/* 2a) Backfill orgId from Vessel when NULL */
UPDATE "public"."VesselAssignment" va
SET "orgId" = v."orgId"
FROM "public"."Vessel" v
WHERE va."vesselId" = v."id"
  AND va."orgId" IS NULL;

/* 2b) Drop legacy triple-unique if it exists */
ALTER TABLE "public"."VesselAssignment"
  DROP CONSTRAINT IF EXISTS "VesselAssignment_vesselId_crewId_role_key";

/* 2c) Drop old single-column FKs (will replace with composite) */
ALTER TABLE "public"."VesselAssignment"
  DROP CONSTRAINT IF EXISTS "VesselAssignment_vesselId_fkey",
  DROP CONSTRAINT IF EXISTS "VesselAssignment_crewId_fkey";

/* 2d) Make orgId required */
ALTER TABLE "public"."VesselAssignment"
  ALTER COLUMN "orgId" SET NOT NULL;

/* 2e) Sanity check: org consistency */
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM "public"."VesselAssignment" va
    JOIN "public"."Vessel" v ON v."id" = va."vesselId"
    JOIN "public"."Crew"   c ON c."id" = va."crewId"
    WHERE va."orgId" <> v."orgId" OR va."orgId" <> c."orgId"
  ) THEN
    RAISE EXCEPTION 'Inconsistent orgId between VesselAssignment and Vessel/Crew. Fix data then rerun.';
  END IF;
END $$;

/* 2f) Add composite FKs to enforce same-org integrity */
ALTER TABLE "public"."VesselAssignment"
  ADD CONSTRAINT fk_va_vessel_org
    FOREIGN KEY ("vesselId","orgId") REFERENCES "public"."Vessel"("id","orgId") ON DELETE CASCADE,
  ADD CONSTRAINT fk_va_crew_org
    FOREIGN KEY ("crewId","orgId")   REFERENCES "public"."Crew"("id","orgId")   ON DELETE CASCADE;

/* 2g) Org-scoped “active roster” indexes (keep your own too) */
CREATE INDEX IF NOT EXISTS ix_va_org_vessel_released_assigned
  ON "public"."VesselAssignment"("orgId","vesselId","releasedAt","assignedAt");
CREATE INDEX IF NOT EXISTS ix_va_org_crew_released_assigned
  ON "public"."VesselAssignment"("orgId","crewId","releasedAt","assignedAt");

/* 2h) One active posting per crew (partial unique) */
CREATE UNIQUE INDEX IF NOT EXISTS ux_active_assignment_per_crew
  ON "public"."VesselAssignment"("crewId")
  WHERE "releasedAt" IS NULL;

/* ============================================================
   3) VESSEL USER ROLE MAP: harden for tenancy (if present)
   ============================================================ */

/* 3a) Backfill orgId from Vessel if NULL */
UPDATE "public"."VesselUserRoleMap" m
SET "orgId" = v."orgId"
FROM "public"."Vessel" v
WHERE m."vesselId" = v."id"
  AND (m."orgId" IS NULL OR m."orgId" = '');

/* 3b) Add updatedAt if missing and make orgId required */
ALTER TABLE "public"."VesselUserRoleMap"
  ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT now();

ALTER TABLE "public"."VesselUserRoleMap"
  ALTER COLUMN "orgId" SET NOT NULL;

/* 3c) Add composite FKs (vesselId,orgId) and (userId,orgId) */
ALTER TABLE "public"."VesselUserRoleMap"
  DROP CONSTRAINT IF EXISTS "VesselUserRoleMap_vesselId_fkey",
  DROP CONSTRAINT IF EXISTS "VesselUserRoleMap_userId_fkey";

ALTER TABLE "public"."VesselUserRoleMap"
  ADD CONSTRAINT fk_vurm_vessel_org
    FOREIGN KEY ("vesselId","orgId") REFERENCES "public"."Vessel"("id","orgId") ON DELETE CASCADE,
  ADD CONSTRAINT fk_vurm_user_org
    FOREIGN KEY ("userId","orgId")   REFERENCES "public"."User"("id","orgId")   ON DELETE CASCADE;

/* 3d) Helpful indexes */
CREATE INDEX IF NOT EXISTS ix_vurm_org_vessel_user
  ON "public"."VesselUserRoleMap"("orgId","vesselId","userId");
CREATE INDEX IF NOT EXISTS ix_vurm_org_role
  ON "public"."VesselUserRoleMap"("orgId","role");

/* 3e) Ensure unique (vesselId, userId, role) still exists */
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'vurm_vessel_user_role_key') THEN
    ALTER TABLE "public"."VesselUserRoleMap"
      ADD CONSTRAINT vurm_vessel_user_role_key UNIQUE ("vesselId","userId","role");
  END IF;
END $$;
