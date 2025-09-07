-- CreateEnum
CREATE TYPE "public"."DraftStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."CrewOnboardingDraft" (
    "id" TEXT NOT NULL,
    "crewId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "status" "public"."DraftStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" TEXT,

    CONSTRAINT "CrewOnboardingDraft_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CrewOnboardingDraft_crewId_key" ON "public"."CrewOnboardingDraft"("crewId");

-- AddForeignKey
ALTER TABLE "public"."CrewOnboardingDraft" ADD CONSTRAINT "CrewOnboardingDraft_crewId_fkey" FOREIGN KEY ("crewId") REFERENCES "public"."Crew"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CrewOnboardingDraft" ADD CONSTRAINT "CrewOnboardingDraft_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
