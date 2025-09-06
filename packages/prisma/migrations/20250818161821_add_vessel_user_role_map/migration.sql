/*
  Warnings:

  - The values [ THIRD Engineer,Additonal SECOND Engineer,Additonal SECOND Officer,Additonal THIRD Engineer,Additonal Chief Engineer,Additonal Chief Officer,Additonal Master,Souse Chef,Travel Co-ordinator] on the enum `VesselRole` will be removed. If these variants are still used in the database, this will fail.
  - The `status` column on the `Crew` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `callSign` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `contactEmail` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `contactPersonName` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `lastInspectionDate` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `mmsi` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `safetyCertificateUrl` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `VesselRankRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `VesselRankRequirement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Crew` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,orgId]` on the table `Crew` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,orgId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,orgId]` on the table `Vessel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `primaryDepartment` to the `Crew` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Crew` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rank` on the `Crew` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `orgId` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orgId` to the `TrainingRecord` table without a default value. This is not possible if the table is not empty.
  - Made the column `orgId` on table `VesselAssignment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `orgId` to the `VesselRankRequirement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."VesselDepartment" AS ENUM ('DECK', 'ENGINE', 'CATERING');

-- CreateEnum
CREATE TYPE "public"."CrewStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'ON_LEAVE');

-- CreateEnum
CREATE TYPE "public"."VesselUserRole" AS ENUM ('VESSEL_ADMIN');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."VesselRole_new" AS ENUM ('CAPTAIN', 'SECOND Cook', 'SECOND Engineer', 'SECOND Engineer NCV', 'SECOND Officer', 'THIRD Engineer', 'THIRD Officer', 'FOURTH Engineer', 'FOURTH Engineer NCV', 'FIFTH Engineer', 'Able Seaman', 'Additional SECOND Engineer', 'Additional SECOND Officer', 'Additional THIRD Engineer', 'Additional Chief Engineer', 'Additional Chief Officer', 'Additional Master', 'Assistant Electrical Officer', 'Bar Tender', 'Bosun', 'Cabin Attendant', 'Cargo Engineer', 'Chief', 'Chief Cook', 'Chief Engineer', 'Chief Engineer NCV', 'Chief Officer', 'Chief Officer NCV', 'Chief Steward', 'Crane Operator', 'Deck Cadet', 'Deck Fitter', 'Dive Electrical Technician', 'DPO', 'DPO SECOND Officer', 'DPO THIRD Officer', 'DPO Chief Officer', 'DPO Master', 'Dredge Cutter Operator', 'Dredge Engineer', 'Dual Cadet', 'Electrical Engineer', 'Electrical Officer', 'Electro Technical Engineer', 'Engine Fitter', 'Extra Master', 'Fitter', 'Gas Engineer', 'GP', 'Hotel Manager', 'Infotech', 'Inland Master', 'Instructor', 'Internal Auditor', 'Junior DPO Chief Officer', 'Junior THIRD Officer', 'Junior FOURTH Officer', 'Junior DPO', 'Junior Engineer', 'Junior Officer', 'Laundryman', 'Marine Consultancy', 'Master', 'Master Mariner', 'Master NCV', 'Motorman', 'Musician', 'NCV NWKO', 'Offshore Installation', 'Oiler', 'OS', 'Personnel Manager', 'Pipe Operator', 'Port Operation', 'Pumpman', 'Purser', 'Radio Officer', 'Reefer Engineer', 'Reefer Mechanic', 'Repair Yard D.D', 'Rigger', 'Roustabout', 'Safety officer', 'Sous Chef', 'Sports Director', 'Senior DPO Chief Officer', 'Senior DPO Master', 'Steward', 'Superintendent', 'Technical Manager', 'Trainer C E', 'Trainee Cadet', 'Trainee Electrical Officer', 'Trainee Engineer', 'Travel Coordinator', 'Travel Fitter', 'Travel Wiper', 'Tube Operator', 'Tug Handler', 'Voyage Ref Staff', 'Wiper');
ALTER TABLE "public"."VesselAssignment" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."Crew" ALTER COLUMN "rank" TYPE "public"."VesselRole_new" USING ("rank"::text::"public"."VesselRole_new");
ALTER TABLE "public"."VesselRankRequirement" ALTER COLUMN "role" TYPE "public"."VesselRole_new" USING ("role"::text::"public"."VesselRole_new");
ALTER TABLE "public"."VesselAssignment" ALTER COLUMN "role" TYPE "public"."VesselRole_new" USING ("role"::text::"public"."VesselRole_new");
ALTER TYPE "public"."VesselRole" RENAME TO "VesselRole_old";
ALTER TYPE "public"."VesselRole_new" RENAME TO "VesselRole";
DROP TYPE "public"."VesselRole_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Document" DROP CONSTRAINT "Document_crewId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TrainingRecord" DROP CONSTRAINT "TrainingRecord_crewId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VesselAssignment" DROP CONSTRAINT "VesselAssignment_crewId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VesselAssignment" DROP CONSTRAINT "VesselAssignment_vesselId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VesselRankRequirement" DROP CONSTRAINT "VesselRankRequirement_vesselId_fkey";

-- DropIndex
DROP INDEX "public"."Document_crewId_idx";

-- DropIndex
DROP INDEX "public"."TrainingRecord_courseId_idx";

-- DropIndex
DROP INDEX "public"."TrainingRecord_crewId_idx";

-- DropIndex
DROP INDEX "public"."User_email_key";

-- DropIndex
DROP INDEX "public"."Vessel_orgId_isActive_idx";

-- DropIndex
DROP INDEX "public"."Vessel_orgId_vesselType_idx";

-- DropIndex
DROP INDEX "public"."VesselAssignment_crewId_idx";

-- DropIndex
DROP INDEX "public"."VesselAssignment_vesselId_assignedAt_idx";

-- DropIndex
DROP INDEX "public"."VesselAssignment_vesselId_crewId_role_key";

-- DropIndex
DROP INDEX "public"."VesselRankRequirement_vesselId_role_idx";

-- AlterTable
ALTER TABLE "public"."Crew" ADD COLUMN     "dateJoined" TIMESTAMP(3),
ADD COLUMN     "dateLeft" TIMESTAMP(3),
ADD COLUMN     "primaryDepartment" "public"."VesselDepartment" NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "rank",
ADD COLUMN     "rank" "public"."VesselRole" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "public"."CrewStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "public"."Document" ADD COLUMN     "orgId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."TrainingRecord" ADD COLUMN     "orgId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Vessel" DROP COLUMN "callSign",
DROP COLUMN "contactEmail",
DROP COLUMN "contactPersonName",
DROP COLUMN "contactPhone",
DROP COLUMN "deletedAt",
DROP COLUMN "lastInspectionDate",
DROP COLUMN "mmsi",
DROP COLUMN "safetyCertificateUrl";

-- AlterTable
ALTER TABLE "public"."VesselAssignment" ALTER COLUMN "orgId" SET NOT NULL,
ALTER COLUMN "role" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."VesselRankRequirement" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "orgId" TEXT NOT NULL,
ALTER COLUMN "requiredCount" DROP DEFAULT;

-- CreateTable
CREATE TABLE "public"."VesselUserRoleMap" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "vesselId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "public"."VesselUserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VesselUserRoleMap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VesselUserRoleMap_orgId_vesselId_userId_idx" ON "public"."VesselUserRoleMap"("orgId", "vesselId", "userId");

-- CreateIndex
CREATE INDEX "VesselUserRoleMap_orgId_role_idx" ON "public"."VesselUserRoleMap"("orgId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "VesselUserRoleMap_vesselId_userId_role_key" ON "public"."VesselUserRoleMap"("vesselId", "userId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_userId_key" ON "public"."Crew"("userId");

-- CreateIndex
CREATE INDEX "Crew_orgId_lastName_firstName_idx" ON "public"."Crew"("orgId", "lastName", "firstName");

-- CreateIndex
CREATE INDEX "Crew_orgId_rank_idx" ON "public"."Crew"("orgId", "rank");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_id_orgId_key" ON "public"."Crew"("id", "orgId");

-- CreateIndex
CREATE INDEX "Document_orgId_crewId_idx" ON "public"."Document"("orgId", "crewId");

-- CreateIndex
CREATE INDEX "Document_orgId_expiryDate_idx" ON "public"."Document"("orgId", "expiryDate");

-- CreateIndex
CREATE INDEX "TrainingRecord_orgId_crewId_idx" ON "public"."TrainingRecord"("orgId", "crewId");

-- CreateIndex
CREATE INDEX "TrainingRecord_orgId_expiryDate_idx" ON "public"."TrainingRecord"("orgId", "expiryDate");

-- CreateIndex
CREATE INDEX "User_orgId_role_idx" ON "public"."User"("orgId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_orgId_key" ON "public"."User"("id", "orgId");

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_id_orgId_key" ON "public"."Vessel"("id", "orgId");

-- CreateIndex
CREATE INDEX "VesselAssignment_orgId_vesselId_releasedAt_assignedAt_idx" ON "public"."VesselAssignment"("orgId", "vesselId", "releasedAt", "assignedAt");

-- CreateIndex
CREATE INDEX "VesselAssignment_orgId_crewId_releasedAt_assignedAt_idx" ON "public"."VesselAssignment"("orgId", "crewId", "releasedAt", "assignedAt");

-- CreateIndex
CREATE INDEX "VesselRankRequirement_orgId_vesselId_idx" ON "public"."VesselRankRequirement"("orgId", "vesselId");

-- AddForeignKey
ALTER TABLE "public"."Crew" ADD CONSTRAINT "Crew_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vessel" ADD CONSTRAINT "Vessel_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselUserRoleMap" ADD CONSTRAINT "VesselUserRoleMap_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselUserRoleMap" ADD CONSTRAINT "VesselUserRoleMap_vesselId_orgId_fkey" FOREIGN KEY ("vesselId", "orgId") REFERENCES "public"."Vessel"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselUserRoleMap" ADD CONSTRAINT "VesselUserRoleMap_userId_orgId_fkey" FOREIGN KEY ("userId", "orgId") REFERENCES "public"."User"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselRankRequirement" ADD CONSTRAINT "VesselRankRequirement_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselRankRequirement" ADD CONSTRAINT "VesselRankRequirement_vesselId_orgId_fkey" FOREIGN KEY ("vesselId", "orgId") REFERENCES "public"."Vessel"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_crewId_orgId_fkey" FOREIGN KEY ("crewId", "orgId") REFERENCES "public"."Crew"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselAssignment" ADD CONSTRAINT "VesselAssignment_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselAssignment" ADD CONSTRAINT "VesselAssignment_crewId_orgId_fkey" FOREIGN KEY ("crewId", "orgId") REFERENCES "public"."Crew"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselAssignment" ADD CONSTRAINT "VesselAssignment_vesselId_orgId_fkey" FOREIGN KEY ("vesselId", "orgId") REFERENCES "public"."Vessel"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TrainingRecord" ADD CONSTRAINT "TrainingRecord_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TrainingRecord" ADD CONSTRAINT "TrainingRecord_crewId_orgId_fkey" FOREIGN KEY ("crewId", "orgId") REFERENCES "public"."Crew"("id", "orgId") ON DELETE CASCADE ON UPDATE CASCADE;
