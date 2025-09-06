// Re-export all types from the generated client
export type * from "./generated/client/index.js";

// Import the generated client module
import * as PrismaModule from "./generated/client/index.js";

// Export PrismaClient and Prisma namespace
export declare const PrismaClient: typeof PrismaModule.PrismaClient;
export declare const Prisma: typeof PrismaModule.Prisma;

// Re-export the Prisma namespace types explicitly
export declare namespace Prisma {
  export type VesselWhereInput = PrismaModule.Prisma.VesselWhereInput;
  export type VesselGetPayload<T> = PrismaModule.Prisma.VesselGetPayload<T>;
  export type VesselUpdateInput = PrismaModule.Prisma.VesselUpdateInput;
  export type CrewWhereInput = PrismaModule.Prisma.CrewWhereInput;
  export type CrewOrderByWithRelationInput =
    PrismaModule.Prisma.CrewOrderByWithRelationInput;
  export type CrewUpdateInput = PrismaModule.Prisma.CrewUpdateInput;
  export type TransactionClient = PrismaModule.Prisma.TransactionClient;
  export type PrismaClientKnownRequestError =
    PrismaModule.Prisma.PrismaClientKnownRequestError;
}

export default PrismaModule.PrismaClient;

// Export enum values and types properly
export declare const Role: typeof PrismaModule.Role;
export type Role = (typeof PrismaModule.Role)[keyof typeof PrismaModule.Role];

export declare const VesselRole: typeof PrismaModule.VesselRole;
export type VesselRole =
  (typeof PrismaModule.VesselRole)[keyof typeof PrismaModule.VesselRole];

export declare const VesselType: typeof PrismaModule.VesselType;
export type VesselType =
  (typeof PrismaModule.VesselType)[keyof typeof PrismaModule.VesselType];

export declare const EngineMake: typeof PrismaModule.EngineMake;
export type EngineMake =
  (typeof PrismaModule.EngineMake)[keyof typeof PrismaModule.EngineMake];

export declare const TonnageUnit: typeof PrismaModule.TonnageUnit;
export type TonnageUnit =
  (typeof PrismaModule.TonnageUnit)[keyof typeof PrismaModule.TonnageUnit];

export declare const DocumentType: typeof PrismaModule.DocumentType;
export type DocumentType =
  (typeof PrismaModule.DocumentType)[keyof typeof PrismaModule.DocumentType];

export declare const ConsultancyCategory: typeof PrismaModule.ConsultancyCategory;
export type ConsultancyCategory =
  (typeof PrismaModule.ConsultancyCategory)[keyof typeof PrismaModule.ConsultancyCategory];

export declare const CertificateType: typeof PrismaModule.CertificateType;
export type CertificateType =
  (typeof PrismaModule.CertificateType)[keyof typeof PrismaModule.CertificateType];

export declare const TrainingType: typeof PrismaModule.TrainingType;
export type TrainingType =
  (typeof PrismaModule.TrainingType)[keyof typeof PrismaModule.TrainingType];

export declare const VesselDepartment: typeof PrismaModule.VesselDepartment;
export type VesselDepartment =
  (typeof PrismaModule.VesselDepartment)[keyof typeof PrismaModule.VesselDepartment];

export declare const CrewStatus: typeof PrismaModule.CrewStatus;
export type CrewStatus =
  (typeof PrismaModule.CrewStatus)[keyof typeof PrismaModule.CrewStatus];

export declare const VesselUserRole: typeof PrismaModule.VesselUserRole;
export type VesselUserRole =
  (typeof PrismaModule.VesselUserRole)[keyof typeof PrismaModule.VesselUserRole];
