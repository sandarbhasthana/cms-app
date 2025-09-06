-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'HR', 'SCHEDULER', 'PAYROLL', 'CREW', 'AUDITOR', 'COMPLIANCE_VIEWER', 'CREW_COORDINATOR');

-- CreateEnum
CREATE TYPE "public"."VesselRole" AS ENUM ('CAPTAIN', 'SECOND Cook', 'SECOND Engineer', 'SECOND Engineer NCV', 'SECOND Officer', ' THIRD Engineer', 'THIRD Officer', 'FOURTH Engineer', 'FOURTH Engineer NCV', 'FIFTH Engineer', 'Able Seaman', 'Additonal SECOND Engineer', 'Additonal SECOND Officer', 'Additonal THIRD Engineer', 'Additonal Chief Engineer', 'Additonal Chief Officer', 'Additonal Master', 'Assistant Electrical Officer', 'Bar Tender', 'Bosun', 'Cabin Attendant', 'Cargo Engineer', 'Chief', 'Chief Cook', 'Chief Engineer', 'Chief Engineer NCV', 'Chief Officer', 'Chief Officer NCV', 'Chief Steward', 'Crane Operator', 'Deck Cadet', 'Deck Fitter', 'Dive Electrical Technician', 'DPO', 'DPO SECOND Officer', 'DPO THIRD Officer', 'DPO Chief Officer', 'DPO Master', 'Dredge Cutter Operator', 'Dredge Engineer', 'Dual Cadet', 'Electrical Engineer', 'Electrical Officer', 'Electro Technical Engineer', 'Engine Fitter', 'Extra Master', 'Fitter', 'Gas Engineer', 'GP', 'Hotel Manager', 'Infotech', 'Inland Master', 'Instructor', 'Internal Auditor', 'Junior DPO Chief Officer', 'Junior THIRD Officer', 'Junior FOURTH Officer', 'Junior DPO', 'Junior Engineer', 'Junior Officer', 'Laundryman', 'Marine Consultancy', 'Master', 'Master Mariner', 'Master NCV', 'Motorman', 'Musician', 'NCV NWKO', 'Offshore Installation', 'Oiler', 'OS', 'Personnel Manager', 'Pipe Operator', 'Port Operation', 'Pumpman', 'Purser', 'Radio Officer', 'Reefer Engineer', 'Reefer Mechanic', 'Repair Yard D.D', 'Rigger', 'Roustabout', 'Safety officer', 'Souse Chef', 'Sports Director', 'Senior DPO Chief Officer', 'Senior DPO Master', 'Steward', 'Superintendent', 'Technical Manager', 'Trainer C E', 'Trainee Cadet', 'Trainee Electrical Officer', 'Trainee Engineer', 'Travel Co-ordinator', 'Travel Fitter', 'Travel Wiper', 'Tube Operator', 'Tug Handler', 'Voyage Ref Staff', 'Wiper');

-- CreateEnum
CREATE TYPE "public"."VesselType" AS ENUM ('ACCOMMODATION', 'AHT', 'AHTS', 'AHTS_DP_I', 'AHTS_DP_II', 'AHTS_DP_III', 'BARGE', 'BITUMEN_TANKER', 'BULK_CARRIER', 'BUNKER_TANKER', 'CAPE_BULK', 'CAR_CARRIER', 'CELLULAR_CONTAINER', 'CEMENT_CARRIER', 'CHEMICAL_TANKER', 'COASTAL_VESSEL', 'CONTAINER', 'CONTAINER_VESSEL', 'CRUDE_OIL_TANKER', 'CRUISE_SHIP', 'DEMOLITION_VESSEL', 'DP', 'DP_I', 'DP_II', 'DP_III', 'DPII_ROV', 'DREDGER', 'DRILL_SHIP', 'DRILL_SHIP_DP_I', 'DRILL_SHIP_DP_II', 'DRILL_SHIP_DP_III', 'DRILLING_RIG', 'DRY_CARGO', 'DRY_CARGO_VESSEL', 'DSV', 'DSV_DP_I', 'DSV_DP_II', 'DSV_DP_III', 'FFSV', 'FISHING_VESSEL', 'FPSO', 'FSO', 'GEAR_BULK', 'GENERAL_CARGO', 'GTV', 'HEAVY_LIFT', 'HOPPER_BARGE', 'JACK_UP_BARGE', 'JACK_UP_RIG', 'LEGC_ETHYLENE_CARRIERS', 'LIVESTOCK_CARRIER', 'LNG_CARRIER', 'LPG_CARRIER', 'LUXURY_YACHT', 'MINI_BULK_CARRIER', 'MLP', 'MR_TANKER', 'MSV', 'MSV_DP_I', 'MSV_DP_II', 'MSV_DP_III', 'MULTI_PURPOSE', 'OBO', 'OFFSHORE_RESEARCH_VESSEL', 'OFFSHORE_SUPPLY', 'OFFSHORE_SUPPLY_VESSEL', 'OIL_CHEM_TANKER', 'OIL_TANKER', 'OSV', 'OSV_DP_I', 'OSV_DP_II', 'OSV_DP_III', 'PASSENGER_CRUISE_VESSEL', 'PASSENGER_SHIP', 'PIPELAYING_VESSEL', 'PRODUCT_TANKER', 'PSV', 'PSV_DP_I', 'PSV_DP_II', 'PSV_DP_III', 'PURE_CAR_TRUCK_CARRIER', 'REEFER', 'REEFER_CONTAINER', 'REEFER_CONTAINER_VESSEL', 'REEFER_VESSEL', 'RIG', 'RO_RO_VESSEL', 'ROPAX_VESSEL', 'RORO_PASSENGER', 'SAND_BARGE', 'SELF_UNLOADER_BULK_VESSEL', 'SP_SURVEY_VESSEL', 'SUPPLY_UTILITY_VESSEL', 'TNC', 'TRANSHIPPER', 'TUG', 'ULCC', 'VLCC', 'VLEC', 'VLGC', 'VLOC', 'WAR_SHIP', 'WOOD_LOG_CARRIER');

-- CreateEnum
CREATE TYPE "public"."EngineMake" AS ENUM ('ABB_STROMBERG', 'AKASAKA', 'BW_6GFVT2BF', 'BW_6560MC', 'BW_6S70MC_C', 'BW_GFCA', 'BW_KEF', 'BW_KGF', 'BW_LMC', 'BW_MC', 'BW_MC_C', 'BW_ME_B', 'BW_ME_C', 'BW_SMC', 'BW_ST_X', 'BERGEN', 'BMZ_MAN_BW_7S50MC_C', 'CATERPILLAR', 'CUMMINS_KTA50', 'DAIHATSU', 'DALIAN_SULZER', 'DEUTZ', 'DIESEL', 'DMD_SULZER', 'GN8320ZC4B', 'HITACHI', 'HYUNDAI_MAN_BW_7_S_60_MC_C_MK_7', 'Hyundai_MAN_BW_7S60MC_Mk_6', 'JAPAN_ENGINE', 'KAWASAKI_MAN_BW', 'KAWASAKI_HEAVY', 'KOBE_DIESEL', 'KRUPP_MAK', 'MAK', 'MAN', 'MAN_6G50ME_B9_3', 'MAN_BW', 'MAN_BW_5S70MC', 'MAN_BW_6S50MC_C', 'MAN_BW_6S60MC_C', 'MAN_BW_6S90MC', 'MAN_BW_7S60_MC', 'MAN_BW_7S60MC_C', 'MAN_BW_L32_40_MAN_BW_DIESEL_8L32_40', 'MITSUBISHI', 'MITSUBISHI_AKASAKA', 'MITSUBISHI_AKASAKA_DIESEL', 'MITSUBISHI_HEAVY', 'MITSUBISHI_UEC', 'MITSUI_MAN_BW', 'MWM', 'NIIGATA', 'NIPPATSU', 'PIELSTICK', 'STORK_WERKSPOR_DIESEL', 'SULZER', 'SULZER_RD', 'SULZER_RLB', 'SULZER_RND', 'SULZER_RT_FLEX', 'SULZER_RTA', 'WARTSILLA', 'WARTSILLA_DIESEL_BV', 'YANMAR');

-- CreateEnum
CREATE TYPE "public"."TonnageUnit" AS ENUM ('BHP', 'CEUs', 'DWT', 'GRT', 'KW', 'LIMS', 'M3', 'TEUs');

-- CreateEnum
CREATE TYPE "public"."DocumentType" AS ENUM ('PASSPORT', 'VISA', 'CERTIFICATE', 'CONTRACT', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."ConsultancyCategory" AS ENUM ('MARINE', 'LEGAL', 'AUDIT', 'TRAINING', 'MEDICAL');

-- CreateEnum
CREATE TYPE "public"."CertificateType" AS ENUM ('Advanced Fire Fighting', 'Automatic Radar Plotting Aids', 'Bridge Team Management', 'Bridge Team / Resource Management', 'ECDIS - Generic', 'ECDIS - Type Specific', 'Elementary First Aid', 'Engine Room Resource Management', 'Fire Prevention and Fire Fighting', 'High Voltage Course', 'Incident Investigation & Risk Assessment', 'Medical Care', 'ME Engine Familiarization', 'Medical First Aid', 'Oil/Chemical/Gas Course - Advanced Tanker Course', 'Oil/Chemical/Gas DCE - Advanced Tanker Endorsement', 'Proficiency in Survival Craft and Rescue Boats', 'Personal Safety and Social Responsibility', 'Personal Survival Techniques', 'Radar, ARPA & Navigation Simulator', 'Safety Officer Course', 'Security Training for Seafarers with Designated Duties', 'Ship Handling Simulator Course', 'Cargo Handling Simulator Course', 'Ship Security Officer', 'General/Restricted Operator’s Certificate', 'IGF Code Training', 'Internal Auditor', 'Crowd Management', 'Compressor & Boiler Safety Certification', 'Crisis Management', 'Ballast Water Management', 'Environmental Awareness', 'Polar Code Awareness', 'Cyber Security Awareness', 'HELM – Operational Level', 'HELM – Management Level', 'MARPOL Awareness', 'Refrigeration', 'Tank Cleaning & Gas Freeing', 'Maritime Labour Convention Familiarization');

-- CreateEnum
CREATE TYPE "public"."TrainingType" AS ENUM ('INTERNAL', 'EXTERNAL');

-- CreateTable
CREATE TABLE "public"."Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'CREW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orgId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AuditLog" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "targetUserId" TEXT,
    "orgId" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Crew" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vessel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imoNumber" TEXT NOT NULL,
    "capacity" INTEGER,
    "homePort" TEXT,
    "vesselType" "public"."VesselType",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bhpKw" DOUBLE PRECISION,
    "companyName" TEXT,
    "dwt" INTEGER,
    "flag" TEXT,
    "grt" INTEGER,
    "tonnageValue" DOUBLE PRECISION,
    "ums" BOOLEAN,
    "yearBuilt" INTEGER,
    "orgId" TEXT NOT NULL,
    "engineMake" "public"."EngineMake",
    "tonnageUnit" "public"."TonnageUnit",
    "callSign" TEXT,
    "contactEmail" TEXT,
    "contactPersonName" TEXT,
    "contactPhone" TEXT,
    "deletedAt" TIMESTAMP(3),
    "inspectionDueDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastInspectionDate" TIMESTAMP(3),
    "mmsi" VARCHAR(9),
    "safetyCertificateUrl" TEXT,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VesselRankRequirement" (
    "id" TEXT NOT NULL,
    "vesselId" TEXT NOT NULL,
    "role" "public"."VesselRole" NOT NULL,
    "requiredCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VesselRankRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VesselAssignment" (
    "id" TEXT NOT NULL,
    "orgId" TEXT,
    "vesselId" TEXT NOT NULL,
    "crewId" TEXT NOT NULL,
    "role" "public"."VesselRole" NOT NULL DEFAULT 'Master',
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "releasedAt" TIMESTAMP(3),

    CONSTRAINT "VesselAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Document" (
    "id" TEXT NOT NULL,
    "crewId" TEXT NOT NULL,
    "type" "public"."DocumentType" NOT NULL DEFAULT 'PASSPORT',
    "fileName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "issueDate" TIMESTAMP(3),
    "expiryDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ConsultancyPartner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "public"."ConsultancyCategory" NOT NULL,
    "contactEmail" TEXT,
    "approvedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsultancyPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TrainingPartner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "trainingType" "public"."TrainingType" NOT NULL DEFAULT 'INTERNAL',
    "partnerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TrainingRecord" (
    "id" TEXT NOT NULL,
    "crewId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "dateTaken" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiryDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_orgId_email_key" ON "public"."User"("orgId", "email");

-- CreateIndex
CREATE INDEX "AuditLog_orgId_idx" ON "public"."AuditLog"("orgId");

-- CreateIndex
CREATE INDEX "AuditLog_actorId_idx" ON "public"."AuditLog"("actorId");

-- CreateIndex
CREATE INDEX "AuditLog_targetUserId_idx" ON "public"."AuditLog"("targetUserId");

-- CreateIndex
CREATE INDEX "Vessel_orgId_vesselType_idx" ON "public"."Vessel"("orgId", "vesselType");

-- CreateIndex
CREATE INDEX "Vessel_orgId_isActive_idx" ON "public"."Vessel"("orgId", "isActive");

-- CreateIndex
CREATE INDEX "Vessel_orgId_inspectionDueDate_idx" ON "public"."Vessel"("orgId", "inspectionDueDate");

-- CreateIndex
CREATE UNIQUE INDEX "Vessel_imoNumber_orgId_key" ON "public"."Vessel"("imoNumber", "orgId");

-- CreateIndex
CREATE INDEX "VesselRankRequirement_vesselId_role_idx" ON "public"."VesselRankRequirement"("vesselId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "VesselRankRequirement_vesselId_role_key" ON "public"."VesselRankRequirement"("vesselId", "role");

-- CreateIndex
CREATE INDEX "VesselAssignment_vesselId_assignedAt_idx" ON "public"."VesselAssignment"("vesselId", "assignedAt");

-- CreateIndex
CREATE INDEX "VesselAssignment_crewId_idx" ON "public"."VesselAssignment"("crewId");

-- CreateIndex
CREATE INDEX "VesselAssignment_orgId_idx" ON "public"."VesselAssignment"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "VesselAssignment_vesselId_crewId_role_key" ON "public"."VesselAssignment"("vesselId", "crewId", "role");

-- CreateIndex
CREATE INDEX "Document_crewId_idx" ON "public"."Document"("crewId");

-- CreateIndex
CREATE INDEX "TrainingRecord_crewId_idx" ON "public"."TrainingRecord"("crewId");

-- CreateIndex
CREATE INDEX "TrainingRecord_courseId_idx" ON "public"."TrainingRecord"("courseId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Crew" ADD CONSTRAINT "Crew_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselRankRequirement" ADD CONSTRAINT "VesselRankRequirement_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "public"."Vessel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselAssignment" ADD CONSTRAINT "VesselAssignment_crewId_fkey" FOREIGN KEY ("crewId") REFERENCES "public"."Crew"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VesselAssignment" ADD CONSTRAINT "VesselAssignment_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "public"."Vessel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_crewId_fkey" FOREIGN KEY ("crewId") REFERENCES "public"."Crew"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Course" ADD CONSTRAINT "Course_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "public"."TrainingPartner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TrainingRecord" ADD CONSTRAINT "TrainingRecord_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TrainingRecord" ADD CONSTRAINT "TrainingRecord_crewId_fkey" FOREIGN KEY ("crewId") REFERENCES "public"."Crew"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
