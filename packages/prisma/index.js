// Import the generated client directly
import * as PrismaModule from "./generated/client/index.js";
// Re-export runtime values
export const PrismaClient = PrismaModule.PrismaClient;
export const Prisma = PrismaModule.Prisma;
export default PrismaModule.PrismaClient;
// Export browser-safe enums for frontend use
export * from "./browser-types.js";
// Re-export all enum values
export const Role = PrismaModule.Role;
export const VesselRole = PrismaModule.VesselRole;
export const VesselType = PrismaModule.VesselType;
export const EngineMake = PrismaModule.EngineMake;
export const TonnageUnit = PrismaModule.TonnageUnit;
export const DocumentType = PrismaModule.DocumentType;
export const ConsultancyCategory = PrismaModule.ConsultancyCategory;
export const CertificateType = PrismaModule.CertificateType;
export const TrainingType = PrismaModule.TrainingType;
export const VesselDepartment = PrismaModule.VesselDepartment;
export const CrewStatus = PrismaModule.CrewStatus;
export const VesselUserRole = PrismaModule.VesselUserRole;
