/*
  Warnings:

  - Made the column `yearBuilt` on table `Vessel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Vessel" ALTER COLUMN "yearBuilt" SET NOT NULL;
