-- DropForeignKey
ALTER TABLE "public"."VesselAssignment" DROP CONSTRAINT "fk_va_crew_org";

-- DropForeignKey
ALTER TABLE "public"."VesselAssignment" DROP CONSTRAINT "fk_va_vessel_org";

-- DropForeignKey
ALTER TABLE "public"."VesselUserRoleMap" DROP CONSTRAINT "fk_vurm_user_org";

-- DropForeignKey
ALTER TABLE "public"."VesselUserRoleMap" DROP CONSTRAINT "fk_vurm_vessel_org";
