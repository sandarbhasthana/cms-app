// Browser-safe types and enums for frontend use
// This file exports only the types and enums without importing the Prisma client

// User roles
export declare enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  HR = "HR",
  CAPTAIN = "CAPTAIN",
  CREW = "CREW"
}

// Vessel roles for crew assignments
export declare enum VesselRole {
  MASTER = "MASTER",
  CHIEF_OFFICER = "CHIEF_OFFICER",
  SECOND_OFFICER = "SECOND_OFFICER",
  THIRD_OFFICER = "THIRD_OFFICER",
  DECK_CADET = "DECK_CADET",
  BOSUN = "BOSUN",
  ABLE_SEAMAN = "ABLE_SEAMAN",
  ORDINARY_SEAMAN = "ORDINARY_SEAMAN",
  CHIEF_ENGINEER = "CHIEF_ENGINEER",
  SECOND_ENGINEER = "SECOND_ENGINEER",
  THIRD_ENGINEER = "THIRD_ENGINEER",
  FOURTH_ENGINEER = "FOURTH_ENGINEER",
  ENGINE_CADET = "ENGINE_CADET",
  MOTORMAN = "MOTORMAN",
  OILER = "OILER",
  WIPER = "WIPER",
  CHIEF_COOK = "CHIEF_COOK",
  STEWARD = "STEWARD",
  MESSMAN = "MESSMAN"
}

// Vessel departments
export declare enum VesselDepartment {
  DECK = "DECK",
  ENGINE = "ENGINE",
  CATERING = "CATERING"
}

// Crew status
export declare enum CrewStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ON_LEAVE = "ON_LEAVE"
}

// Vessel types
export declare enum VesselType {
  BULK_CARRIER = "BULK_CARRIER",
  CONTAINER_SHIP = "CONTAINER_SHIP",
  TANKER = "TANKER",
  GENERAL_CARGO = "GENERAL_CARGO",
  RO_RO = "RO_RO",
  PASSENGER = "PASSENGER",
  OFFSHORE = "OFFSHORE",
  FISHING = "FISHING",
  TUG = "TUG",
  BARGE = "BARGE",
  OTHER = "OTHER"
}

// Engine makes
export declare enum EngineMake {
  MAN = "MAN",
  WARTSILA = "WARTSILA",
  CATERPILLAR = "CATERPILLAR",
  MITSUBISHI = "MITSUBISHI",
  YANMAR = "YANMAR",
  VOLVO = "VOLVO",
  CUMMINS = "CUMMINS",
  DEUTZ = "DEUTZ",
  OTHER = "OTHER"
}

// Tonnage units
export declare enum TonnageUnit {
  GT = "GT",
  NT = "NT",
  DWT = "DWT"
}

// Document types
export declare enum DocumentType {
  PASSPORT = "PASSPORT",
  SEAMAN_BOOK = "SEAMAN_BOOK",
  MEDICAL_CERTIFICATE = "MEDICAL_CERTIFICATE",
  STCW_CERTIFICATE = "STCW_CERTIFICATE",
  COC = "COC",
  COE = "COE",
  VISA = "VISA",
  OTHER = "OTHER"
}

// Consultancy categories
export declare enum ConsultancyCategory {
  MARITIME_LAW = "MARITIME_LAW",
  TECHNICAL = "TECHNICAL",
  SAFETY = "SAFETY",
  ENVIRONMENTAL = "ENVIRONMENTAL",
  REGULATORY = "REGULATORY",
  OTHER = "OTHER"
}

// Certificate types
export declare enum CertificateType {
  STCW = "STCW",
  COC = "COC",
  COE = "COE",
  MEDICAL = "MEDICAL",
  SAFETY = "SAFETY",
  SECURITY = "SECURITY",
  OTHER = "OTHER"
}

// Export all enums as a single object for convenience
export declare const PrismaEnums: {
  Role: typeof Role;
  VesselRole: typeof VesselRole;
  VesselDepartment: typeof VesselDepartment;
  CrewStatus: typeof CrewStatus;
  VesselType: typeof VesselType;
  EngineMake: typeof EngineMake;
  TonnageUnit: typeof TonnageUnit;
  DocumentType: typeof DocumentType;
  ConsultancyCategory: typeof ConsultancyCategory;
  CertificateType: typeof CertificateType;
};
