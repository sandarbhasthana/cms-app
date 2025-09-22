// Browser-safe types and enums for frontend use
// This file exports only the types and enums without importing the Prisma client
// User roles
export var Role;
(function (Role) {
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
    Role["ADMIN"] = "ADMIN";
    Role["HR"] = "HR";
    Role["CAPTAIN"] = "CAPTAIN";
    Role["CREW"] = "CREW";
})(Role || (Role = {}));
// Vessel roles for crew assignments
export var VesselRole;
(function (VesselRole) {
    VesselRole["MASTER"] = "MASTER";
    VesselRole["CHIEF_OFFICER"] = "CHIEF_OFFICER";
    VesselRole["SECOND_OFFICER"] = "SECOND_OFFICER";
    VesselRole["THIRD_OFFICER"] = "THIRD_OFFICER";
    VesselRole["DECK_CADET"] = "DECK_CADET";
    VesselRole["BOSUN"] = "BOSUN";
    VesselRole["ABLE_SEAMAN"] = "ABLE_SEAMAN";
    VesselRole["ORDINARY_SEAMAN"] = "ORDINARY_SEAMAN";
    VesselRole["CHIEF_ENGINEER"] = "CHIEF_ENGINEER";
    VesselRole["SECOND_ENGINEER"] = "SECOND_ENGINEER";
    VesselRole["THIRD_ENGINEER"] = "THIRD_ENGINEER";
    VesselRole["FOURTH_ENGINEER"] = "FOURTH_ENGINEER";
    VesselRole["ENGINE_CADET"] = "ENGINE_CADET";
    VesselRole["MOTORMAN"] = "MOTORMAN";
    VesselRole["OILER"] = "OILER";
    VesselRole["WIPER"] = "WIPER";
    VesselRole["CHIEF_COOK"] = "CHIEF_COOK";
    VesselRole["STEWARD"] = "STEWARD";
    VesselRole["MESSMAN"] = "MESSMAN";
})(VesselRole || (VesselRole = {}));
// Vessel departments
export var VesselDepartment;
(function (VesselDepartment) {
    VesselDepartment["DECK"] = "DECK";
    VesselDepartment["ENGINE"] = "ENGINE";
    VesselDepartment["CATERING"] = "CATERING";
})(VesselDepartment || (VesselDepartment = {}));
// Crew status
export var CrewStatus;
(function (CrewStatus) {
    CrewStatus["ACTIVE"] = "ACTIVE";
    CrewStatus["INACTIVE"] = "INACTIVE";
    CrewStatus["ON_LEAVE"] = "ON_LEAVE";
})(CrewStatus || (CrewStatus = {}));
// Vessel types
export var VesselType;
(function (VesselType) {
    VesselType["BULK_CARRIER"] = "BULK_CARRIER";
    VesselType["CONTAINER_SHIP"] = "CONTAINER_SHIP";
    VesselType["TANKER"] = "TANKER";
    VesselType["GENERAL_CARGO"] = "GENERAL_CARGO";
    VesselType["RO_RO"] = "RO_RO";
    VesselType["PASSENGER"] = "PASSENGER";
    VesselType["OFFSHORE"] = "OFFSHORE";
    VesselType["FISHING"] = "FISHING";
    VesselType["TUG"] = "TUG";
    VesselType["BARGE"] = "BARGE";
    VesselType["OTHER"] = "OTHER";
})(VesselType || (VesselType = {}));
// Engine makes
export var EngineMake;
(function (EngineMake) {
    EngineMake["MAN"] = "MAN";
    EngineMake["WARTSILA"] = "WARTSILA";
    EngineMake["CATERPILLAR"] = "CATERPILLAR";
    EngineMake["MITSUBISHI"] = "MITSUBISHI";
    EngineMake["YANMAR"] = "YANMAR";
    EngineMake["VOLVO"] = "VOLVO";
    EngineMake["CUMMINS"] = "CUMMINS";
    EngineMake["DEUTZ"] = "DEUTZ";
    EngineMake["OTHER"] = "OTHER";
})(EngineMake || (EngineMake = {}));
// Tonnage units
export var TonnageUnit;
(function (TonnageUnit) {
    TonnageUnit["GT"] = "GT";
    TonnageUnit["NT"] = "NT";
    TonnageUnit["DWT"] = "DWT";
})(TonnageUnit || (TonnageUnit = {}));
// Document types
export var DocumentType;
(function (DocumentType) {
    DocumentType["PASSPORT"] = "PASSPORT";
    DocumentType["SEAMAN_BOOK"] = "SEAMAN_BOOK";
    DocumentType["MEDICAL_CERTIFICATE"] = "MEDICAL_CERTIFICATE";
    DocumentType["STCW_CERTIFICATE"] = "STCW_CERTIFICATE";
    DocumentType["COC"] = "COC";
    DocumentType["COE"] = "COE";
    DocumentType["VISA"] = "VISA";
    DocumentType["OTHER"] = "OTHER";
})(DocumentType || (DocumentType = {}));
// Consultancy categories
export var ConsultancyCategory;
(function (ConsultancyCategory) {
    ConsultancyCategory["MARITIME_LAW"] = "MARITIME_LAW";
    ConsultancyCategory["TECHNICAL"] = "TECHNICAL";
    ConsultancyCategory["SAFETY"] = "SAFETY";
    ConsultancyCategory["ENVIRONMENTAL"] = "ENVIRONMENTAL";
    ConsultancyCategory["REGULATORY"] = "REGULATORY";
    ConsultancyCategory["OTHER"] = "OTHER";
})(ConsultancyCategory || (ConsultancyCategory = {}));
// Certificate types
export var CertificateType;
(function (CertificateType) {
    CertificateType["STCW"] = "STCW";
    CertificateType["COC"] = "COC";
    CertificateType["COE"] = "COE";
    CertificateType["MEDICAL"] = "MEDICAL";
    CertificateType["SAFETY"] = "SAFETY";
    CertificateType["SECURITY"] = "SECURITY";
    CertificateType["OTHER"] = "OTHER";
})(CertificateType || (CertificateType = {}));
// Export all enums as a single object for convenience
export const PrismaEnums = {
    Role,
    VesselRole,
    VesselDepartment,
    CrewStatus,
    VesselType,
    EngineMake,
    TonnageUnit,
    DocumentType,
    ConsultancyCategory,
    CertificateType
};
