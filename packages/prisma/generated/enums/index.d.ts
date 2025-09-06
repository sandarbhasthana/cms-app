
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * Organizations that use the system
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * Users of the system
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuditLog
 * Audit log for tracking user actions
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Crew
 * Crew members that work for the company
 */
export type Crew = $Result.DefaultSelection<Prisma.$CrewPayload>
/**
 * Model Vessel
 * Vessels that the company owns and uses
 */
export type Vessel = $Result.DefaultSelection<Prisma.$VesselPayload>
/**
 * Model VesselRankRequirement
 * 
 */
export type VesselRankRequirement = $Result.DefaultSelection<Prisma.$VesselRankRequirementPayload>
/**
 * Model VesselAssignment
 * 
 */
export type VesselAssignment = $Result.DefaultSelection<Prisma.$VesselAssignmentPayload>
/**
 * Model Document
 * Documents that are uploaded for crew members
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model ConsultancyPartner
 * Consultancy partners that the company will use to assign THIRD party tasks
 */
export type ConsultancyPartner = $Result.DefaultSelection<Prisma.$ConsultancyPartnerPayload>
/**
 * Model TrainingPartner
 * Organizations or vendors that provide training courses
 */
export type TrainingPartner = $Result.DefaultSelection<Prisma.$TrainingPartnerPayload>
/**
 * Model Course
 * Individual training courses, categorized and tied to a partner
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model TrainingRecord
 * Records each crew member's completion of a course
 */
export type TrainingRecord = $Result.DefaultSelection<Prisma.$TrainingRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  HR: 'HR',
  SCHEDULER: 'SCHEDULER',
  PAYROLL: 'PAYROLL',
  CREW: 'CREW',
  AUDITOR: 'AUDITOR',
  COMPLIANCE_VIEWER: 'COMPLIANCE_VIEWER',
  CREW_COORDINATOR: 'CREW_COORDINATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VesselRole: {
  CAPTAIN: 'CAPTAIN',
  SECOND_COOK: 'SECOND_COOK',
  SECOND_ENGINEER: 'SECOND_ENGINEER',
  SECOND_ENGINEER_NCV: 'SECOND_ENGINEER_NCV',
  SECOND_OFFICER: 'SECOND_OFFICER',
  THIRD_ENGINEER: 'THIRD_ENGINEER',
  THIRD_OFFICER: 'THIRD_OFFICER',
  FOURTH_ENGINEER: 'FOURTH_ENGINEER',
  FOURTH_ENGINEER_NCV: 'FOURTH_ENGINEER_NCV',
  FIFTH_ENGINEER: 'FIFTH_ENGINEER',
  AB: 'AB',
  ADDL_SECOND_ENGINEER: 'ADDL_SECOND_ENGINEER',
  ADDL_SECOND_OFFICER: 'ADDL_SECOND_OFFICER',
  ADDL_THIRD_ENGINEER: 'ADDL_THIRD_ENGINEER',
  ADDL_CHIEF_ENGINEER: 'ADDL_CHIEF_ENGINEER',
  ADDL_CHIEF_OFFICER: 'ADDL_CHIEF_OFFICER',
  ADD_MASTER: 'ADD_MASTER',
  ASST_ELECTRICAL_OFFICER: 'ASST_ELECTRICAL_OFFICER',
  BAR_TENDER: 'BAR_TENDER',
  BOSUN: 'BOSUN',
  CABIN_ATTENDANT: 'CABIN_ATTENDANT',
  CARGO_ENGINEER: 'CARGO_ENGINEER',
  CHEF: 'CHEF',
  CHIEF_COOK: 'CHIEF_COOK',
  CHIEF_ENGINEER: 'CHIEF_ENGINEER',
  CHIEF_ENGINEER_NCV: 'CHIEF_ENGINEER_NCV',
  CHIEF_OFFICER: 'CHIEF_OFFICER',
  CHIEF_OFFICER_NCV: 'CHIEF_OFFICER_NCV',
  CHIEF_STEWARD: 'CHIEF_STEWARD',
  CRANE_OPERATOR: 'CRANE_OPERATOR',
  DECK_CADET: 'DECK_CADET',
  DECK_FITTER: 'DECK_FITTER',
  DIVE_ELECTRICAL_TECHNICIAN: 'DIVE_ELECTRICAL_TECHNICIAN',
  DPO: 'DPO',
  DPO_SECOND_OFFICER: 'DPO_SECOND_OFFICER',
  DPO_THIRD_OFFICER: 'DPO_THIRD_OFFICER',
  DPO_CHIEF_OFFICER: 'DPO_CHIEF_OFFICER',
  DPO_MASTER: 'DPO_MASTER',
  DREDGER_CUTTER_OPERATOR: 'DREDGER_CUTTER_OPERATOR',
  DREDGER_ENGINEER: 'DREDGER_ENGINEER',
  DUAL_CADET: 'DUAL_CADET',
  ELECTRICAL_ENGINEER: 'ELECTRICAL_ENGINEER',
  ELECTRICAL_OFFICER: 'ELECTRICAL_OFFICER',
  ELECTRO_TECHNICAL_ENGINEER: 'ELECTRO_TECHNICAL_ENGINEER',
  ENGINE_FITTER: 'ENGINE_FITTER',
  EXTRA_MASTER: 'EXTRA_MASTER',
  FITTER: 'FITTER',
  GAS_ENGINEER: 'GAS_ENGINEER',
  GP: 'GP',
  HOTEL_MANAGER: 'HOTEL_MANAGER',
  INFOTECH: 'INFOTECH',
  INLAND_MASTER: 'INLAND_MASTER',
  INSTRUCTOR: 'INSTRUCTOR',
  INTERNAL_AUDITOR: 'INTERNAL_AUDITOR',
  JR_DPO_CHIEF_OFFICER: 'JR_DPO_CHIEF_OFFICER',
  JUNIOR_THIRD_OFFICER: 'JUNIOR_THIRD_OFFICER',
  JUNIOR_FOURTH_OFFICER: 'JUNIOR_FOURTH_OFFICER',
  JUNIOR_DPO: 'JUNIOR_DPO',
  JUNIOR_ENGINEER: 'JUNIOR_ENGINEER',
  JUNIOR_OFFICER: 'JUNIOR_OFFICER',
  LAUNDRYMAN: 'LAUNDRYMAN',
  MARINE_CONSULTANCY: 'MARINE_CONSULTANCY',
  MASTER: 'MASTER',
  MASTER_MARINER: 'MASTER_MARINER',
  MASTER_NCV: 'MASTER_NCV',
  MOTORMAN: 'MOTORMAN',
  MUSICIAN: 'MUSICIAN',
  NCV_NWKO: 'NCV_NWKO',
  OFFSHORE_INSTALLATION: 'OFFSHORE_INSTALLATION',
  OILER: 'OILER',
  OS: 'OS',
  PERSONNEL_MANAGER: 'PERSONNEL_MANAGER',
  PIPE_OPERATOR: 'PIPE_OPERATOR',
  PORT_OPERATION: 'PORT_OPERATION',
  PUMPMAN: 'PUMPMAN',
  PURSER: 'PURSER',
  RADIO_OFFICER: 'RADIO_OFFICER',
  REEFER_ENGINEER: 'REEFER_ENGINEER',
  REEFER_MECHANIC: 'REEFER_MECHANIC',
  REPAIR_YARD_DD: 'REPAIR_YARD_DD',
  RIGGER: 'RIGGER',
  ROUSTABOUT: 'ROUSTABOUT',
  SAFETY_OFFICER: 'SAFETY_OFFICER',
  SOUSE_CHEF: 'SOUSE_CHEF',
  SPORTS_DIRECTOR: 'SPORTS_DIRECTOR',
  SR_DPO_CHIEF_OFFICER: 'SR_DPO_CHIEF_OFFICER',
  SR_DPO_MASTER: 'SR_DPO_MASTER',
  STEWARD: 'STEWARD',
  SUPERINTENDENT: 'SUPERINTENDENT',
  TECHNICAL_MANAGER: 'TECHNICAL_MANAGER',
  TRAINEE_C_E: 'TRAINEE_C_E',
  TRAINEE_CADET: 'TRAINEE_CADET',
  TRAINEE_ELECTRICAL_OFFICER: 'TRAINEE_ELECTRICAL_OFFICER',
  TRAINEE_ENGINEER: 'TRAINEE_ENGINEER',
  TRAVEL_COORDINATOR: 'TRAVEL_COORDINATOR',
  TRAVEL_FITTER: 'TRAVEL_FITTER',
  TRAVEL_WIPER: 'TRAVEL_WIPER',
  TUBE_OPERATOR: 'TUBE_OPERATOR',
  TUG_HANDLER: 'TUG_HANDLER',
  VOY_REP_STAFF: 'VOY_REP_STAFF',
  WIPER: 'WIPER'
};

export type VesselRole = (typeof VesselRole)[keyof typeof VesselRole]


export const VesselType: {
  ACCOMMODATION: 'ACCOMMODATION',
  AHT: 'AHT',
  AHTS: 'AHTS',
  AHTS_DP_I: 'AHTS_DP_I',
  AHTS_DP_II: 'AHTS_DP_II',
  AHTS_DP_III: 'AHTS_DP_III',
  BARGE: 'BARGE',
  BITUMEN_TANKER: 'BITUMEN_TANKER',
  BULK_CARRIER: 'BULK_CARRIER',
  BUNKER_TANKER: 'BUNKER_TANKER',
  CAPE_BULK: 'CAPE_BULK',
  CAR_CARRIER: 'CAR_CARRIER',
  CELLULAR_CONTAINER: 'CELLULAR_CONTAINER',
  CEMENT_CARRIER: 'CEMENT_CARRIER',
  CHEMICAL_TANKER: 'CHEMICAL_TANKER',
  COASTAL_VESSEL: 'COASTAL_VESSEL',
  CONTAINER: 'CONTAINER',
  CONTAINER_VESSEL: 'CONTAINER_VESSEL',
  CRUDE_OIL_TANKER: 'CRUDE_OIL_TANKER',
  CRUISE_SHIP: 'CRUISE_SHIP',
  DEMOLITION_VESSEL: 'DEMOLITION_VESSEL',
  DP: 'DP',
  DP_I: 'DP_I',
  DP_II: 'DP_II',
  DP_III: 'DP_III',
  DPII_ROV: 'DPII_ROV',
  DREDGER: 'DREDGER',
  DRILL_SHIP: 'DRILL_SHIP',
  DRILL_SHIP_DP_I: 'DRILL_SHIP_DP_I',
  DRILL_SHIP_DP_II: 'DRILL_SHIP_DP_II',
  DRILL_SHIP_DP_III: 'DRILL_SHIP_DP_III',
  DRILLING_RIG: 'DRILLING_RIG',
  DRY_CARGO: 'DRY_CARGO',
  DRY_CARGO_VESSEL: 'DRY_CARGO_VESSEL',
  DSV: 'DSV',
  DSV_DP_I: 'DSV_DP_I',
  DSV_DP_II: 'DSV_DP_II',
  DSV_DP_III: 'DSV_DP_III',
  FFSV: 'FFSV',
  FISHING_VESSEL: 'FISHING_VESSEL',
  FPSO: 'FPSO',
  FSO: 'FSO',
  GEAR_BULK: 'GEAR_BULK',
  GENERAL_CARGO: 'GENERAL_CARGO',
  GTV: 'GTV',
  HEAVY_LIFT: 'HEAVY_LIFT',
  HOPPER_BARGE: 'HOPPER_BARGE',
  JACK_UP_BARGE: 'JACK_UP_BARGE',
  JACK_UP_RIG: 'JACK_UP_RIG',
  LEGC_ETHYLENE_CARRIERS: 'LEGC_ETHYLENE_CARRIERS',
  LIVESTOCK_CARRIER: 'LIVESTOCK_CARRIER',
  LNG_CARRIER: 'LNG_CARRIER',
  LPG_CARRIER: 'LPG_CARRIER',
  LUXURY_YACHT: 'LUXURY_YACHT',
  MINI_BULK_CARRIER: 'MINI_BULK_CARRIER',
  MLP: 'MLP',
  MR_TANKER: 'MR_TANKER',
  MSV: 'MSV',
  MSV_DP_I: 'MSV_DP_I',
  MSV_DP_II: 'MSV_DP_II',
  MSV_DP_III: 'MSV_DP_III',
  MULTI_PURPOSE: 'MULTI_PURPOSE',
  OBO: 'OBO',
  OFFSHORE_RESEARCH_VESSEL: 'OFFSHORE_RESEARCH_VESSEL',
  OFFSHORE_SUPPLY: 'OFFSHORE_SUPPLY',
  OFFSHORE_SUPPLY_VESSEL: 'OFFSHORE_SUPPLY_VESSEL',
  OIL_CHEM_TANKER: 'OIL_CHEM_TANKER',
  OIL_TANKER: 'OIL_TANKER',
  OSV: 'OSV',
  OSV_DP_I: 'OSV_DP_I',
  OSV_DP_II: 'OSV_DP_II',
  OSV_DP_III: 'OSV_DP_III',
  PASSENGER_CRUISE_VESSEL: 'PASSENGER_CRUISE_VESSEL',
  PASSENGER_SHIP: 'PASSENGER_SHIP',
  PIPELAYING_VESSEL: 'PIPELAYING_VESSEL',
  PRODUCT_TANKER: 'PRODUCT_TANKER',
  PSV: 'PSV',
  PSV_DP_I: 'PSV_DP_I',
  PSV_DP_II: 'PSV_DP_II',
  PSV_DP_III: 'PSV_DP_III',
  PURE_CAR_TRUCK_CARRIER: 'PURE_CAR_TRUCK_CARRIER',
  REEFER: 'REEFER',
  REEFER_CONTAINER: 'REEFER_CONTAINER',
  REEFER_CONTAINER_VESSEL: 'REEFER_CONTAINER_VESSEL',
  REEFER_VESSEL: 'REEFER_VESSEL',
  RIG: 'RIG',
  RO_RO_VESSEL: 'RO_RO_VESSEL',
  ROPAX_VESSEL: 'ROPAX_VESSEL',
  RORO_PASSENGER: 'RORO_PASSENGER',
  SAND_BARGE: 'SAND_BARGE',
  SELF_UNLOADER_BULK_VESSEL: 'SELF_UNLOADER_BULK_VESSEL',
  SP_SURVEY_VESSEL: 'SP_SURVEY_VESSEL',
  SUPPLY_UTILITY_VESSEL: 'SUPPLY_UTILITY_VESSEL',
  TNC: 'TNC',
  TRANSHIPPER: 'TRANSHIPPER',
  TUG: 'TUG',
  ULCC: 'ULCC',
  VLCC: 'VLCC',
  VLEC: 'VLEC',
  VLGC: 'VLGC',
  VLOC: 'VLOC',
  WAR_SHIP: 'WAR_SHIP',
  WOOD_LOG_CARRIER: 'WOOD_LOG_CARRIER'
};

export type VesselType = (typeof VesselType)[keyof typeof VesselType]


export const EngineMake: {
  ABB_STROMBERG: 'ABB_STROMBERG',
  AKASAKA: 'AKASAKA',
  BW_6GFVT2BF: 'BW_6GFVT2BF',
  BW_6560MC: 'BW_6560MC',
  BW_6S70MC_C: 'BW_6S70MC_C',
  BW_GFCA: 'BW_GFCA',
  BW_KEF: 'BW_KEF',
  BW_KGF: 'BW_KGF',
  BW_LMC: 'BW_LMC',
  BW_MC: 'BW_MC',
  BW_MC_C: 'BW_MC_C',
  BW_ME_B: 'BW_ME_B',
  BW_ME_C: 'BW_ME_C',
  BW_SMC: 'BW_SMC',
  BW_ST_X: 'BW_ST_X',
  BERGEN: 'BERGEN',
  BMZ_MAN_BW_7S50MC_C: 'BMZ_MAN_BW_7S50MC_C',
  CATERPILLAR: 'CATERPILLAR',
  CUMMINS_KTA50: 'CUMMINS_KTA50',
  DAIHATSU: 'DAIHATSU',
  DALIAN_SULZER: 'DALIAN_SULZER',
  DEUTZ: 'DEUTZ',
  DIESEL: 'DIESEL',
  DMD_SULZER: 'DMD_SULZER',
  GN8320ZC4B: 'GN8320ZC4B',
  HITACHI: 'HITACHI',
  HYUNDAI_MAN_BW_7_S_60_MC_C_MK_7: 'HYUNDAI_MAN_BW_7_S_60_MC_C_MK_7',
  Hyundai_MAN_BW_7S60MC_Mk_6: 'Hyundai_MAN_BW_7S60MC_Mk_6',
  JAPAN_ENGINE: 'JAPAN_ENGINE',
  KAWASAKI_MAN_BW: 'KAWASAKI_MAN_BW',
  KAWASAKI_HEAVY: 'KAWASAKI_HEAVY',
  KOBE_DIESEL: 'KOBE_DIESEL',
  KRUPP_MAK: 'KRUPP_MAK',
  MAK: 'MAK',
  MAN: 'MAN',
  MAN_6G50ME_B9_3: 'MAN_6G50ME_B9_3',
  MAN_BW: 'MAN_BW',
  MAN_BW_5S70MC: 'MAN_BW_5S70MC',
  MAN_BW_6S50MC_C: 'MAN_BW_6S50MC_C',
  MAN_BW_6S60MC_C: 'MAN_BW_6S60MC_C',
  MAN_BW_6S90MC: 'MAN_BW_6S90MC',
  MAN_BW_7S60_MC: 'MAN_BW_7S60_MC',
  MAN_BW_7S60MC_C: 'MAN_BW_7S60MC_C',
  MAN_BW_L32_40_MAN_BW_DIESEL_8L32_40: 'MAN_BW_L32_40_MAN_BW_DIESEL_8L32_40',
  MITSUBISHI: 'MITSUBISHI',
  MITSUBISHI_AKASAKA: 'MITSUBISHI_AKASAKA',
  MITSUBISHI_AKASAKA_DIESEL: 'MITSUBISHI_AKASAKA_DIESEL',
  MITSUBISHI_HEAVY: 'MITSUBISHI_HEAVY',
  MITSUBISHI_UEC: 'MITSUBISHI_UEC',
  MITSUI_MAN_BW: 'MITSUI_MAN_BW',
  MWM: 'MWM',
  NIIGATA: 'NIIGATA',
  NIPPATSU: 'NIPPATSU',
  PIELSTICK: 'PIELSTICK',
  STORK_WERKSPOR_DIESEL: 'STORK_WERKSPOR_DIESEL',
  SULZER: 'SULZER',
  SULZER_RD: 'SULZER_RD',
  SULZER_RLB: 'SULZER_RLB',
  SULZER_RND: 'SULZER_RND',
  SULZER_RT_FLEX: 'SULZER_RT_FLEX',
  SULZER_RTA: 'SULZER_RTA',
  WARTSILLA: 'WARTSILLA',
  WARTSILLA_DIESEL_BV: 'WARTSILLA_DIESEL_BV',
  YANMAR: 'YANMAR'
};

export type EngineMake = (typeof EngineMake)[keyof typeof EngineMake]


export const TonnageUnit: {
  BHP: 'BHP',
  CEUs: 'CEUs',
  DWT: 'DWT',
  GRT: 'GRT',
  KW: 'KW',
  LIMS: 'LIMS',
  M3: 'M3',
  TEUs: 'TEUs'
};

export type TonnageUnit = (typeof TonnageUnit)[keyof typeof TonnageUnit]


export const DocumentType: {
  PASSPORT: 'PASSPORT',
  VISA: 'VISA',
  CERTIFICATE: 'CERTIFICATE',
  CONTRACT: 'CONTRACT',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const ConsultancyCategory: {
  MARINE: 'MARINE',
  LEGAL: 'LEGAL',
  AUDIT: 'AUDIT',
  TRAINING: 'TRAINING',
  MEDICAL: 'MEDICAL'
};

export type ConsultancyCategory = (typeof ConsultancyCategory)[keyof typeof ConsultancyCategory]


export const CertificateType: {
  AFF: 'AFF',
  ARPA: 'ARPA',
  BTM: 'BTM',
  BTM_BRM: 'BTM_BRM',
  ECDIS_GENERIC: 'ECDIS_GENERIC',
  TYPE_SPECIFIC_ECDIS: 'TYPE_SPECIFIC_ECDIS',
  EFA: 'EFA',
  ERM: 'ERM',
  FPFF: 'FPFF',
  HIGH_VOLTAGE: 'HIGH_VOLTAGE',
  INCIDENT_INVESTIGATION: 'INCIDENT_INVESTIGATION',
  MEDICAL_CARE: 'MEDICAL_CARE',
  ME_ENGINE_FAMILIARIZATION: 'ME_ENGINE_FAMILIARIZATION',
  MFA: 'MFA',
  OIL_CHEM_GAS_ADV: 'OIL_CHEM_GAS_ADV',
  OIL_CHEM_GAS_DCE: 'OIL_CHEM_GAS_DCE',
  PSCRB: 'PSCRB',
  PSSR: 'PSSR',
  PST: 'PST',
  RANSCO: 'RANSCO',
  SAFETY_OFFICER: 'SAFETY_OFFICER',
  SDSD: 'SDSD',
  SHIP_HANDLING_SIM: 'SHIP_HANDLING_SIM',
  CARGO_HANDLING_SIM: 'CARGO_HANDLING_SIM',
  SSO: 'SSO',
  General_Restricted_Operator_s_Certificate: 'General_Restricted_Operator_s_Certificate',
  IGF_CODE_TRAINING: 'IGF_CODE_TRAINING',
  ISM_ISPS_MLC: 'ISM_ISPS_MLC',
  CROWD_MANAGEMENT: 'CROWD_MANAGEMENT',
  COMPRESSOR_BOILER_SAFETY: 'COMPRESSOR_BOILER_SAFETY',
  CRISIS_MANAGEMENT: 'CRISIS_MANAGEMENT',
  BALLAST_WATER_MGMT: 'BALLAST_WATER_MGMT',
  ENV_AWARENESS: 'ENV_AWARENESS',
  POLAR_CODE: 'POLAR_CODE',
  CYBER_SECURITY: 'CYBER_SECURITY',
  HELM_OPS: 'HELM_OPS',
  HELM_MGMT: 'HELM_MGMT',
  MARPOL_AWARENESS: 'MARPOL_AWARENESS',
  REFRIG_REEFER_HADNLING: 'REFRIG_REEFER_HADNLING',
  TANK_CLEANING: 'TANK_CLEANING',
  MLC_FAMILIARIZATION: 'MLC_FAMILIARIZATION'
};

export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType]


export const TrainingType: {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export type TrainingType = (typeof TrainingType)[keyof typeof TrainingType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VesselRole = $Enums.VesselRole

export const VesselRole: typeof $Enums.VesselRole

export type VesselType = $Enums.VesselType

export const VesselType: typeof $Enums.VesselType

export type EngineMake = $Enums.EngineMake

export const EngineMake: typeof $Enums.EngineMake

export type TonnageUnit = $Enums.TonnageUnit

export const TonnageUnit: typeof $Enums.TonnageUnit

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type ConsultancyCategory = $Enums.ConsultancyCategory

export const ConsultancyCategory: typeof $Enums.ConsultancyCategory

export type CertificateType = $Enums.CertificateType

export const CertificateType: typeof $Enums.CertificateType

export type TrainingType = $Enums.TrainingType

export const TrainingType: typeof $Enums.TrainingType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crew`: Exposes CRUD operations for the **Crew** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crews
    * const crews = await prisma.crew.findMany()
    * ```
    */
  get crew(): Prisma.CrewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vessel`: Exposes CRUD operations for the **Vessel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vessels
    * const vessels = await prisma.vessel.findMany()
    * ```
    */
  get vessel(): Prisma.VesselDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vesselRankRequirement`: Exposes CRUD operations for the **VesselRankRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VesselRankRequirements
    * const vesselRankRequirements = await prisma.vesselRankRequirement.findMany()
    * ```
    */
  get vesselRankRequirement(): Prisma.VesselRankRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vesselAssignment`: Exposes CRUD operations for the **VesselAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VesselAssignments
    * const vesselAssignments = await prisma.vesselAssignment.findMany()
    * ```
    */
  get vesselAssignment(): Prisma.VesselAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultancyPartner`: Exposes CRUD operations for the **ConsultancyPartner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultancyPartners
    * const consultancyPartners = await prisma.consultancyPartner.findMany()
    * ```
    */
  get consultancyPartner(): Prisma.ConsultancyPartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingPartner`: Exposes CRUD operations for the **TrainingPartner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingPartners
    * const trainingPartners = await prisma.trainingPartner.findMany()
    * ```
    */
  get trainingPartner(): Prisma.TrainingPartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingRecord`: Exposes CRUD operations for the **TrainingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingRecords
    * const trainingRecords = await prisma.trainingRecord.findMany()
    * ```
    */
  get trainingRecord(): Prisma.TrainingRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    AuditLog: 'AuditLog',
    Crew: 'Crew',
    Vessel: 'Vessel',
    VesselRankRequirement: 'VesselRankRequirement',
    VesselAssignment: 'VesselAssignment',
    Document: 'Document',
    ConsultancyPartner: 'ConsultancyPartner',
    TrainingPartner: 'TrainingPartner',
    Course: 'Course',
    TrainingRecord: 'TrainingRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "user" | "auditLog" | "crew" | "vessel" | "vesselRankRequirement" | "vesselAssignment" | "document" | "consultancyPartner" | "trainingPartner" | "course" | "trainingRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Crew: {
        payload: Prisma.$CrewPayload<ExtArgs>
        fields: Prisma.CrewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>
          }
          findFirst: {
            args: Prisma.CrewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>
          }
          findMany: {
            args: Prisma.CrewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>[]
          }
          create: {
            args: Prisma.CrewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>
          }
          createMany: {
            args: Prisma.CrewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>[]
          }
          delete: {
            args: Prisma.CrewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>
          }
          update: {
            args: Prisma.CrewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>
          }
          deleteMany: {
            args: Prisma.CrewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>[]
          }
          upsert: {
            args: Prisma.CrewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrewPayload>
          }
          aggregate: {
            args: Prisma.CrewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrew>
          }
          groupBy: {
            args: Prisma.CrewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrewCountArgs<ExtArgs>
            result: $Utils.Optional<CrewCountAggregateOutputType> | number
          }
        }
      }
      Vessel: {
        payload: Prisma.$VesselPayload<ExtArgs>
        fields: Prisma.VesselFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VesselFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VesselFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          findFirst: {
            args: Prisma.VesselFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VesselFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          findMany: {
            args: Prisma.VesselFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>[]
          }
          create: {
            args: Prisma.VesselCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          createMany: {
            args: Prisma.VesselCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VesselCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>[]
          }
          delete: {
            args: Prisma.VesselDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          update: {
            args: Prisma.VesselUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          deleteMany: {
            args: Prisma.VesselDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VesselUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VesselUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>[]
          }
          upsert: {
            args: Prisma.VesselUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          aggregate: {
            args: Prisma.VesselAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVessel>
          }
          groupBy: {
            args: Prisma.VesselGroupByArgs<ExtArgs>
            result: $Utils.Optional<VesselGroupByOutputType>[]
          }
          count: {
            args: Prisma.VesselCountArgs<ExtArgs>
            result: $Utils.Optional<VesselCountAggregateOutputType> | number
          }
        }
      }
      VesselRankRequirement: {
        payload: Prisma.$VesselRankRequirementPayload<ExtArgs>
        fields: Prisma.VesselRankRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VesselRankRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VesselRankRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>
          }
          findFirst: {
            args: Prisma.VesselRankRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VesselRankRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>
          }
          findMany: {
            args: Prisma.VesselRankRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>[]
          }
          create: {
            args: Prisma.VesselRankRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>
          }
          createMany: {
            args: Prisma.VesselRankRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VesselRankRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>[]
          }
          delete: {
            args: Prisma.VesselRankRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>
          }
          update: {
            args: Prisma.VesselRankRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>
          }
          deleteMany: {
            args: Prisma.VesselRankRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VesselRankRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VesselRankRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>[]
          }
          upsert: {
            args: Prisma.VesselRankRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselRankRequirementPayload>
          }
          aggregate: {
            args: Prisma.VesselRankRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVesselRankRequirement>
          }
          groupBy: {
            args: Prisma.VesselRankRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<VesselRankRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.VesselRankRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<VesselRankRequirementCountAggregateOutputType> | number
          }
        }
      }
      VesselAssignment: {
        payload: Prisma.$VesselAssignmentPayload<ExtArgs>
        fields: Prisma.VesselAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VesselAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VesselAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>
          }
          findFirst: {
            args: Prisma.VesselAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VesselAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>
          }
          findMany: {
            args: Prisma.VesselAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>[]
          }
          create: {
            args: Prisma.VesselAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>
          }
          createMany: {
            args: Prisma.VesselAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VesselAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>[]
          }
          delete: {
            args: Prisma.VesselAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>
          }
          update: {
            args: Prisma.VesselAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.VesselAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VesselAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VesselAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.VesselAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselAssignmentPayload>
          }
          aggregate: {
            args: Prisma.VesselAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVesselAssignment>
          }
          groupBy: {
            args: Prisma.VesselAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VesselAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VesselAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<VesselAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      ConsultancyPartner: {
        payload: Prisma.$ConsultancyPartnerPayload<ExtArgs>
        fields: Prisma.ConsultancyPartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultancyPartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultancyPartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>
          }
          findFirst: {
            args: Prisma.ConsultancyPartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultancyPartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>
          }
          findMany: {
            args: Prisma.ConsultancyPartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>[]
          }
          create: {
            args: Prisma.ConsultancyPartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>
          }
          createMany: {
            args: Prisma.ConsultancyPartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultancyPartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>[]
          }
          delete: {
            args: Prisma.ConsultancyPartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>
          }
          update: {
            args: Prisma.ConsultancyPartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>
          }
          deleteMany: {
            args: Prisma.ConsultancyPartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultancyPartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultancyPartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>[]
          }
          upsert: {
            args: Prisma.ConsultancyPartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultancyPartnerPayload>
          }
          aggregate: {
            args: Prisma.ConsultancyPartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultancyPartner>
          }
          groupBy: {
            args: Prisma.ConsultancyPartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultancyPartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultancyPartnerCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultancyPartnerCountAggregateOutputType> | number
          }
        }
      }
      TrainingPartner: {
        payload: Prisma.$TrainingPartnerPayload<ExtArgs>
        fields: Prisma.TrainingPartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingPartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingPartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>
          }
          findFirst: {
            args: Prisma.TrainingPartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingPartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>
          }
          findMany: {
            args: Prisma.TrainingPartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>[]
          }
          create: {
            args: Prisma.TrainingPartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>
          }
          createMany: {
            args: Prisma.TrainingPartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingPartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>[]
          }
          delete: {
            args: Prisma.TrainingPartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>
          }
          update: {
            args: Prisma.TrainingPartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>
          }
          deleteMany: {
            args: Prisma.TrainingPartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingPartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingPartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>[]
          }
          upsert: {
            args: Prisma.TrainingPartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPartnerPayload>
          }
          aggregate: {
            args: Prisma.TrainingPartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingPartner>
          }
          groupBy: {
            args: Prisma.TrainingPartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingPartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingPartnerCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingPartnerCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      TrainingRecord: {
        payload: Prisma.$TrainingRecordPayload<ExtArgs>
        fields: Prisma.TrainingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          findFirst: {
            args: Prisma.TrainingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          findMany: {
            args: Prisma.TrainingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>[]
          }
          create: {
            args: Prisma.TrainingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          createMany: {
            args: Prisma.TrainingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>[]
          }
          delete: {
            args: Prisma.TrainingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          update: {
            args: Prisma.TrainingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          deleteMany: {
            args: Prisma.TrainingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>[]
          }
          upsert: {
            args: Prisma.TrainingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          aggregate: {
            args: Prisma.TrainingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingRecord>
          }
          groupBy: {
            args: Prisma.TrainingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    user?: UserOmit
    auditLog?: AuditLogOmit
    crew?: CrewOmit
    vessel?: VesselOmit
    vesselRankRequirement?: VesselRankRequirementOmit
    vesselAssignment?: VesselAssignmentOmit
    document?: DocumentOmit
    consultancyPartner?: ConsultancyPartnerOmit
    trainingPartner?: TrainingPartnerOmit
    course?: CourseOmit
    trainingRecord?: TrainingRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdUsers: number
    updatedUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
    updatedUsers?: boolean | UserCountOutputTypeCountUpdatedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CrewCountOutputType
   */

  export type CrewCountOutputType = {
    Document: number
    TrainingRecord: number
    VesselAssignment: number
  }

  export type CrewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | CrewCountOutputTypeCountDocumentArgs
    TrainingRecord?: boolean | CrewCountOutputTypeCountTrainingRecordArgs
    VesselAssignment?: boolean | CrewCountOutputTypeCountVesselAssignmentArgs
  }

  // Custom InputTypes
  /**
   * CrewCountOutputType without action
   */
  export type CrewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrewCountOutputType
     */
    select?: CrewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrewCountOutputType without action
   */
  export type CrewCountOutputTypeCountDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * CrewCountOutputType without action
   */
  export type CrewCountOutputTypeCountTrainingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRecordWhereInput
  }

  /**
   * CrewCountOutputType without action
   */
  export type CrewCountOutputTypeCountVesselAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselAssignmentWhereInput
  }


  /**
   * Count Type VesselCountOutputType
   */

  export type VesselCountOutputType = {
    VesselAssignment: number
    rankRequirements: number
  }

  export type VesselCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VesselAssignment?: boolean | VesselCountOutputTypeCountVesselAssignmentArgs
    rankRequirements?: boolean | VesselCountOutputTypeCountRankRequirementsArgs
  }

  // Custom InputTypes
  /**
   * VesselCountOutputType without action
   */
  export type VesselCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselCountOutputType
     */
    select?: VesselCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VesselCountOutputType without action
   */
  export type VesselCountOutputTypeCountVesselAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselAssignmentWhereInput
  }

  /**
   * VesselCountOutputType without action
   */
  export type VesselCountOutputTypeCountRankRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselRankRequirementWhereInput
  }


  /**
   * Count Type TrainingPartnerCountOutputType
   */

  export type TrainingPartnerCountOutputType = {
    courses: number
  }

  export type TrainingPartnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | TrainingPartnerCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * TrainingPartnerCountOutputType without action
   */
  export type TrainingPartnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartnerCountOutputType
     */
    select?: TrainingPartnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainingPartnerCountOutputType without action
   */
  export type TrainingPartnerCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    TrainingRecord: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrainingRecord?: boolean | CourseCountOutputTypeCountTrainingRecordArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTrainingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    orgId: string | null
    name: string | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    orgId: string | null
    name: string | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    orgId: number
    name: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    orgId?: true
    name?: true
    createdBy?: true
    updatedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    orgId?: true
    name?: true
    createdBy?: true
    updatedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    orgId?: true
    name?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    orgId: string
    name: string
    createdBy: string
    updatedBy: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
    updatedUsers?: boolean | User$updatedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orgId?: boolean
    name?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "orgId" | "name" | "createdBy" | "updatedBy", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
    updatedUsers?: boolean | User$updatedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    updater?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
      org: Prisma.$OrganizationPayload<ExtArgs>
      updater: Prisma.$UserPayload<ExtArgs>
      updatedUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      orgId: string
      name: string
      createdBy: string
      updatedBy: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updater<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedUsers<T extends User$updatedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly orgId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdBy: FieldRef<"User", 'String'>
    readonly updatedBy: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.updatedUsers
   */
  export type User$updatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    actorId: string | null
    targetUserId: string | null
    orgId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    actorId: string | null
    targetUserId: string | null
    orgId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    actorId: number
    targetUserId: number
    orgId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    actorId?: true
    targetUserId?: true
    orgId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    actorId?: true
    targetUserId?: true
    orgId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    actorId?: true
    targetUserId?: true
    orgId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    actorId: string
    targetUserId: string | null
    orgId: string
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    actorId?: boolean
    targetUserId?: boolean
    orgId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    actorId?: boolean
    targetUserId?: boolean
    orgId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    actorId?: boolean
    targetUserId?: boolean
    orgId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    actorId?: boolean
    targetUserId?: boolean
    orgId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "actorId" | "targetUserId" | "orgId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      actorId: string
      targetUserId: string | null
      orgId: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly targetUserId: FieldRef<"AuditLog", 'String'>
    readonly orgId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model Crew
   */

  export type AggregateCrew = {
    _count: CrewCountAggregateOutputType | null
    _min: CrewMinAggregateOutputType | null
    _max: CrewMaxAggregateOutputType | null
  }

  export type CrewMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    rank: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrewMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    rank: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrewCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    rank: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrewMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    rank?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrewMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    rank?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrewCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    rank?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crew to aggregate.
     */
    where?: CrewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crews to fetch.
     */
    orderBy?: CrewOrderByWithRelationInput | CrewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crews
    **/
    _count?: true | CrewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrewMaxAggregateInputType
  }

  export type GetCrewAggregateType<T extends CrewAggregateArgs> = {
        [P in keyof T & keyof AggregateCrew]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrew[P]>
      : GetScalarType<T[P], AggregateCrew[P]>
  }




  export type CrewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrewWhereInput
    orderBy?: CrewOrderByWithAggregationInput | CrewOrderByWithAggregationInput[]
    by: CrewScalarFieldEnum[] | CrewScalarFieldEnum
    having?: CrewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrewCountAggregateInputType | true
    _min?: CrewMinAggregateInputType
    _max?: CrewMaxAggregateInputType
  }

  export type CrewGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CrewCountAggregateOutputType | null
    _min: CrewMinAggregateOutputType | null
    _max: CrewMaxAggregateOutputType | null
  }

  type GetCrewGroupByPayload<T extends CrewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrewGroupByOutputType[P]>
            : GetScalarType<T[P], CrewGroupByOutputType[P]>
        }
      >
    >


  export type CrewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    rank?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | Crew$DocumentArgs<ExtArgs>
    TrainingRecord?: boolean | Crew$TrainingRecordArgs<ExtArgs>
    VesselAssignment?: boolean | Crew$VesselAssignmentArgs<ExtArgs>
    _count?: boolean | CrewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crew"]>

  export type CrewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    rank?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crew"]>

  export type CrewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    rank?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crew"]>

  export type CrewSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    rank?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "rank" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["crew"]>
  export type CrewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | Crew$DocumentArgs<ExtArgs>
    TrainingRecord?: boolean | Crew$TrainingRecordArgs<ExtArgs>
    VesselAssignment?: boolean | Crew$VesselAssignmentArgs<ExtArgs>
    _count?: boolean | CrewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CrewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CrewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crew"
    objects: {
      Document: Prisma.$DocumentPayload<ExtArgs>[]
      TrainingRecord: Prisma.$TrainingRecordPayload<ExtArgs>[]
      VesselAssignment: Prisma.$VesselAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      rank: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crew"]>
    composites: {}
  }

  type CrewGetPayload<S extends boolean | null | undefined | CrewDefaultArgs> = $Result.GetResult<Prisma.$CrewPayload, S>

  type CrewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrewCountAggregateInputType | true
    }

  export interface CrewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crew'], meta: { name: 'Crew' } }
    /**
     * Find zero or one Crew that matches the filter.
     * @param {CrewFindUniqueArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrewFindUniqueArgs>(args: SelectSubset<T, CrewFindUniqueArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crew that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrewFindUniqueOrThrowArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrewFindUniqueOrThrowArgs>(args: SelectSubset<T, CrewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crew that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewFindFirstArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrewFindFirstArgs>(args?: SelectSubset<T, CrewFindFirstArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crew that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewFindFirstOrThrowArgs} args - Arguments to find a Crew
     * @example
     * // Get one Crew
     * const crew = await prisma.crew.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrewFindFirstOrThrowArgs>(args?: SelectSubset<T, CrewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crews
     * const crews = await prisma.crew.findMany()
     * 
     * // Get first 10 Crews
     * const crews = await prisma.crew.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crewWithIdOnly = await prisma.crew.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrewFindManyArgs>(args?: SelectSubset<T, CrewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crew.
     * @param {CrewCreateArgs} args - Arguments to create a Crew.
     * @example
     * // Create one Crew
     * const Crew = await prisma.crew.create({
     *   data: {
     *     // ... data to create a Crew
     *   }
     * })
     * 
     */
    create<T extends CrewCreateArgs>(args: SelectSubset<T, CrewCreateArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crews.
     * @param {CrewCreateManyArgs} args - Arguments to create many Crews.
     * @example
     * // Create many Crews
     * const crew = await prisma.crew.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrewCreateManyArgs>(args?: SelectSubset<T, CrewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crews and returns the data saved in the database.
     * @param {CrewCreateManyAndReturnArgs} args - Arguments to create many Crews.
     * @example
     * // Create many Crews
     * const crew = await prisma.crew.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crews and only return the `id`
     * const crewWithIdOnly = await prisma.crew.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrewCreateManyAndReturnArgs>(args?: SelectSubset<T, CrewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crew.
     * @param {CrewDeleteArgs} args - Arguments to delete one Crew.
     * @example
     * // Delete one Crew
     * const Crew = await prisma.crew.delete({
     *   where: {
     *     // ... filter to delete one Crew
     *   }
     * })
     * 
     */
    delete<T extends CrewDeleteArgs>(args: SelectSubset<T, CrewDeleteArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crew.
     * @param {CrewUpdateArgs} args - Arguments to update one Crew.
     * @example
     * // Update one Crew
     * const crew = await prisma.crew.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrewUpdateArgs>(args: SelectSubset<T, CrewUpdateArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crews.
     * @param {CrewDeleteManyArgs} args - Arguments to filter Crews to delete.
     * @example
     * // Delete a few Crews
     * const { count } = await prisma.crew.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrewDeleteManyArgs>(args?: SelectSubset<T, CrewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crews
     * const crew = await prisma.crew.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrewUpdateManyArgs>(args: SelectSubset<T, CrewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crews and returns the data updated in the database.
     * @param {CrewUpdateManyAndReturnArgs} args - Arguments to update many Crews.
     * @example
     * // Update many Crews
     * const crew = await prisma.crew.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crews and only return the `id`
     * const crewWithIdOnly = await prisma.crew.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrewUpdateManyAndReturnArgs>(args: SelectSubset<T, CrewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crew.
     * @param {CrewUpsertArgs} args - Arguments to update or create a Crew.
     * @example
     * // Update or create a Crew
     * const crew = await prisma.crew.upsert({
     *   create: {
     *     // ... data to create a Crew
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crew we want to update
     *   }
     * })
     */
    upsert<T extends CrewUpsertArgs>(args: SelectSubset<T, CrewUpsertArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewCountArgs} args - Arguments to filter Crews to count.
     * @example
     * // Count the number of Crews
     * const count = await prisma.crew.count({
     *   where: {
     *     // ... the filter for the Crews we want to count
     *   }
     * })
    **/
    count<T extends CrewCountArgs>(
      args?: Subset<T, CrewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crew.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrewAggregateArgs>(args: Subset<T, CrewAggregateArgs>): Prisma.PrismaPromise<GetCrewAggregateType<T>>

    /**
     * Group by Crew.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrewGroupByArgs['orderBy'] }
        : { orderBy?: CrewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crew model
   */
  readonly fields: CrewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crew.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Document<T extends Crew$DocumentArgs<ExtArgs> = {}>(args?: Subset<T, Crew$DocumentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TrainingRecord<T extends Crew$TrainingRecordArgs<ExtArgs> = {}>(args?: Subset<T, Crew$TrainingRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    VesselAssignment<T extends Crew$VesselAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Crew$VesselAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Crew model
   */
  interface CrewFieldRefs {
    readonly id: FieldRef<"Crew", 'String'>
    readonly firstName: FieldRef<"Crew", 'String'>
    readonly lastName: FieldRef<"Crew", 'String'>
    readonly rank: FieldRef<"Crew", 'String'>
    readonly status: FieldRef<"Crew", 'String'>
    readonly createdAt: FieldRef<"Crew", 'DateTime'>
    readonly updatedAt: FieldRef<"Crew", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crew findUnique
   */
  export type CrewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * Filter, which Crew to fetch.
     */
    where: CrewWhereUniqueInput
  }

  /**
   * Crew findUniqueOrThrow
   */
  export type CrewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * Filter, which Crew to fetch.
     */
    where: CrewWhereUniqueInput
  }

  /**
   * Crew findFirst
   */
  export type CrewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * Filter, which Crew to fetch.
     */
    where?: CrewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crews to fetch.
     */
    orderBy?: CrewOrderByWithRelationInput | CrewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crews.
     */
    cursor?: CrewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crews.
     */
    distinct?: CrewScalarFieldEnum | CrewScalarFieldEnum[]
  }

  /**
   * Crew findFirstOrThrow
   */
  export type CrewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * Filter, which Crew to fetch.
     */
    where?: CrewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crews to fetch.
     */
    orderBy?: CrewOrderByWithRelationInput | CrewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crews.
     */
    cursor?: CrewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crews.
     */
    distinct?: CrewScalarFieldEnum | CrewScalarFieldEnum[]
  }

  /**
   * Crew findMany
   */
  export type CrewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * Filter, which Crews to fetch.
     */
    where?: CrewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crews to fetch.
     */
    orderBy?: CrewOrderByWithRelationInput | CrewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crews.
     */
    cursor?: CrewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crews.
     */
    skip?: number
    distinct?: CrewScalarFieldEnum | CrewScalarFieldEnum[]
  }

  /**
   * Crew create
   */
  export type CrewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * The data needed to create a Crew.
     */
    data: XOR<CrewCreateInput, CrewUncheckedCreateInput>
  }

  /**
   * Crew createMany
   */
  export type CrewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crews.
     */
    data: CrewCreateManyInput | CrewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crew createManyAndReturn
   */
  export type CrewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * The data used to create many Crews.
     */
    data: CrewCreateManyInput | CrewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crew update
   */
  export type CrewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * The data needed to update a Crew.
     */
    data: XOR<CrewUpdateInput, CrewUncheckedUpdateInput>
    /**
     * Choose, which Crew to update.
     */
    where: CrewWhereUniqueInput
  }

  /**
   * Crew updateMany
   */
  export type CrewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crews.
     */
    data: XOR<CrewUpdateManyMutationInput, CrewUncheckedUpdateManyInput>
    /**
     * Filter which Crews to update
     */
    where?: CrewWhereInput
    /**
     * Limit how many Crews to update.
     */
    limit?: number
  }

  /**
   * Crew updateManyAndReturn
   */
  export type CrewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * The data used to update Crews.
     */
    data: XOR<CrewUpdateManyMutationInput, CrewUncheckedUpdateManyInput>
    /**
     * Filter which Crews to update
     */
    where?: CrewWhereInput
    /**
     * Limit how many Crews to update.
     */
    limit?: number
  }

  /**
   * Crew upsert
   */
  export type CrewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * The filter to search for the Crew to update in case it exists.
     */
    where: CrewWhereUniqueInput
    /**
     * In case the Crew found by the `where` argument doesn't exist, create a new Crew with this data.
     */
    create: XOR<CrewCreateInput, CrewUncheckedCreateInput>
    /**
     * In case the Crew was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrewUpdateInput, CrewUncheckedUpdateInput>
  }

  /**
   * Crew delete
   */
  export type CrewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
    /**
     * Filter which Crew to delete.
     */
    where: CrewWhereUniqueInput
  }

  /**
   * Crew deleteMany
   */
  export type CrewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crews to delete
     */
    where?: CrewWhereInput
    /**
     * Limit how many Crews to delete.
     */
    limit?: number
  }

  /**
   * Crew.Document
   */
  export type Crew$DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Crew.TrainingRecord
   */
  export type Crew$TrainingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    where?: TrainingRecordWhereInput
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    cursor?: TrainingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * Crew.VesselAssignment
   */
  export type Crew$VesselAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    where?: VesselAssignmentWhereInput
    orderBy?: VesselAssignmentOrderByWithRelationInput | VesselAssignmentOrderByWithRelationInput[]
    cursor?: VesselAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VesselAssignmentScalarFieldEnum | VesselAssignmentScalarFieldEnum[]
  }

  /**
   * Crew without action
   */
  export type CrewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crew
     */
    select?: CrewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crew
     */
    omit?: CrewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrewInclude<ExtArgs> | null
  }


  /**
   * Model Vessel
   */

  export type AggregateVessel = {
    _count: VesselCountAggregateOutputType | null
    _avg: VesselAvgAggregateOutputType | null
    _sum: VesselSumAggregateOutputType | null
    _min: VesselMinAggregateOutputType | null
    _max: VesselMaxAggregateOutputType | null
  }

  export type VesselAvgAggregateOutputType = {
    capacity: number | null
    bhpKw: number | null
    dwt: number | null
    grt: number | null
    tonnageValue: number | null
    yearBuilt: number | null
  }

  export type VesselSumAggregateOutputType = {
    capacity: number | null
    bhpKw: number | null
    dwt: number | null
    grt: number | null
    tonnageValue: number | null
    yearBuilt: number | null
  }

  export type VesselMinAggregateOutputType = {
    id: string | null
    name: string | null
    imoNumber: string | null
    capacity: number | null
    homePort: string | null
    vesselType: $Enums.VesselType | null
    createdAt: Date | null
    updatedAt: Date | null
    bhpKw: number | null
    companyName: string | null
    dwt: number | null
    flag: string | null
    grt: number | null
    tonnageValue: number | null
    ums: boolean | null
    yearBuilt: number | null
    orgId: string | null
    engineMake: $Enums.EngineMake | null
    tonnageUnit: $Enums.TonnageUnit | null
    callSign: string | null
    contactEmail: string | null
    contactPersonName: string | null
    contactPhone: string | null
    deletedAt: Date | null
    inspectionDueDate: Date | null
    isActive: boolean | null
    lastInspectionDate: Date | null
    mmsi: string | null
    safetyCertificateUrl: string | null
  }

  export type VesselMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imoNumber: string | null
    capacity: number | null
    homePort: string | null
    vesselType: $Enums.VesselType | null
    createdAt: Date | null
    updatedAt: Date | null
    bhpKw: number | null
    companyName: string | null
    dwt: number | null
    flag: string | null
    grt: number | null
    tonnageValue: number | null
    ums: boolean | null
    yearBuilt: number | null
    orgId: string | null
    engineMake: $Enums.EngineMake | null
    tonnageUnit: $Enums.TonnageUnit | null
    callSign: string | null
    contactEmail: string | null
    contactPersonName: string | null
    contactPhone: string | null
    deletedAt: Date | null
    inspectionDueDate: Date | null
    isActive: boolean | null
    lastInspectionDate: Date | null
    mmsi: string | null
    safetyCertificateUrl: string | null
  }

  export type VesselCountAggregateOutputType = {
    id: number
    name: number
    imoNumber: number
    capacity: number
    homePort: number
    vesselType: number
    createdAt: number
    updatedAt: number
    bhpKw: number
    companyName: number
    dwt: number
    flag: number
    grt: number
    tonnageValue: number
    ums: number
    yearBuilt: number
    orgId: number
    engineMake: number
    tonnageUnit: number
    callSign: number
    contactEmail: number
    contactPersonName: number
    contactPhone: number
    deletedAt: number
    inspectionDueDate: number
    isActive: number
    lastInspectionDate: number
    mmsi: number
    safetyCertificateUrl: number
    _all: number
  }


  export type VesselAvgAggregateInputType = {
    capacity?: true
    bhpKw?: true
    dwt?: true
    grt?: true
    tonnageValue?: true
    yearBuilt?: true
  }

  export type VesselSumAggregateInputType = {
    capacity?: true
    bhpKw?: true
    dwt?: true
    grt?: true
    tonnageValue?: true
    yearBuilt?: true
  }

  export type VesselMinAggregateInputType = {
    id?: true
    name?: true
    imoNumber?: true
    capacity?: true
    homePort?: true
    vesselType?: true
    createdAt?: true
    updatedAt?: true
    bhpKw?: true
    companyName?: true
    dwt?: true
    flag?: true
    grt?: true
    tonnageValue?: true
    ums?: true
    yearBuilt?: true
    orgId?: true
    engineMake?: true
    tonnageUnit?: true
    callSign?: true
    contactEmail?: true
    contactPersonName?: true
    contactPhone?: true
    deletedAt?: true
    inspectionDueDate?: true
    isActive?: true
    lastInspectionDate?: true
    mmsi?: true
    safetyCertificateUrl?: true
  }

  export type VesselMaxAggregateInputType = {
    id?: true
    name?: true
    imoNumber?: true
    capacity?: true
    homePort?: true
    vesselType?: true
    createdAt?: true
    updatedAt?: true
    bhpKw?: true
    companyName?: true
    dwt?: true
    flag?: true
    grt?: true
    tonnageValue?: true
    ums?: true
    yearBuilt?: true
    orgId?: true
    engineMake?: true
    tonnageUnit?: true
    callSign?: true
    contactEmail?: true
    contactPersonName?: true
    contactPhone?: true
    deletedAt?: true
    inspectionDueDate?: true
    isActive?: true
    lastInspectionDate?: true
    mmsi?: true
    safetyCertificateUrl?: true
  }

  export type VesselCountAggregateInputType = {
    id?: true
    name?: true
    imoNumber?: true
    capacity?: true
    homePort?: true
    vesselType?: true
    createdAt?: true
    updatedAt?: true
    bhpKw?: true
    companyName?: true
    dwt?: true
    flag?: true
    grt?: true
    tonnageValue?: true
    ums?: true
    yearBuilt?: true
    orgId?: true
    engineMake?: true
    tonnageUnit?: true
    callSign?: true
    contactEmail?: true
    contactPersonName?: true
    contactPhone?: true
    deletedAt?: true
    inspectionDueDate?: true
    isActive?: true
    lastInspectionDate?: true
    mmsi?: true
    safetyCertificateUrl?: true
    _all?: true
  }

  export type VesselAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vessel to aggregate.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vessels
    **/
    _count?: true | VesselCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VesselAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VesselSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VesselMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VesselMaxAggregateInputType
  }

  export type GetVesselAggregateType<T extends VesselAggregateArgs> = {
        [P in keyof T & keyof AggregateVessel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVessel[P]>
      : GetScalarType<T[P], AggregateVessel[P]>
  }




  export type VesselGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselWhereInput
    orderBy?: VesselOrderByWithAggregationInput | VesselOrderByWithAggregationInput[]
    by: VesselScalarFieldEnum[] | VesselScalarFieldEnum
    having?: VesselScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VesselCountAggregateInputType | true
    _avg?: VesselAvgAggregateInputType
    _sum?: VesselSumAggregateInputType
    _min?: VesselMinAggregateInputType
    _max?: VesselMaxAggregateInputType
  }

  export type VesselGroupByOutputType = {
    id: string
    name: string
    imoNumber: string
    capacity: number | null
    homePort: string | null
    vesselType: $Enums.VesselType | null
    createdAt: Date
    updatedAt: Date
    bhpKw: number | null
    companyName: string | null
    dwt: number | null
    flag: string | null
    grt: number | null
    tonnageValue: number | null
    ums: boolean | null
    yearBuilt: number | null
    orgId: string
    engineMake: $Enums.EngineMake | null
    tonnageUnit: $Enums.TonnageUnit | null
    callSign: string | null
    contactEmail: string | null
    contactPersonName: string | null
    contactPhone: string | null
    deletedAt: Date | null
    inspectionDueDate: Date | null
    isActive: boolean
    lastInspectionDate: Date | null
    mmsi: string | null
    safetyCertificateUrl: string | null
    _count: VesselCountAggregateOutputType | null
    _avg: VesselAvgAggregateOutputType | null
    _sum: VesselSumAggregateOutputType | null
    _min: VesselMinAggregateOutputType | null
    _max: VesselMaxAggregateOutputType | null
  }

  type GetVesselGroupByPayload<T extends VesselGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VesselGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VesselGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VesselGroupByOutputType[P]>
            : GetScalarType<T[P], VesselGroupByOutputType[P]>
        }
      >
    >


  export type VesselSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    capacity?: boolean
    homePort?: boolean
    vesselType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bhpKw?: boolean
    companyName?: boolean
    dwt?: boolean
    flag?: boolean
    grt?: boolean
    tonnageValue?: boolean
    ums?: boolean
    yearBuilt?: boolean
    orgId?: boolean
    engineMake?: boolean
    tonnageUnit?: boolean
    callSign?: boolean
    contactEmail?: boolean
    contactPersonName?: boolean
    contactPhone?: boolean
    deletedAt?: boolean
    inspectionDueDate?: boolean
    isActive?: boolean
    lastInspectionDate?: boolean
    mmsi?: boolean
    safetyCertificateUrl?: boolean
    VesselAssignment?: boolean | Vessel$VesselAssignmentArgs<ExtArgs>
    rankRequirements?: boolean | Vessel$rankRequirementsArgs<ExtArgs>
    _count?: boolean | VesselCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vessel"]>

  export type VesselSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    capacity?: boolean
    homePort?: boolean
    vesselType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bhpKw?: boolean
    companyName?: boolean
    dwt?: boolean
    flag?: boolean
    grt?: boolean
    tonnageValue?: boolean
    ums?: boolean
    yearBuilt?: boolean
    orgId?: boolean
    engineMake?: boolean
    tonnageUnit?: boolean
    callSign?: boolean
    contactEmail?: boolean
    contactPersonName?: boolean
    contactPhone?: boolean
    deletedAt?: boolean
    inspectionDueDate?: boolean
    isActive?: boolean
    lastInspectionDate?: boolean
    mmsi?: boolean
    safetyCertificateUrl?: boolean
  }, ExtArgs["result"]["vessel"]>

  export type VesselSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    capacity?: boolean
    homePort?: boolean
    vesselType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bhpKw?: boolean
    companyName?: boolean
    dwt?: boolean
    flag?: boolean
    grt?: boolean
    tonnageValue?: boolean
    ums?: boolean
    yearBuilt?: boolean
    orgId?: boolean
    engineMake?: boolean
    tonnageUnit?: boolean
    callSign?: boolean
    contactEmail?: boolean
    contactPersonName?: boolean
    contactPhone?: boolean
    deletedAt?: boolean
    inspectionDueDate?: boolean
    isActive?: boolean
    lastInspectionDate?: boolean
    mmsi?: boolean
    safetyCertificateUrl?: boolean
  }, ExtArgs["result"]["vessel"]>

  export type VesselSelectScalar = {
    id?: boolean
    name?: boolean
    imoNumber?: boolean
    capacity?: boolean
    homePort?: boolean
    vesselType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bhpKw?: boolean
    companyName?: boolean
    dwt?: boolean
    flag?: boolean
    grt?: boolean
    tonnageValue?: boolean
    ums?: boolean
    yearBuilt?: boolean
    orgId?: boolean
    engineMake?: boolean
    tonnageUnit?: boolean
    callSign?: boolean
    contactEmail?: boolean
    contactPersonName?: boolean
    contactPhone?: boolean
    deletedAt?: boolean
    inspectionDueDate?: boolean
    isActive?: boolean
    lastInspectionDate?: boolean
    mmsi?: boolean
    safetyCertificateUrl?: boolean
  }

  export type VesselOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imoNumber" | "capacity" | "homePort" | "vesselType" | "createdAt" | "updatedAt" | "bhpKw" | "companyName" | "dwt" | "flag" | "grt" | "tonnageValue" | "ums" | "yearBuilt" | "orgId" | "engineMake" | "tonnageUnit" | "callSign" | "contactEmail" | "contactPersonName" | "contactPhone" | "deletedAt" | "inspectionDueDate" | "isActive" | "lastInspectionDate" | "mmsi" | "safetyCertificateUrl", ExtArgs["result"]["vessel"]>
  export type VesselInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VesselAssignment?: boolean | Vessel$VesselAssignmentArgs<ExtArgs>
    rankRequirements?: boolean | Vessel$rankRequirementsArgs<ExtArgs>
    _count?: boolean | VesselCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VesselIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VesselIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VesselPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vessel"
    objects: {
      VesselAssignment: Prisma.$VesselAssignmentPayload<ExtArgs>[]
      rankRequirements: Prisma.$VesselRankRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imoNumber: string
      capacity: number | null
      homePort: string | null
      vesselType: $Enums.VesselType | null
      createdAt: Date
      updatedAt: Date
      bhpKw: number | null
      companyName: string | null
      dwt: number | null
      flag: string | null
      grt: number | null
      tonnageValue: number | null
      ums: boolean | null
      yearBuilt: number | null
      orgId: string
      engineMake: $Enums.EngineMake | null
      tonnageUnit: $Enums.TonnageUnit | null
      callSign: string | null
      contactEmail: string | null
      contactPersonName: string | null
      contactPhone: string | null
      deletedAt: Date | null
      inspectionDueDate: Date | null
      isActive: boolean
      lastInspectionDate: Date | null
      mmsi: string | null
      safetyCertificateUrl: string | null
    }, ExtArgs["result"]["vessel"]>
    composites: {}
  }

  type VesselGetPayload<S extends boolean | null | undefined | VesselDefaultArgs> = $Result.GetResult<Prisma.$VesselPayload, S>

  type VesselCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VesselFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VesselCountAggregateInputType | true
    }

  export interface VesselDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vessel'], meta: { name: 'Vessel' } }
    /**
     * Find zero or one Vessel that matches the filter.
     * @param {VesselFindUniqueArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VesselFindUniqueArgs>(args: SelectSubset<T, VesselFindUniqueArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vessel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VesselFindUniqueOrThrowArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VesselFindUniqueOrThrowArgs>(args: SelectSubset<T, VesselFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vessel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselFindFirstArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VesselFindFirstArgs>(args?: SelectSubset<T, VesselFindFirstArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vessel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselFindFirstOrThrowArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VesselFindFirstOrThrowArgs>(args?: SelectSubset<T, VesselFindFirstOrThrowArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vessels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vessels
     * const vessels = await prisma.vessel.findMany()
     * 
     * // Get first 10 Vessels
     * const vessels = await prisma.vessel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vesselWithIdOnly = await prisma.vessel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VesselFindManyArgs>(args?: SelectSubset<T, VesselFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vessel.
     * @param {VesselCreateArgs} args - Arguments to create a Vessel.
     * @example
     * // Create one Vessel
     * const Vessel = await prisma.vessel.create({
     *   data: {
     *     // ... data to create a Vessel
     *   }
     * })
     * 
     */
    create<T extends VesselCreateArgs>(args: SelectSubset<T, VesselCreateArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vessels.
     * @param {VesselCreateManyArgs} args - Arguments to create many Vessels.
     * @example
     * // Create many Vessels
     * const vessel = await prisma.vessel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VesselCreateManyArgs>(args?: SelectSubset<T, VesselCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vessels and returns the data saved in the database.
     * @param {VesselCreateManyAndReturnArgs} args - Arguments to create many Vessels.
     * @example
     * // Create many Vessels
     * const vessel = await prisma.vessel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vessels and only return the `id`
     * const vesselWithIdOnly = await prisma.vessel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VesselCreateManyAndReturnArgs>(args?: SelectSubset<T, VesselCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vessel.
     * @param {VesselDeleteArgs} args - Arguments to delete one Vessel.
     * @example
     * // Delete one Vessel
     * const Vessel = await prisma.vessel.delete({
     *   where: {
     *     // ... filter to delete one Vessel
     *   }
     * })
     * 
     */
    delete<T extends VesselDeleteArgs>(args: SelectSubset<T, VesselDeleteArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vessel.
     * @param {VesselUpdateArgs} args - Arguments to update one Vessel.
     * @example
     * // Update one Vessel
     * const vessel = await prisma.vessel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VesselUpdateArgs>(args: SelectSubset<T, VesselUpdateArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vessels.
     * @param {VesselDeleteManyArgs} args - Arguments to filter Vessels to delete.
     * @example
     * // Delete a few Vessels
     * const { count } = await prisma.vessel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VesselDeleteManyArgs>(args?: SelectSubset<T, VesselDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vessels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vessels
     * const vessel = await prisma.vessel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VesselUpdateManyArgs>(args: SelectSubset<T, VesselUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vessels and returns the data updated in the database.
     * @param {VesselUpdateManyAndReturnArgs} args - Arguments to update many Vessels.
     * @example
     * // Update many Vessels
     * const vessel = await prisma.vessel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vessels and only return the `id`
     * const vesselWithIdOnly = await prisma.vessel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VesselUpdateManyAndReturnArgs>(args: SelectSubset<T, VesselUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vessel.
     * @param {VesselUpsertArgs} args - Arguments to update or create a Vessel.
     * @example
     * // Update or create a Vessel
     * const vessel = await prisma.vessel.upsert({
     *   create: {
     *     // ... data to create a Vessel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vessel we want to update
     *   }
     * })
     */
    upsert<T extends VesselUpsertArgs>(args: SelectSubset<T, VesselUpsertArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vessels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselCountArgs} args - Arguments to filter Vessels to count.
     * @example
     * // Count the number of Vessels
     * const count = await prisma.vessel.count({
     *   where: {
     *     // ... the filter for the Vessels we want to count
     *   }
     * })
    **/
    count<T extends VesselCountArgs>(
      args?: Subset<T, VesselCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VesselCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vessel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VesselAggregateArgs>(args: Subset<T, VesselAggregateArgs>): Prisma.PrismaPromise<GetVesselAggregateType<T>>

    /**
     * Group by Vessel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VesselGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VesselGroupByArgs['orderBy'] }
        : { orderBy?: VesselGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VesselGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVesselGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vessel model
   */
  readonly fields: VesselFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vessel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VesselClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VesselAssignment<T extends Vessel$VesselAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Vessel$VesselAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rankRequirements<T extends Vessel$rankRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, Vessel$rankRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vessel model
   */
  interface VesselFieldRefs {
    readonly id: FieldRef<"Vessel", 'String'>
    readonly name: FieldRef<"Vessel", 'String'>
    readonly imoNumber: FieldRef<"Vessel", 'String'>
    readonly capacity: FieldRef<"Vessel", 'Int'>
    readonly homePort: FieldRef<"Vessel", 'String'>
    readonly vesselType: FieldRef<"Vessel", 'VesselType'>
    readonly createdAt: FieldRef<"Vessel", 'DateTime'>
    readonly updatedAt: FieldRef<"Vessel", 'DateTime'>
    readonly bhpKw: FieldRef<"Vessel", 'Float'>
    readonly companyName: FieldRef<"Vessel", 'String'>
    readonly dwt: FieldRef<"Vessel", 'Int'>
    readonly flag: FieldRef<"Vessel", 'String'>
    readonly grt: FieldRef<"Vessel", 'Int'>
    readonly tonnageValue: FieldRef<"Vessel", 'Float'>
    readonly ums: FieldRef<"Vessel", 'Boolean'>
    readonly yearBuilt: FieldRef<"Vessel", 'Int'>
    readonly orgId: FieldRef<"Vessel", 'String'>
    readonly engineMake: FieldRef<"Vessel", 'EngineMake'>
    readonly tonnageUnit: FieldRef<"Vessel", 'TonnageUnit'>
    readonly callSign: FieldRef<"Vessel", 'String'>
    readonly contactEmail: FieldRef<"Vessel", 'String'>
    readonly contactPersonName: FieldRef<"Vessel", 'String'>
    readonly contactPhone: FieldRef<"Vessel", 'String'>
    readonly deletedAt: FieldRef<"Vessel", 'DateTime'>
    readonly inspectionDueDate: FieldRef<"Vessel", 'DateTime'>
    readonly isActive: FieldRef<"Vessel", 'Boolean'>
    readonly lastInspectionDate: FieldRef<"Vessel", 'DateTime'>
    readonly mmsi: FieldRef<"Vessel", 'String'>
    readonly safetyCertificateUrl: FieldRef<"Vessel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vessel findUnique
   */
  export type VesselFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel findUniqueOrThrow
   */
  export type VesselFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel findFirst
   */
  export type VesselFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vessels.
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vessels.
     */
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * Vessel findFirstOrThrow
   */
  export type VesselFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vessels.
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vessels.
     */
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * Vessel findMany
   */
  export type VesselFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessels to fetch.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vessels.
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * Vessel create
   */
  export type VesselCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * The data needed to create a Vessel.
     */
    data: XOR<VesselCreateInput, VesselUncheckedCreateInput>
  }

  /**
   * Vessel createMany
   */
  export type VesselCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vessels.
     */
    data: VesselCreateManyInput | VesselCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vessel createManyAndReturn
   */
  export type VesselCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * The data used to create many Vessels.
     */
    data: VesselCreateManyInput | VesselCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vessel update
   */
  export type VesselUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * The data needed to update a Vessel.
     */
    data: XOR<VesselUpdateInput, VesselUncheckedUpdateInput>
    /**
     * Choose, which Vessel to update.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel updateMany
   */
  export type VesselUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vessels.
     */
    data: XOR<VesselUpdateManyMutationInput, VesselUncheckedUpdateManyInput>
    /**
     * Filter which Vessels to update
     */
    where?: VesselWhereInput
    /**
     * Limit how many Vessels to update.
     */
    limit?: number
  }

  /**
   * Vessel updateManyAndReturn
   */
  export type VesselUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * The data used to update Vessels.
     */
    data: XOR<VesselUpdateManyMutationInput, VesselUncheckedUpdateManyInput>
    /**
     * Filter which Vessels to update
     */
    where?: VesselWhereInput
    /**
     * Limit how many Vessels to update.
     */
    limit?: number
  }

  /**
   * Vessel upsert
   */
  export type VesselUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * The filter to search for the Vessel to update in case it exists.
     */
    where: VesselWhereUniqueInput
    /**
     * In case the Vessel found by the `where` argument doesn't exist, create a new Vessel with this data.
     */
    create: XOR<VesselCreateInput, VesselUncheckedCreateInput>
    /**
     * In case the Vessel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VesselUpdateInput, VesselUncheckedUpdateInput>
  }

  /**
   * Vessel delete
   */
  export type VesselDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter which Vessel to delete.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel deleteMany
   */
  export type VesselDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vessels to delete
     */
    where?: VesselWhereInput
    /**
     * Limit how many Vessels to delete.
     */
    limit?: number
  }

  /**
   * Vessel.VesselAssignment
   */
  export type Vessel$VesselAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    where?: VesselAssignmentWhereInput
    orderBy?: VesselAssignmentOrderByWithRelationInput | VesselAssignmentOrderByWithRelationInput[]
    cursor?: VesselAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VesselAssignmentScalarFieldEnum | VesselAssignmentScalarFieldEnum[]
  }

  /**
   * Vessel.rankRequirements
   */
  export type Vessel$rankRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    where?: VesselRankRequirementWhereInput
    orderBy?: VesselRankRequirementOrderByWithRelationInput | VesselRankRequirementOrderByWithRelationInput[]
    cursor?: VesselRankRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VesselRankRequirementScalarFieldEnum | VesselRankRequirementScalarFieldEnum[]
  }

  /**
   * Vessel without action
   */
  export type VesselDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
  }


  /**
   * Model VesselRankRequirement
   */

  export type AggregateVesselRankRequirement = {
    _count: VesselRankRequirementCountAggregateOutputType | null
    _avg: VesselRankRequirementAvgAggregateOutputType | null
    _sum: VesselRankRequirementSumAggregateOutputType | null
    _min: VesselRankRequirementMinAggregateOutputType | null
    _max: VesselRankRequirementMaxAggregateOutputType | null
  }

  export type VesselRankRequirementAvgAggregateOutputType = {
    requiredCount: number | null
  }

  export type VesselRankRequirementSumAggregateOutputType = {
    requiredCount: number | null
  }

  export type VesselRankRequirementMinAggregateOutputType = {
    id: string | null
    vesselId: string | null
    role: $Enums.VesselRole | null
    requiredCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VesselRankRequirementMaxAggregateOutputType = {
    id: string | null
    vesselId: string | null
    role: $Enums.VesselRole | null
    requiredCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VesselRankRequirementCountAggregateOutputType = {
    id: number
    vesselId: number
    role: number
    requiredCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VesselRankRequirementAvgAggregateInputType = {
    requiredCount?: true
  }

  export type VesselRankRequirementSumAggregateInputType = {
    requiredCount?: true
  }

  export type VesselRankRequirementMinAggregateInputType = {
    id?: true
    vesselId?: true
    role?: true
    requiredCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VesselRankRequirementMaxAggregateInputType = {
    id?: true
    vesselId?: true
    role?: true
    requiredCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VesselRankRequirementCountAggregateInputType = {
    id?: true
    vesselId?: true
    role?: true
    requiredCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VesselRankRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VesselRankRequirement to aggregate.
     */
    where?: VesselRankRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselRankRequirements to fetch.
     */
    orderBy?: VesselRankRequirementOrderByWithRelationInput | VesselRankRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VesselRankRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselRankRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselRankRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VesselRankRequirements
    **/
    _count?: true | VesselRankRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VesselRankRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VesselRankRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VesselRankRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VesselRankRequirementMaxAggregateInputType
  }

  export type GetVesselRankRequirementAggregateType<T extends VesselRankRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateVesselRankRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVesselRankRequirement[P]>
      : GetScalarType<T[P], AggregateVesselRankRequirement[P]>
  }




  export type VesselRankRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselRankRequirementWhereInput
    orderBy?: VesselRankRequirementOrderByWithAggregationInput | VesselRankRequirementOrderByWithAggregationInput[]
    by: VesselRankRequirementScalarFieldEnum[] | VesselRankRequirementScalarFieldEnum
    having?: VesselRankRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VesselRankRequirementCountAggregateInputType | true
    _avg?: VesselRankRequirementAvgAggregateInputType
    _sum?: VesselRankRequirementSumAggregateInputType
    _min?: VesselRankRequirementMinAggregateInputType
    _max?: VesselRankRequirementMaxAggregateInputType
  }

  export type VesselRankRequirementGroupByOutputType = {
    id: string
    vesselId: string
    role: $Enums.VesselRole
    requiredCount: number
    createdAt: Date
    updatedAt: Date
    _count: VesselRankRequirementCountAggregateOutputType | null
    _avg: VesselRankRequirementAvgAggregateOutputType | null
    _sum: VesselRankRequirementSumAggregateOutputType | null
    _min: VesselRankRequirementMinAggregateOutputType | null
    _max: VesselRankRequirementMaxAggregateOutputType | null
  }

  type GetVesselRankRequirementGroupByPayload<T extends VesselRankRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VesselRankRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VesselRankRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VesselRankRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], VesselRankRequirementGroupByOutputType[P]>
        }
      >
    >


  export type VesselRankRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vesselId?: boolean
    role?: boolean
    requiredCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselRankRequirement"]>

  export type VesselRankRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vesselId?: boolean
    role?: boolean
    requiredCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselRankRequirement"]>

  export type VesselRankRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vesselId?: boolean
    role?: boolean
    requiredCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselRankRequirement"]>

  export type VesselRankRequirementSelectScalar = {
    id?: boolean
    vesselId?: boolean
    role?: boolean
    requiredCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VesselRankRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vesselId" | "role" | "requiredCount" | "createdAt" | "updatedAt", ExtArgs["result"]["vesselRankRequirement"]>
  export type VesselRankRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }
  export type VesselRankRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }
  export type VesselRankRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }

  export type $VesselRankRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VesselRankRequirement"
    objects: {
      vessel: Prisma.$VesselPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vesselId: string
      role: $Enums.VesselRole
      requiredCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vesselRankRequirement"]>
    composites: {}
  }

  type VesselRankRequirementGetPayload<S extends boolean | null | undefined | VesselRankRequirementDefaultArgs> = $Result.GetResult<Prisma.$VesselRankRequirementPayload, S>

  type VesselRankRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VesselRankRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VesselRankRequirementCountAggregateInputType | true
    }

  export interface VesselRankRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VesselRankRequirement'], meta: { name: 'VesselRankRequirement' } }
    /**
     * Find zero or one VesselRankRequirement that matches the filter.
     * @param {VesselRankRequirementFindUniqueArgs} args - Arguments to find a VesselRankRequirement
     * @example
     * // Get one VesselRankRequirement
     * const vesselRankRequirement = await prisma.vesselRankRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VesselRankRequirementFindUniqueArgs>(args: SelectSubset<T, VesselRankRequirementFindUniqueArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VesselRankRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VesselRankRequirementFindUniqueOrThrowArgs} args - Arguments to find a VesselRankRequirement
     * @example
     * // Get one VesselRankRequirement
     * const vesselRankRequirement = await prisma.vesselRankRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VesselRankRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, VesselRankRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VesselRankRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementFindFirstArgs} args - Arguments to find a VesselRankRequirement
     * @example
     * // Get one VesselRankRequirement
     * const vesselRankRequirement = await prisma.vesselRankRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VesselRankRequirementFindFirstArgs>(args?: SelectSubset<T, VesselRankRequirementFindFirstArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VesselRankRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementFindFirstOrThrowArgs} args - Arguments to find a VesselRankRequirement
     * @example
     * // Get one VesselRankRequirement
     * const vesselRankRequirement = await prisma.vesselRankRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VesselRankRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, VesselRankRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VesselRankRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VesselRankRequirements
     * const vesselRankRequirements = await prisma.vesselRankRequirement.findMany()
     * 
     * // Get first 10 VesselRankRequirements
     * const vesselRankRequirements = await prisma.vesselRankRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vesselRankRequirementWithIdOnly = await prisma.vesselRankRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VesselRankRequirementFindManyArgs>(args?: SelectSubset<T, VesselRankRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VesselRankRequirement.
     * @param {VesselRankRequirementCreateArgs} args - Arguments to create a VesselRankRequirement.
     * @example
     * // Create one VesselRankRequirement
     * const VesselRankRequirement = await prisma.vesselRankRequirement.create({
     *   data: {
     *     // ... data to create a VesselRankRequirement
     *   }
     * })
     * 
     */
    create<T extends VesselRankRequirementCreateArgs>(args: SelectSubset<T, VesselRankRequirementCreateArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VesselRankRequirements.
     * @param {VesselRankRequirementCreateManyArgs} args - Arguments to create many VesselRankRequirements.
     * @example
     * // Create many VesselRankRequirements
     * const vesselRankRequirement = await prisma.vesselRankRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VesselRankRequirementCreateManyArgs>(args?: SelectSubset<T, VesselRankRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VesselRankRequirements and returns the data saved in the database.
     * @param {VesselRankRequirementCreateManyAndReturnArgs} args - Arguments to create many VesselRankRequirements.
     * @example
     * // Create many VesselRankRequirements
     * const vesselRankRequirement = await prisma.vesselRankRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VesselRankRequirements and only return the `id`
     * const vesselRankRequirementWithIdOnly = await prisma.vesselRankRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VesselRankRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, VesselRankRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VesselRankRequirement.
     * @param {VesselRankRequirementDeleteArgs} args - Arguments to delete one VesselRankRequirement.
     * @example
     * // Delete one VesselRankRequirement
     * const VesselRankRequirement = await prisma.vesselRankRequirement.delete({
     *   where: {
     *     // ... filter to delete one VesselRankRequirement
     *   }
     * })
     * 
     */
    delete<T extends VesselRankRequirementDeleteArgs>(args: SelectSubset<T, VesselRankRequirementDeleteArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VesselRankRequirement.
     * @param {VesselRankRequirementUpdateArgs} args - Arguments to update one VesselRankRequirement.
     * @example
     * // Update one VesselRankRequirement
     * const vesselRankRequirement = await prisma.vesselRankRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VesselRankRequirementUpdateArgs>(args: SelectSubset<T, VesselRankRequirementUpdateArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VesselRankRequirements.
     * @param {VesselRankRequirementDeleteManyArgs} args - Arguments to filter VesselRankRequirements to delete.
     * @example
     * // Delete a few VesselRankRequirements
     * const { count } = await prisma.vesselRankRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VesselRankRequirementDeleteManyArgs>(args?: SelectSubset<T, VesselRankRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VesselRankRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VesselRankRequirements
     * const vesselRankRequirement = await prisma.vesselRankRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VesselRankRequirementUpdateManyArgs>(args: SelectSubset<T, VesselRankRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VesselRankRequirements and returns the data updated in the database.
     * @param {VesselRankRequirementUpdateManyAndReturnArgs} args - Arguments to update many VesselRankRequirements.
     * @example
     * // Update many VesselRankRequirements
     * const vesselRankRequirement = await prisma.vesselRankRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VesselRankRequirements and only return the `id`
     * const vesselRankRequirementWithIdOnly = await prisma.vesselRankRequirement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VesselRankRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, VesselRankRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VesselRankRequirement.
     * @param {VesselRankRequirementUpsertArgs} args - Arguments to update or create a VesselRankRequirement.
     * @example
     * // Update or create a VesselRankRequirement
     * const vesselRankRequirement = await prisma.vesselRankRequirement.upsert({
     *   create: {
     *     // ... data to create a VesselRankRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VesselRankRequirement we want to update
     *   }
     * })
     */
    upsert<T extends VesselRankRequirementUpsertArgs>(args: SelectSubset<T, VesselRankRequirementUpsertArgs<ExtArgs>>): Prisma__VesselRankRequirementClient<$Result.GetResult<Prisma.$VesselRankRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VesselRankRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementCountArgs} args - Arguments to filter VesselRankRequirements to count.
     * @example
     * // Count the number of VesselRankRequirements
     * const count = await prisma.vesselRankRequirement.count({
     *   where: {
     *     // ... the filter for the VesselRankRequirements we want to count
     *   }
     * })
    **/
    count<T extends VesselRankRequirementCountArgs>(
      args?: Subset<T, VesselRankRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VesselRankRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VesselRankRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VesselRankRequirementAggregateArgs>(args: Subset<T, VesselRankRequirementAggregateArgs>): Prisma.PrismaPromise<GetVesselRankRequirementAggregateType<T>>

    /**
     * Group by VesselRankRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselRankRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VesselRankRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VesselRankRequirementGroupByArgs['orderBy'] }
        : { orderBy?: VesselRankRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VesselRankRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVesselRankRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VesselRankRequirement model
   */
  readonly fields: VesselRankRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VesselRankRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VesselRankRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vessel<T extends VesselDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VesselDefaultArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VesselRankRequirement model
   */
  interface VesselRankRequirementFieldRefs {
    readonly id: FieldRef<"VesselRankRequirement", 'String'>
    readonly vesselId: FieldRef<"VesselRankRequirement", 'String'>
    readonly role: FieldRef<"VesselRankRequirement", 'VesselRole'>
    readonly requiredCount: FieldRef<"VesselRankRequirement", 'Int'>
    readonly createdAt: FieldRef<"VesselRankRequirement", 'DateTime'>
    readonly updatedAt: FieldRef<"VesselRankRequirement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VesselRankRequirement findUnique
   */
  export type VesselRankRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * Filter, which VesselRankRequirement to fetch.
     */
    where: VesselRankRequirementWhereUniqueInput
  }

  /**
   * VesselRankRequirement findUniqueOrThrow
   */
  export type VesselRankRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * Filter, which VesselRankRequirement to fetch.
     */
    where: VesselRankRequirementWhereUniqueInput
  }

  /**
   * VesselRankRequirement findFirst
   */
  export type VesselRankRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * Filter, which VesselRankRequirement to fetch.
     */
    where?: VesselRankRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselRankRequirements to fetch.
     */
    orderBy?: VesselRankRequirementOrderByWithRelationInput | VesselRankRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VesselRankRequirements.
     */
    cursor?: VesselRankRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselRankRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselRankRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VesselRankRequirements.
     */
    distinct?: VesselRankRequirementScalarFieldEnum | VesselRankRequirementScalarFieldEnum[]
  }

  /**
   * VesselRankRequirement findFirstOrThrow
   */
  export type VesselRankRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * Filter, which VesselRankRequirement to fetch.
     */
    where?: VesselRankRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselRankRequirements to fetch.
     */
    orderBy?: VesselRankRequirementOrderByWithRelationInput | VesselRankRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VesselRankRequirements.
     */
    cursor?: VesselRankRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselRankRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselRankRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VesselRankRequirements.
     */
    distinct?: VesselRankRequirementScalarFieldEnum | VesselRankRequirementScalarFieldEnum[]
  }

  /**
   * VesselRankRequirement findMany
   */
  export type VesselRankRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * Filter, which VesselRankRequirements to fetch.
     */
    where?: VesselRankRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselRankRequirements to fetch.
     */
    orderBy?: VesselRankRequirementOrderByWithRelationInput | VesselRankRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VesselRankRequirements.
     */
    cursor?: VesselRankRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselRankRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselRankRequirements.
     */
    skip?: number
    distinct?: VesselRankRequirementScalarFieldEnum | VesselRankRequirementScalarFieldEnum[]
  }

  /**
   * VesselRankRequirement create
   */
  export type VesselRankRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a VesselRankRequirement.
     */
    data: XOR<VesselRankRequirementCreateInput, VesselRankRequirementUncheckedCreateInput>
  }

  /**
   * VesselRankRequirement createMany
   */
  export type VesselRankRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VesselRankRequirements.
     */
    data: VesselRankRequirementCreateManyInput | VesselRankRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VesselRankRequirement createManyAndReturn
   */
  export type VesselRankRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many VesselRankRequirements.
     */
    data: VesselRankRequirementCreateManyInput | VesselRankRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VesselRankRequirement update
   */
  export type VesselRankRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a VesselRankRequirement.
     */
    data: XOR<VesselRankRequirementUpdateInput, VesselRankRequirementUncheckedUpdateInput>
    /**
     * Choose, which VesselRankRequirement to update.
     */
    where: VesselRankRequirementWhereUniqueInput
  }

  /**
   * VesselRankRequirement updateMany
   */
  export type VesselRankRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VesselRankRequirements.
     */
    data: XOR<VesselRankRequirementUpdateManyMutationInput, VesselRankRequirementUncheckedUpdateManyInput>
    /**
     * Filter which VesselRankRequirements to update
     */
    where?: VesselRankRequirementWhereInput
    /**
     * Limit how many VesselRankRequirements to update.
     */
    limit?: number
  }

  /**
   * VesselRankRequirement updateManyAndReturn
   */
  export type VesselRankRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * The data used to update VesselRankRequirements.
     */
    data: XOR<VesselRankRequirementUpdateManyMutationInput, VesselRankRequirementUncheckedUpdateManyInput>
    /**
     * Filter which VesselRankRequirements to update
     */
    where?: VesselRankRequirementWhereInput
    /**
     * Limit how many VesselRankRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VesselRankRequirement upsert
   */
  export type VesselRankRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the VesselRankRequirement to update in case it exists.
     */
    where: VesselRankRequirementWhereUniqueInput
    /**
     * In case the VesselRankRequirement found by the `where` argument doesn't exist, create a new VesselRankRequirement with this data.
     */
    create: XOR<VesselRankRequirementCreateInput, VesselRankRequirementUncheckedCreateInput>
    /**
     * In case the VesselRankRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VesselRankRequirementUpdateInput, VesselRankRequirementUncheckedUpdateInput>
  }

  /**
   * VesselRankRequirement delete
   */
  export type VesselRankRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
    /**
     * Filter which VesselRankRequirement to delete.
     */
    where: VesselRankRequirementWhereUniqueInput
  }

  /**
   * VesselRankRequirement deleteMany
   */
  export type VesselRankRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VesselRankRequirements to delete
     */
    where?: VesselRankRequirementWhereInput
    /**
     * Limit how many VesselRankRequirements to delete.
     */
    limit?: number
  }

  /**
   * VesselRankRequirement without action
   */
  export type VesselRankRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselRankRequirement
     */
    select?: VesselRankRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselRankRequirement
     */
    omit?: VesselRankRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselRankRequirementInclude<ExtArgs> | null
  }


  /**
   * Model VesselAssignment
   */

  export type AggregateVesselAssignment = {
    _count: VesselAssignmentCountAggregateOutputType | null
    _min: VesselAssignmentMinAggregateOutputType | null
    _max: VesselAssignmentMaxAggregateOutputType | null
  }

  export type VesselAssignmentMinAggregateOutputType = {
    id: string | null
    vesselId: string | null
    crewId: string | null
    role: $Enums.VesselRole | null
    assignedAt: Date | null
    releasedAt: Date | null
  }

  export type VesselAssignmentMaxAggregateOutputType = {
    id: string | null
    vesselId: string | null
    crewId: string | null
    role: $Enums.VesselRole | null
    assignedAt: Date | null
    releasedAt: Date | null
  }

  export type VesselAssignmentCountAggregateOutputType = {
    id: number
    vesselId: number
    crewId: number
    role: number
    assignedAt: number
    releasedAt: number
    _all: number
  }


  export type VesselAssignmentMinAggregateInputType = {
    id?: true
    vesselId?: true
    crewId?: true
    role?: true
    assignedAt?: true
    releasedAt?: true
  }

  export type VesselAssignmentMaxAggregateInputType = {
    id?: true
    vesselId?: true
    crewId?: true
    role?: true
    assignedAt?: true
    releasedAt?: true
  }

  export type VesselAssignmentCountAggregateInputType = {
    id?: true
    vesselId?: true
    crewId?: true
    role?: true
    assignedAt?: true
    releasedAt?: true
    _all?: true
  }

  export type VesselAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VesselAssignment to aggregate.
     */
    where?: VesselAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselAssignments to fetch.
     */
    orderBy?: VesselAssignmentOrderByWithRelationInput | VesselAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VesselAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VesselAssignments
    **/
    _count?: true | VesselAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VesselAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VesselAssignmentMaxAggregateInputType
  }

  export type GetVesselAssignmentAggregateType<T extends VesselAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateVesselAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVesselAssignment[P]>
      : GetScalarType<T[P], AggregateVesselAssignment[P]>
  }




  export type VesselAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselAssignmentWhereInput
    orderBy?: VesselAssignmentOrderByWithAggregationInput | VesselAssignmentOrderByWithAggregationInput[]
    by: VesselAssignmentScalarFieldEnum[] | VesselAssignmentScalarFieldEnum
    having?: VesselAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VesselAssignmentCountAggregateInputType | true
    _min?: VesselAssignmentMinAggregateInputType
    _max?: VesselAssignmentMaxAggregateInputType
  }

  export type VesselAssignmentGroupByOutputType = {
    id: string
    vesselId: string
    crewId: string
    role: $Enums.VesselRole
    assignedAt: Date
    releasedAt: Date | null
    _count: VesselAssignmentCountAggregateOutputType | null
    _min: VesselAssignmentMinAggregateOutputType | null
    _max: VesselAssignmentMaxAggregateOutputType | null
  }

  type GetVesselAssignmentGroupByPayload<T extends VesselAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VesselAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VesselAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VesselAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], VesselAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type VesselAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vesselId?: boolean
    crewId?: boolean
    role?: boolean
    assignedAt?: boolean
    releasedAt?: boolean
    crew?: boolean | CrewDefaultArgs<ExtArgs>
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselAssignment"]>

  export type VesselAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vesselId?: boolean
    crewId?: boolean
    role?: boolean
    assignedAt?: boolean
    releasedAt?: boolean
    crew?: boolean | CrewDefaultArgs<ExtArgs>
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselAssignment"]>

  export type VesselAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vesselId?: boolean
    crewId?: boolean
    role?: boolean
    assignedAt?: boolean
    releasedAt?: boolean
    crew?: boolean | CrewDefaultArgs<ExtArgs>
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselAssignment"]>

  export type VesselAssignmentSelectScalar = {
    id?: boolean
    vesselId?: boolean
    crewId?: boolean
    role?: boolean
    assignedAt?: boolean
    releasedAt?: boolean
  }

  export type VesselAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vesselId" | "crewId" | "role" | "assignedAt" | "releasedAt", ExtArgs["result"]["vesselAssignment"]>
  export type VesselAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crew?: boolean | CrewDefaultArgs<ExtArgs>
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }
  export type VesselAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crew?: boolean | CrewDefaultArgs<ExtArgs>
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }
  export type VesselAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crew?: boolean | CrewDefaultArgs<ExtArgs>
    vessel?: boolean | VesselDefaultArgs<ExtArgs>
  }

  export type $VesselAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VesselAssignment"
    objects: {
      crew: Prisma.$CrewPayload<ExtArgs>
      vessel: Prisma.$VesselPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vesselId: string
      crewId: string
      role: $Enums.VesselRole
      assignedAt: Date
      releasedAt: Date | null
    }, ExtArgs["result"]["vesselAssignment"]>
    composites: {}
  }

  type VesselAssignmentGetPayload<S extends boolean | null | undefined | VesselAssignmentDefaultArgs> = $Result.GetResult<Prisma.$VesselAssignmentPayload, S>

  type VesselAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VesselAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VesselAssignmentCountAggregateInputType | true
    }

  export interface VesselAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VesselAssignment'], meta: { name: 'VesselAssignment' } }
    /**
     * Find zero or one VesselAssignment that matches the filter.
     * @param {VesselAssignmentFindUniqueArgs} args - Arguments to find a VesselAssignment
     * @example
     * // Get one VesselAssignment
     * const vesselAssignment = await prisma.vesselAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VesselAssignmentFindUniqueArgs>(args: SelectSubset<T, VesselAssignmentFindUniqueArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VesselAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VesselAssignmentFindUniqueOrThrowArgs} args - Arguments to find a VesselAssignment
     * @example
     * // Get one VesselAssignment
     * const vesselAssignment = await prisma.vesselAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VesselAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, VesselAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VesselAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentFindFirstArgs} args - Arguments to find a VesselAssignment
     * @example
     * // Get one VesselAssignment
     * const vesselAssignment = await prisma.vesselAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VesselAssignmentFindFirstArgs>(args?: SelectSubset<T, VesselAssignmentFindFirstArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VesselAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentFindFirstOrThrowArgs} args - Arguments to find a VesselAssignment
     * @example
     * // Get one VesselAssignment
     * const vesselAssignment = await prisma.vesselAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VesselAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, VesselAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VesselAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VesselAssignments
     * const vesselAssignments = await prisma.vesselAssignment.findMany()
     * 
     * // Get first 10 VesselAssignments
     * const vesselAssignments = await prisma.vesselAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vesselAssignmentWithIdOnly = await prisma.vesselAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VesselAssignmentFindManyArgs>(args?: SelectSubset<T, VesselAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VesselAssignment.
     * @param {VesselAssignmentCreateArgs} args - Arguments to create a VesselAssignment.
     * @example
     * // Create one VesselAssignment
     * const VesselAssignment = await prisma.vesselAssignment.create({
     *   data: {
     *     // ... data to create a VesselAssignment
     *   }
     * })
     * 
     */
    create<T extends VesselAssignmentCreateArgs>(args: SelectSubset<T, VesselAssignmentCreateArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VesselAssignments.
     * @param {VesselAssignmentCreateManyArgs} args - Arguments to create many VesselAssignments.
     * @example
     * // Create many VesselAssignments
     * const vesselAssignment = await prisma.vesselAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VesselAssignmentCreateManyArgs>(args?: SelectSubset<T, VesselAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VesselAssignments and returns the data saved in the database.
     * @param {VesselAssignmentCreateManyAndReturnArgs} args - Arguments to create many VesselAssignments.
     * @example
     * // Create many VesselAssignments
     * const vesselAssignment = await prisma.vesselAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VesselAssignments and only return the `id`
     * const vesselAssignmentWithIdOnly = await prisma.vesselAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VesselAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, VesselAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VesselAssignment.
     * @param {VesselAssignmentDeleteArgs} args - Arguments to delete one VesselAssignment.
     * @example
     * // Delete one VesselAssignment
     * const VesselAssignment = await prisma.vesselAssignment.delete({
     *   where: {
     *     // ... filter to delete one VesselAssignment
     *   }
     * })
     * 
     */
    delete<T extends VesselAssignmentDeleteArgs>(args: SelectSubset<T, VesselAssignmentDeleteArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VesselAssignment.
     * @param {VesselAssignmentUpdateArgs} args - Arguments to update one VesselAssignment.
     * @example
     * // Update one VesselAssignment
     * const vesselAssignment = await prisma.vesselAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VesselAssignmentUpdateArgs>(args: SelectSubset<T, VesselAssignmentUpdateArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VesselAssignments.
     * @param {VesselAssignmentDeleteManyArgs} args - Arguments to filter VesselAssignments to delete.
     * @example
     * // Delete a few VesselAssignments
     * const { count } = await prisma.vesselAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VesselAssignmentDeleteManyArgs>(args?: SelectSubset<T, VesselAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VesselAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VesselAssignments
     * const vesselAssignment = await prisma.vesselAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VesselAssignmentUpdateManyArgs>(args: SelectSubset<T, VesselAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VesselAssignments and returns the data updated in the database.
     * @param {VesselAssignmentUpdateManyAndReturnArgs} args - Arguments to update many VesselAssignments.
     * @example
     * // Update many VesselAssignments
     * const vesselAssignment = await prisma.vesselAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VesselAssignments and only return the `id`
     * const vesselAssignmentWithIdOnly = await prisma.vesselAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VesselAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, VesselAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VesselAssignment.
     * @param {VesselAssignmentUpsertArgs} args - Arguments to update or create a VesselAssignment.
     * @example
     * // Update or create a VesselAssignment
     * const vesselAssignment = await prisma.vesselAssignment.upsert({
     *   create: {
     *     // ... data to create a VesselAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VesselAssignment we want to update
     *   }
     * })
     */
    upsert<T extends VesselAssignmentUpsertArgs>(args: SelectSubset<T, VesselAssignmentUpsertArgs<ExtArgs>>): Prisma__VesselAssignmentClient<$Result.GetResult<Prisma.$VesselAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VesselAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentCountArgs} args - Arguments to filter VesselAssignments to count.
     * @example
     * // Count the number of VesselAssignments
     * const count = await prisma.vesselAssignment.count({
     *   where: {
     *     // ... the filter for the VesselAssignments we want to count
     *   }
     * })
    **/
    count<T extends VesselAssignmentCountArgs>(
      args?: Subset<T, VesselAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VesselAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VesselAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VesselAssignmentAggregateArgs>(args: Subset<T, VesselAssignmentAggregateArgs>): Prisma.PrismaPromise<GetVesselAssignmentAggregateType<T>>

    /**
     * Group by VesselAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VesselAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VesselAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: VesselAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VesselAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVesselAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VesselAssignment model
   */
  readonly fields: VesselAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VesselAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VesselAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crew<T extends CrewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrewDefaultArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vessel<T extends VesselDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VesselDefaultArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VesselAssignment model
   */
  interface VesselAssignmentFieldRefs {
    readonly id: FieldRef<"VesselAssignment", 'String'>
    readonly vesselId: FieldRef<"VesselAssignment", 'String'>
    readonly crewId: FieldRef<"VesselAssignment", 'String'>
    readonly role: FieldRef<"VesselAssignment", 'VesselRole'>
    readonly assignedAt: FieldRef<"VesselAssignment", 'DateTime'>
    readonly releasedAt: FieldRef<"VesselAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VesselAssignment findUnique
   */
  export type VesselAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VesselAssignment to fetch.
     */
    where: VesselAssignmentWhereUniqueInput
  }

  /**
   * VesselAssignment findUniqueOrThrow
   */
  export type VesselAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VesselAssignment to fetch.
     */
    where: VesselAssignmentWhereUniqueInput
  }

  /**
   * VesselAssignment findFirst
   */
  export type VesselAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VesselAssignment to fetch.
     */
    where?: VesselAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselAssignments to fetch.
     */
    orderBy?: VesselAssignmentOrderByWithRelationInput | VesselAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VesselAssignments.
     */
    cursor?: VesselAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VesselAssignments.
     */
    distinct?: VesselAssignmentScalarFieldEnum | VesselAssignmentScalarFieldEnum[]
  }

  /**
   * VesselAssignment findFirstOrThrow
   */
  export type VesselAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VesselAssignment to fetch.
     */
    where?: VesselAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselAssignments to fetch.
     */
    orderBy?: VesselAssignmentOrderByWithRelationInput | VesselAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VesselAssignments.
     */
    cursor?: VesselAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VesselAssignments.
     */
    distinct?: VesselAssignmentScalarFieldEnum | VesselAssignmentScalarFieldEnum[]
  }

  /**
   * VesselAssignment findMany
   */
  export type VesselAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VesselAssignments to fetch.
     */
    where?: VesselAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselAssignments to fetch.
     */
    orderBy?: VesselAssignmentOrderByWithRelationInput | VesselAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VesselAssignments.
     */
    cursor?: VesselAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselAssignments.
     */
    skip?: number
    distinct?: VesselAssignmentScalarFieldEnum | VesselAssignmentScalarFieldEnum[]
  }

  /**
   * VesselAssignment create
   */
  export type VesselAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a VesselAssignment.
     */
    data: XOR<VesselAssignmentCreateInput, VesselAssignmentUncheckedCreateInput>
  }

  /**
   * VesselAssignment createMany
   */
  export type VesselAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VesselAssignments.
     */
    data: VesselAssignmentCreateManyInput | VesselAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VesselAssignment createManyAndReturn
   */
  export type VesselAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many VesselAssignments.
     */
    data: VesselAssignmentCreateManyInput | VesselAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VesselAssignment update
   */
  export type VesselAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a VesselAssignment.
     */
    data: XOR<VesselAssignmentUpdateInput, VesselAssignmentUncheckedUpdateInput>
    /**
     * Choose, which VesselAssignment to update.
     */
    where: VesselAssignmentWhereUniqueInput
  }

  /**
   * VesselAssignment updateMany
   */
  export type VesselAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VesselAssignments.
     */
    data: XOR<VesselAssignmentUpdateManyMutationInput, VesselAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which VesselAssignments to update
     */
    where?: VesselAssignmentWhereInput
    /**
     * Limit how many VesselAssignments to update.
     */
    limit?: number
  }

  /**
   * VesselAssignment updateManyAndReturn
   */
  export type VesselAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update VesselAssignments.
     */
    data: XOR<VesselAssignmentUpdateManyMutationInput, VesselAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which VesselAssignments to update
     */
    where?: VesselAssignmentWhereInput
    /**
     * Limit how many VesselAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VesselAssignment upsert
   */
  export type VesselAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the VesselAssignment to update in case it exists.
     */
    where: VesselAssignmentWhereUniqueInput
    /**
     * In case the VesselAssignment found by the `where` argument doesn't exist, create a new VesselAssignment with this data.
     */
    create: XOR<VesselAssignmentCreateInput, VesselAssignmentUncheckedCreateInput>
    /**
     * In case the VesselAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VesselAssignmentUpdateInput, VesselAssignmentUncheckedUpdateInput>
  }

  /**
   * VesselAssignment delete
   */
  export type VesselAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
    /**
     * Filter which VesselAssignment to delete.
     */
    where: VesselAssignmentWhereUniqueInput
  }

  /**
   * VesselAssignment deleteMany
   */
  export type VesselAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VesselAssignments to delete
     */
    where?: VesselAssignmentWhereInput
    /**
     * Limit how many VesselAssignments to delete.
     */
    limit?: number
  }

  /**
   * VesselAssignment without action
   */
  export type VesselAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselAssignment
     */
    select?: VesselAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselAssignment
     */
    omit?: VesselAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    crewId: string | null
    type: $Enums.DocumentType | null
    fileName: string | null
    url: string | null
    uploadedAt: Date | null
    issueDate: Date | null
    expiryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    crewId: string | null
    type: $Enums.DocumentType | null
    fileName: string | null
    url: string | null
    uploadedAt: Date | null
    issueDate: Date | null
    expiryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    crewId: number
    type: number
    fileName: number
    url: number
    uploadedAt: number
    issueDate: number
    expiryDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    crewId?: true
    type?: true
    fileName?: true
    url?: true
    uploadedAt?: true
    issueDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    crewId?: true
    type?: true
    fileName?: true
    url?: true
    uploadedAt?: true
    issueDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    crewId?: true
    type?: true
    fileName?: true
    url?: true
    uploadedAt?: true
    issueDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    crewId: string
    type: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt: Date
    issueDate: Date | null
    expiryDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crewId?: boolean
    type?: boolean
    fileName?: boolean
    url?: boolean
    uploadedAt?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crewId?: boolean
    type?: boolean
    fileName?: boolean
    url?: boolean
    uploadedAt?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crewId?: boolean
    type?: boolean
    fileName?: boolean
    url?: boolean
    uploadedAt?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    crewId?: boolean
    type?: boolean
    fileName?: boolean
    url?: boolean
    uploadedAt?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crewId" | "type" | "fileName" | "url" | "uploadedAt" | "issueDate" | "expiryDate" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      crew: Prisma.$CrewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crewId: string
      type: $Enums.DocumentType
      fileName: string
      url: string
      uploadedAt: Date
      issueDate: Date | null
      expiryDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crew<T extends CrewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrewDefaultArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly crewId: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocumentType'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    readonly issueDate: FieldRef<"Document", 'DateTime'>
    readonly expiryDate: FieldRef<"Document", 'DateTime'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model ConsultancyPartner
   */

  export type AggregateConsultancyPartner = {
    _count: ConsultancyPartnerCountAggregateOutputType | null
    _min: ConsultancyPartnerMinAggregateOutputType | null
    _max: ConsultancyPartnerMaxAggregateOutputType | null
  }

  export type ConsultancyPartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.ConsultancyCategory | null
    contactEmail: string | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultancyPartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.ConsultancyCategory | null
    contactEmail: string | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultancyPartnerCountAggregateOutputType = {
    id: number
    name: number
    category: number
    contactEmail: number
    approvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultancyPartnerMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    contactEmail?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultancyPartnerMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    contactEmail?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultancyPartnerCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    contactEmail?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultancyPartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultancyPartner to aggregate.
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultancyPartners to fetch.
     */
    orderBy?: ConsultancyPartnerOrderByWithRelationInput | ConsultancyPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultancyPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultancyPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultancyPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultancyPartners
    **/
    _count?: true | ConsultancyPartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultancyPartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultancyPartnerMaxAggregateInputType
  }

  export type GetConsultancyPartnerAggregateType<T extends ConsultancyPartnerAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultancyPartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultancyPartner[P]>
      : GetScalarType<T[P], AggregateConsultancyPartner[P]>
  }




  export type ConsultancyPartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultancyPartnerWhereInput
    orderBy?: ConsultancyPartnerOrderByWithAggregationInput | ConsultancyPartnerOrderByWithAggregationInput[]
    by: ConsultancyPartnerScalarFieldEnum[] | ConsultancyPartnerScalarFieldEnum
    having?: ConsultancyPartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultancyPartnerCountAggregateInputType | true
    _min?: ConsultancyPartnerMinAggregateInputType
    _max?: ConsultancyPartnerMaxAggregateInputType
  }

  export type ConsultancyPartnerGroupByOutputType = {
    id: string
    name: string
    category: $Enums.ConsultancyCategory
    contactEmail: string | null
    approvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConsultancyPartnerCountAggregateOutputType | null
    _min: ConsultancyPartnerMinAggregateOutputType | null
    _max: ConsultancyPartnerMaxAggregateOutputType | null
  }

  type GetConsultancyPartnerGroupByPayload<T extends ConsultancyPartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultancyPartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultancyPartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultancyPartnerGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultancyPartnerGroupByOutputType[P]>
        }
      >
    >


  export type ConsultancyPartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    contactEmail?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consultancyPartner"]>

  export type ConsultancyPartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    contactEmail?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consultancyPartner"]>

  export type ConsultancyPartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    contactEmail?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consultancyPartner"]>

  export type ConsultancyPartnerSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    contactEmail?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsultancyPartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "contactEmail" | "approvedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["consultancyPartner"]>

  export type $ConsultancyPartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultancyPartner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.ConsultancyCategory
      contactEmail: string | null
      approvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultancyPartner"]>
    composites: {}
  }

  type ConsultancyPartnerGetPayload<S extends boolean | null | undefined | ConsultancyPartnerDefaultArgs> = $Result.GetResult<Prisma.$ConsultancyPartnerPayload, S>

  type ConsultancyPartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultancyPartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultancyPartnerCountAggregateInputType | true
    }

  export interface ConsultancyPartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultancyPartner'], meta: { name: 'ConsultancyPartner' } }
    /**
     * Find zero or one ConsultancyPartner that matches the filter.
     * @param {ConsultancyPartnerFindUniqueArgs} args - Arguments to find a ConsultancyPartner
     * @example
     * // Get one ConsultancyPartner
     * const consultancyPartner = await prisma.consultancyPartner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultancyPartnerFindUniqueArgs>(args: SelectSubset<T, ConsultancyPartnerFindUniqueArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultancyPartner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultancyPartnerFindUniqueOrThrowArgs} args - Arguments to find a ConsultancyPartner
     * @example
     * // Get one ConsultancyPartner
     * const consultancyPartner = await prisma.consultancyPartner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultancyPartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultancyPartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultancyPartner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerFindFirstArgs} args - Arguments to find a ConsultancyPartner
     * @example
     * // Get one ConsultancyPartner
     * const consultancyPartner = await prisma.consultancyPartner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultancyPartnerFindFirstArgs>(args?: SelectSubset<T, ConsultancyPartnerFindFirstArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultancyPartner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerFindFirstOrThrowArgs} args - Arguments to find a ConsultancyPartner
     * @example
     * // Get one ConsultancyPartner
     * const consultancyPartner = await prisma.consultancyPartner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultancyPartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultancyPartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultancyPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultancyPartners
     * const consultancyPartners = await prisma.consultancyPartner.findMany()
     * 
     * // Get first 10 ConsultancyPartners
     * const consultancyPartners = await prisma.consultancyPartner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultancyPartnerWithIdOnly = await prisma.consultancyPartner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultancyPartnerFindManyArgs>(args?: SelectSubset<T, ConsultancyPartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultancyPartner.
     * @param {ConsultancyPartnerCreateArgs} args - Arguments to create a ConsultancyPartner.
     * @example
     * // Create one ConsultancyPartner
     * const ConsultancyPartner = await prisma.consultancyPartner.create({
     *   data: {
     *     // ... data to create a ConsultancyPartner
     *   }
     * })
     * 
     */
    create<T extends ConsultancyPartnerCreateArgs>(args: SelectSubset<T, ConsultancyPartnerCreateArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultancyPartners.
     * @param {ConsultancyPartnerCreateManyArgs} args - Arguments to create many ConsultancyPartners.
     * @example
     * // Create many ConsultancyPartners
     * const consultancyPartner = await prisma.consultancyPartner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultancyPartnerCreateManyArgs>(args?: SelectSubset<T, ConsultancyPartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultancyPartners and returns the data saved in the database.
     * @param {ConsultancyPartnerCreateManyAndReturnArgs} args - Arguments to create many ConsultancyPartners.
     * @example
     * // Create many ConsultancyPartners
     * const consultancyPartner = await prisma.consultancyPartner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultancyPartners and only return the `id`
     * const consultancyPartnerWithIdOnly = await prisma.consultancyPartner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultancyPartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultancyPartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultancyPartner.
     * @param {ConsultancyPartnerDeleteArgs} args - Arguments to delete one ConsultancyPartner.
     * @example
     * // Delete one ConsultancyPartner
     * const ConsultancyPartner = await prisma.consultancyPartner.delete({
     *   where: {
     *     // ... filter to delete one ConsultancyPartner
     *   }
     * })
     * 
     */
    delete<T extends ConsultancyPartnerDeleteArgs>(args: SelectSubset<T, ConsultancyPartnerDeleteArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultancyPartner.
     * @param {ConsultancyPartnerUpdateArgs} args - Arguments to update one ConsultancyPartner.
     * @example
     * // Update one ConsultancyPartner
     * const consultancyPartner = await prisma.consultancyPartner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultancyPartnerUpdateArgs>(args: SelectSubset<T, ConsultancyPartnerUpdateArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultancyPartners.
     * @param {ConsultancyPartnerDeleteManyArgs} args - Arguments to filter ConsultancyPartners to delete.
     * @example
     * // Delete a few ConsultancyPartners
     * const { count } = await prisma.consultancyPartner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultancyPartnerDeleteManyArgs>(args?: SelectSubset<T, ConsultancyPartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultancyPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultancyPartners
     * const consultancyPartner = await prisma.consultancyPartner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultancyPartnerUpdateManyArgs>(args: SelectSubset<T, ConsultancyPartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultancyPartners and returns the data updated in the database.
     * @param {ConsultancyPartnerUpdateManyAndReturnArgs} args - Arguments to update many ConsultancyPartners.
     * @example
     * // Update many ConsultancyPartners
     * const consultancyPartner = await prisma.consultancyPartner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultancyPartners and only return the `id`
     * const consultancyPartnerWithIdOnly = await prisma.consultancyPartner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultancyPartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultancyPartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultancyPartner.
     * @param {ConsultancyPartnerUpsertArgs} args - Arguments to update or create a ConsultancyPartner.
     * @example
     * // Update or create a ConsultancyPartner
     * const consultancyPartner = await prisma.consultancyPartner.upsert({
     *   create: {
     *     // ... data to create a ConsultancyPartner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultancyPartner we want to update
     *   }
     * })
     */
    upsert<T extends ConsultancyPartnerUpsertArgs>(args: SelectSubset<T, ConsultancyPartnerUpsertArgs<ExtArgs>>): Prisma__ConsultancyPartnerClient<$Result.GetResult<Prisma.$ConsultancyPartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultancyPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerCountArgs} args - Arguments to filter ConsultancyPartners to count.
     * @example
     * // Count the number of ConsultancyPartners
     * const count = await prisma.consultancyPartner.count({
     *   where: {
     *     // ... the filter for the ConsultancyPartners we want to count
     *   }
     * })
    **/
    count<T extends ConsultancyPartnerCountArgs>(
      args?: Subset<T, ConsultancyPartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultancyPartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultancyPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultancyPartnerAggregateArgs>(args: Subset<T, ConsultancyPartnerAggregateArgs>): Prisma.PrismaPromise<GetConsultancyPartnerAggregateType<T>>

    /**
     * Group by ConsultancyPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultancyPartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultancyPartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultancyPartnerGroupByArgs['orderBy'] }
        : { orderBy?: ConsultancyPartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultancyPartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultancyPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultancyPartner model
   */
  readonly fields: ConsultancyPartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultancyPartner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultancyPartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultancyPartner model
   */
  interface ConsultancyPartnerFieldRefs {
    readonly id: FieldRef<"ConsultancyPartner", 'String'>
    readonly name: FieldRef<"ConsultancyPartner", 'String'>
    readonly category: FieldRef<"ConsultancyPartner", 'ConsultancyCategory'>
    readonly contactEmail: FieldRef<"ConsultancyPartner", 'String'>
    readonly approvedBy: FieldRef<"ConsultancyPartner", 'String'>
    readonly createdAt: FieldRef<"ConsultancyPartner", 'DateTime'>
    readonly updatedAt: FieldRef<"ConsultancyPartner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultancyPartner findUnique
   */
  export type ConsultancyPartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * Filter, which ConsultancyPartner to fetch.
     */
    where: ConsultancyPartnerWhereUniqueInput
  }

  /**
   * ConsultancyPartner findUniqueOrThrow
   */
  export type ConsultancyPartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * Filter, which ConsultancyPartner to fetch.
     */
    where: ConsultancyPartnerWhereUniqueInput
  }

  /**
   * ConsultancyPartner findFirst
   */
  export type ConsultancyPartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * Filter, which ConsultancyPartner to fetch.
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultancyPartners to fetch.
     */
    orderBy?: ConsultancyPartnerOrderByWithRelationInput | ConsultancyPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultancyPartners.
     */
    cursor?: ConsultancyPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultancyPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultancyPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultancyPartners.
     */
    distinct?: ConsultancyPartnerScalarFieldEnum | ConsultancyPartnerScalarFieldEnum[]
  }

  /**
   * ConsultancyPartner findFirstOrThrow
   */
  export type ConsultancyPartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * Filter, which ConsultancyPartner to fetch.
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultancyPartners to fetch.
     */
    orderBy?: ConsultancyPartnerOrderByWithRelationInput | ConsultancyPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultancyPartners.
     */
    cursor?: ConsultancyPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultancyPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultancyPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultancyPartners.
     */
    distinct?: ConsultancyPartnerScalarFieldEnum | ConsultancyPartnerScalarFieldEnum[]
  }

  /**
   * ConsultancyPartner findMany
   */
  export type ConsultancyPartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * Filter, which ConsultancyPartners to fetch.
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultancyPartners to fetch.
     */
    orderBy?: ConsultancyPartnerOrderByWithRelationInput | ConsultancyPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultancyPartners.
     */
    cursor?: ConsultancyPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultancyPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultancyPartners.
     */
    skip?: number
    distinct?: ConsultancyPartnerScalarFieldEnum | ConsultancyPartnerScalarFieldEnum[]
  }

  /**
   * ConsultancyPartner create
   */
  export type ConsultancyPartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsultancyPartner.
     */
    data: XOR<ConsultancyPartnerCreateInput, ConsultancyPartnerUncheckedCreateInput>
  }

  /**
   * ConsultancyPartner createMany
   */
  export type ConsultancyPartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultancyPartners.
     */
    data: ConsultancyPartnerCreateManyInput | ConsultancyPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultancyPartner createManyAndReturn
   */
  export type ConsultancyPartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultancyPartners.
     */
    data: ConsultancyPartnerCreateManyInput | ConsultancyPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultancyPartner update
   */
  export type ConsultancyPartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsultancyPartner.
     */
    data: XOR<ConsultancyPartnerUpdateInput, ConsultancyPartnerUncheckedUpdateInput>
    /**
     * Choose, which ConsultancyPartner to update.
     */
    where: ConsultancyPartnerWhereUniqueInput
  }

  /**
   * ConsultancyPartner updateMany
   */
  export type ConsultancyPartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultancyPartners.
     */
    data: XOR<ConsultancyPartnerUpdateManyMutationInput, ConsultancyPartnerUncheckedUpdateManyInput>
    /**
     * Filter which ConsultancyPartners to update
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * Limit how many ConsultancyPartners to update.
     */
    limit?: number
  }

  /**
   * ConsultancyPartner updateManyAndReturn
   */
  export type ConsultancyPartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * The data used to update ConsultancyPartners.
     */
    data: XOR<ConsultancyPartnerUpdateManyMutationInput, ConsultancyPartnerUncheckedUpdateManyInput>
    /**
     * Filter which ConsultancyPartners to update
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * Limit how many ConsultancyPartners to update.
     */
    limit?: number
  }

  /**
   * ConsultancyPartner upsert
   */
  export type ConsultancyPartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsultancyPartner to update in case it exists.
     */
    where: ConsultancyPartnerWhereUniqueInput
    /**
     * In case the ConsultancyPartner found by the `where` argument doesn't exist, create a new ConsultancyPartner with this data.
     */
    create: XOR<ConsultancyPartnerCreateInput, ConsultancyPartnerUncheckedCreateInput>
    /**
     * In case the ConsultancyPartner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultancyPartnerUpdateInput, ConsultancyPartnerUncheckedUpdateInput>
  }

  /**
   * ConsultancyPartner delete
   */
  export type ConsultancyPartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
    /**
     * Filter which ConsultancyPartner to delete.
     */
    where: ConsultancyPartnerWhereUniqueInput
  }

  /**
   * ConsultancyPartner deleteMany
   */
  export type ConsultancyPartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultancyPartners to delete
     */
    where?: ConsultancyPartnerWhereInput
    /**
     * Limit how many ConsultancyPartners to delete.
     */
    limit?: number
  }

  /**
   * ConsultancyPartner without action
   */
  export type ConsultancyPartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultancyPartner
     */
    select?: ConsultancyPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultancyPartner
     */
    omit?: ConsultancyPartnerOmit<ExtArgs> | null
  }


  /**
   * Model TrainingPartner
   */

  export type AggregateTrainingPartner = {
    _count: TrainingPartnerCountAggregateOutputType | null
    _min: TrainingPartnerMinAggregateOutputType | null
    _max: TrainingPartnerMaxAggregateOutputType | null
  }

  export type TrainingPartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    contactEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingPartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contactEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingPartnerCountAggregateOutputType = {
    id: number
    name: number
    contactEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainingPartnerMinAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingPartnerMaxAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingPartnerCountAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainingPartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPartner to aggregate.
     */
    where?: TrainingPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPartners to fetch.
     */
    orderBy?: TrainingPartnerOrderByWithRelationInput | TrainingPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingPartners
    **/
    _count?: true | TrainingPartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingPartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingPartnerMaxAggregateInputType
  }

  export type GetTrainingPartnerAggregateType<T extends TrainingPartnerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingPartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingPartner[P]>
      : GetScalarType<T[P], AggregateTrainingPartner[P]>
  }




  export type TrainingPartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingPartnerWhereInput
    orderBy?: TrainingPartnerOrderByWithAggregationInput | TrainingPartnerOrderByWithAggregationInput[]
    by: TrainingPartnerScalarFieldEnum[] | TrainingPartnerScalarFieldEnum
    having?: TrainingPartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingPartnerCountAggregateInputType | true
    _min?: TrainingPartnerMinAggregateInputType
    _max?: TrainingPartnerMaxAggregateInputType
  }

  export type TrainingPartnerGroupByOutputType = {
    id: string
    name: string
    contactEmail: string | null
    createdAt: Date
    updatedAt: Date
    _count: TrainingPartnerCountAggregateOutputType | null
    _min: TrainingPartnerMinAggregateOutputType | null
    _max: TrainingPartnerMaxAggregateOutputType | null
  }

  type GetTrainingPartnerGroupByPayload<T extends TrainingPartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingPartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingPartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingPartnerGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingPartnerGroupByOutputType[P]>
        }
      >
    >


  export type TrainingPartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | TrainingPartner$coursesArgs<ExtArgs>
    _count?: boolean | TrainingPartnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingPartner"]>

  export type TrainingPartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trainingPartner"]>

  export type TrainingPartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trainingPartner"]>

  export type TrainingPartnerSelectScalar = {
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainingPartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contactEmail" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingPartner"]>
  export type TrainingPartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | TrainingPartner$coursesArgs<ExtArgs>
    _count?: boolean | TrainingPartnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainingPartnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrainingPartnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrainingPartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingPartner"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contactEmail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainingPartner"]>
    composites: {}
  }

  type TrainingPartnerGetPayload<S extends boolean | null | undefined | TrainingPartnerDefaultArgs> = $Result.GetResult<Prisma.$TrainingPartnerPayload, S>

  type TrainingPartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingPartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingPartnerCountAggregateInputType | true
    }

  export interface TrainingPartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingPartner'], meta: { name: 'TrainingPartner' } }
    /**
     * Find zero or one TrainingPartner that matches the filter.
     * @param {TrainingPartnerFindUniqueArgs} args - Arguments to find a TrainingPartner
     * @example
     * // Get one TrainingPartner
     * const trainingPartner = await prisma.trainingPartner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingPartnerFindUniqueArgs>(args: SelectSubset<T, TrainingPartnerFindUniqueArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingPartner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingPartnerFindUniqueOrThrowArgs} args - Arguments to find a TrainingPartner
     * @example
     * // Get one TrainingPartner
     * const trainingPartner = await prisma.trainingPartner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingPartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingPartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingPartner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerFindFirstArgs} args - Arguments to find a TrainingPartner
     * @example
     * // Get one TrainingPartner
     * const trainingPartner = await prisma.trainingPartner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingPartnerFindFirstArgs>(args?: SelectSubset<T, TrainingPartnerFindFirstArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingPartner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerFindFirstOrThrowArgs} args - Arguments to find a TrainingPartner
     * @example
     * // Get one TrainingPartner
     * const trainingPartner = await prisma.trainingPartner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingPartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingPartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingPartners
     * const trainingPartners = await prisma.trainingPartner.findMany()
     * 
     * // Get first 10 TrainingPartners
     * const trainingPartners = await prisma.trainingPartner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingPartnerWithIdOnly = await prisma.trainingPartner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingPartnerFindManyArgs>(args?: SelectSubset<T, TrainingPartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingPartner.
     * @param {TrainingPartnerCreateArgs} args - Arguments to create a TrainingPartner.
     * @example
     * // Create one TrainingPartner
     * const TrainingPartner = await prisma.trainingPartner.create({
     *   data: {
     *     // ... data to create a TrainingPartner
     *   }
     * })
     * 
     */
    create<T extends TrainingPartnerCreateArgs>(args: SelectSubset<T, TrainingPartnerCreateArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingPartners.
     * @param {TrainingPartnerCreateManyArgs} args - Arguments to create many TrainingPartners.
     * @example
     * // Create many TrainingPartners
     * const trainingPartner = await prisma.trainingPartner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingPartnerCreateManyArgs>(args?: SelectSubset<T, TrainingPartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingPartners and returns the data saved in the database.
     * @param {TrainingPartnerCreateManyAndReturnArgs} args - Arguments to create many TrainingPartners.
     * @example
     * // Create many TrainingPartners
     * const trainingPartner = await prisma.trainingPartner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingPartners and only return the `id`
     * const trainingPartnerWithIdOnly = await prisma.trainingPartner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingPartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingPartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingPartner.
     * @param {TrainingPartnerDeleteArgs} args - Arguments to delete one TrainingPartner.
     * @example
     * // Delete one TrainingPartner
     * const TrainingPartner = await prisma.trainingPartner.delete({
     *   where: {
     *     // ... filter to delete one TrainingPartner
     *   }
     * })
     * 
     */
    delete<T extends TrainingPartnerDeleteArgs>(args: SelectSubset<T, TrainingPartnerDeleteArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingPartner.
     * @param {TrainingPartnerUpdateArgs} args - Arguments to update one TrainingPartner.
     * @example
     * // Update one TrainingPartner
     * const trainingPartner = await prisma.trainingPartner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingPartnerUpdateArgs>(args: SelectSubset<T, TrainingPartnerUpdateArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingPartners.
     * @param {TrainingPartnerDeleteManyArgs} args - Arguments to filter TrainingPartners to delete.
     * @example
     * // Delete a few TrainingPartners
     * const { count } = await prisma.trainingPartner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingPartnerDeleteManyArgs>(args?: SelectSubset<T, TrainingPartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingPartners
     * const trainingPartner = await prisma.trainingPartner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingPartnerUpdateManyArgs>(args: SelectSubset<T, TrainingPartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPartners and returns the data updated in the database.
     * @param {TrainingPartnerUpdateManyAndReturnArgs} args - Arguments to update many TrainingPartners.
     * @example
     * // Update many TrainingPartners
     * const trainingPartner = await prisma.trainingPartner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingPartners and only return the `id`
     * const trainingPartnerWithIdOnly = await prisma.trainingPartner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingPartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingPartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingPartner.
     * @param {TrainingPartnerUpsertArgs} args - Arguments to update or create a TrainingPartner.
     * @example
     * // Update or create a TrainingPartner
     * const trainingPartner = await prisma.trainingPartner.upsert({
     *   create: {
     *     // ... data to create a TrainingPartner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingPartner we want to update
     *   }
     * })
     */
    upsert<T extends TrainingPartnerUpsertArgs>(args: SelectSubset<T, TrainingPartnerUpsertArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerCountArgs} args - Arguments to filter TrainingPartners to count.
     * @example
     * // Count the number of TrainingPartners
     * const count = await prisma.trainingPartner.count({
     *   where: {
     *     // ... the filter for the TrainingPartners we want to count
     *   }
     * })
    **/
    count<T extends TrainingPartnerCountArgs>(
      args?: Subset<T, TrainingPartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingPartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingPartnerAggregateArgs>(args: Subset<T, TrainingPartnerAggregateArgs>): Prisma.PrismaPromise<GetTrainingPartnerAggregateType<T>>

    /**
     * Group by TrainingPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingPartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingPartnerGroupByArgs['orderBy'] }
        : { orderBy?: TrainingPartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingPartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingPartner model
   */
  readonly fields: TrainingPartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingPartner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingPartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends TrainingPartner$coursesArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPartner$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingPartner model
   */
  interface TrainingPartnerFieldRefs {
    readonly id: FieldRef<"TrainingPartner", 'String'>
    readonly name: FieldRef<"TrainingPartner", 'String'>
    readonly contactEmail: FieldRef<"TrainingPartner", 'String'>
    readonly createdAt: FieldRef<"TrainingPartner", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainingPartner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingPartner findUnique
   */
  export type TrainingPartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPartner to fetch.
     */
    where: TrainingPartnerWhereUniqueInput
  }

  /**
   * TrainingPartner findUniqueOrThrow
   */
  export type TrainingPartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPartner to fetch.
     */
    where: TrainingPartnerWhereUniqueInput
  }

  /**
   * TrainingPartner findFirst
   */
  export type TrainingPartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPartner to fetch.
     */
    where?: TrainingPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPartners to fetch.
     */
    orderBy?: TrainingPartnerOrderByWithRelationInput | TrainingPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPartners.
     */
    cursor?: TrainingPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPartners.
     */
    distinct?: TrainingPartnerScalarFieldEnum | TrainingPartnerScalarFieldEnum[]
  }

  /**
   * TrainingPartner findFirstOrThrow
   */
  export type TrainingPartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPartner to fetch.
     */
    where?: TrainingPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPartners to fetch.
     */
    orderBy?: TrainingPartnerOrderByWithRelationInput | TrainingPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPartners.
     */
    cursor?: TrainingPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPartners.
     */
    distinct?: TrainingPartnerScalarFieldEnum | TrainingPartnerScalarFieldEnum[]
  }

  /**
   * TrainingPartner findMany
   */
  export type TrainingPartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPartners to fetch.
     */
    where?: TrainingPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPartners to fetch.
     */
    orderBy?: TrainingPartnerOrderByWithRelationInput | TrainingPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingPartners.
     */
    cursor?: TrainingPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPartners.
     */
    skip?: number
    distinct?: TrainingPartnerScalarFieldEnum | TrainingPartnerScalarFieldEnum[]
  }

  /**
   * TrainingPartner create
   */
  export type TrainingPartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingPartner.
     */
    data: XOR<TrainingPartnerCreateInput, TrainingPartnerUncheckedCreateInput>
  }

  /**
   * TrainingPartner createMany
   */
  export type TrainingPartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingPartners.
     */
    data: TrainingPartnerCreateManyInput | TrainingPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingPartner createManyAndReturn
   */
  export type TrainingPartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingPartners.
     */
    data: TrainingPartnerCreateManyInput | TrainingPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingPartner update
   */
  export type TrainingPartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingPartner.
     */
    data: XOR<TrainingPartnerUpdateInput, TrainingPartnerUncheckedUpdateInput>
    /**
     * Choose, which TrainingPartner to update.
     */
    where: TrainingPartnerWhereUniqueInput
  }

  /**
   * TrainingPartner updateMany
   */
  export type TrainingPartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingPartners.
     */
    data: XOR<TrainingPartnerUpdateManyMutationInput, TrainingPartnerUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPartners to update
     */
    where?: TrainingPartnerWhereInput
    /**
     * Limit how many TrainingPartners to update.
     */
    limit?: number
  }

  /**
   * TrainingPartner updateManyAndReturn
   */
  export type TrainingPartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * The data used to update TrainingPartners.
     */
    data: XOR<TrainingPartnerUpdateManyMutationInput, TrainingPartnerUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPartners to update
     */
    where?: TrainingPartnerWhereInput
    /**
     * Limit how many TrainingPartners to update.
     */
    limit?: number
  }

  /**
   * TrainingPartner upsert
   */
  export type TrainingPartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingPartner to update in case it exists.
     */
    where: TrainingPartnerWhereUniqueInput
    /**
     * In case the TrainingPartner found by the `where` argument doesn't exist, create a new TrainingPartner with this data.
     */
    create: XOR<TrainingPartnerCreateInput, TrainingPartnerUncheckedCreateInput>
    /**
     * In case the TrainingPartner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingPartnerUpdateInput, TrainingPartnerUncheckedUpdateInput>
  }

  /**
   * TrainingPartner delete
   */
  export type TrainingPartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    /**
     * Filter which TrainingPartner to delete.
     */
    where: TrainingPartnerWhereUniqueInput
  }

  /**
   * TrainingPartner deleteMany
   */
  export type TrainingPartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPartners to delete
     */
    where?: TrainingPartnerWhereInput
    /**
     * Limit how many TrainingPartners to delete.
     */
    limit?: number
  }

  /**
   * TrainingPartner.courses
   */
  export type TrainingPartner$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * TrainingPartner without action
   */
  export type TrainingPartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    trainingType: $Enums.TrainingType | null
    partnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    trainingType: $Enums.TrainingType | null
    partnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    trainingType: number
    partnerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    trainingType?: true
    partnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    trainingType?: true
    partnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    trainingType?: true
    partnerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string | null
    trainingType: $Enums.TrainingType
    partnerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    trainingType?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | Course$partnerArgs<ExtArgs>
    TrainingRecord?: boolean | Course$TrainingRecordArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    trainingType?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | Course$partnerArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    trainingType?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | Course$partnerArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    trainingType?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "trainingType" | "partnerId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | Course$partnerArgs<ExtArgs>
    TrainingRecord?: boolean | Course$TrainingRecordArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | Course$partnerArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | Course$partnerArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      partner: Prisma.$TrainingPartnerPayload<ExtArgs> | null
      TrainingRecord: Prisma.$TrainingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      trainingType: $Enums.TrainingType
      partnerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partner<T extends Course$partnerArgs<ExtArgs> = {}>(args?: Subset<T, Course$partnerArgs<ExtArgs>>): Prisma__TrainingPartnerClient<$Result.GetResult<Prisma.$TrainingPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TrainingRecord<T extends Course$TrainingRecordArgs<ExtArgs> = {}>(args?: Subset<T, Course$TrainingRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly trainingType: FieldRef<"Course", 'TrainingType'>
    readonly partnerId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.partner
   */
  export type Course$partnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPartner
     */
    select?: TrainingPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPartner
     */
    omit?: TrainingPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPartnerInclude<ExtArgs> | null
    where?: TrainingPartnerWhereInput
  }

  /**
   * Course.TrainingRecord
   */
  export type Course$TrainingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    where?: TrainingRecordWhereInput
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    cursor?: TrainingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model TrainingRecord
   */

  export type AggregateTrainingRecord = {
    _count: TrainingRecordCountAggregateOutputType | null
    _min: TrainingRecordMinAggregateOutputType | null
    _max: TrainingRecordMaxAggregateOutputType | null
  }

  export type TrainingRecordMinAggregateOutputType = {
    id: string | null
    crewId: string | null
    courseId: string | null
    dateTaken: Date | null
    expiryDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingRecordMaxAggregateOutputType = {
    id: string | null
    crewId: string | null
    courseId: string | null
    dateTaken: Date | null
    expiryDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingRecordCountAggregateOutputType = {
    id: number
    crewId: number
    courseId: number
    dateTaken: number
    expiryDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainingRecordMinAggregateInputType = {
    id?: true
    crewId?: true
    courseId?: true
    dateTaken?: true
    expiryDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingRecordMaxAggregateInputType = {
    id?: true
    crewId?: true
    courseId?: true
    dateTaken?: true
    expiryDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingRecordCountAggregateInputType = {
    id?: true
    crewId?: true
    courseId?: true
    dateTaken?: true
    expiryDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRecord to aggregate.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingRecords
    **/
    _count?: true | TrainingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingRecordMaxAggregateInputType
  }

  export type GetTrainingRecordAggregateType<T extends TrainingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingRecord[P]>
      : GetScalarType<T[P], AggregateTrainingRecord[P]>
  }




  export type TrainingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRecordWhereInput
    orderBy?: TrainingRecordOrderByWithAggregationInput | TrainingRecordOrderByWithAggregationInput[]
    by: TrainingRecordScalarFieldEnum[] | TrainingRecordScalarFieldEnum
    having?: TrainingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingRecordCountAggregateInputType | true
    _min?: TrainingRecordMinAggregateInputType
    _max?: TrainingRecordMaxAggregateInputType
  }

  export type TrainingRecordGroupByOutputType = {
    id: string
    crewId: string
    courseId: string
    dateTaken: Date
    expiryDate: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TrainingRecordCountAggregateOutputType | null
    _min: TrainingRecordMinAggregateOutputType | null
    _max: TrainingRecordMaxAggregateOutputType | null
  }

  type GetTrainingRecordGroupByPayload<T extends TrainingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingRecordGroupByOutputType[P]>
        }
      >
    >


  export type TrainingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crewId?: boolean
    courseId?: boolean
    dateTaken?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingRecord"]>

  export type TrainingRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crewId?: boolean
    courseId?: boolean
    dateTaken?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingRecord"]>

  export type TrainingRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crewId?: boolean
    courseId?: boolean
    dateTaken?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingRecord"]>

  export type TrainingRecordSelectScalar = {
    id?: boolean
    crewId?: boolean
    courseId?: boolean
    dateTaken?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crewId" | "courseId" | "dateTaken" | "expiryDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingRecord"]>
  export type TrainingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }
  export type TrainingRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }
  export type TrainingRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    crew?: boolean | CrewDefaultArgs<ExtArgs>
  }

  export type $TrainingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingRecord"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      crew: Prisma.$CrewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crewId: string
      courseId: string
      dateTaken: Date
      expiryDate: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainingRecord"]>
    composites: {}
  }

  type TrainingRecordGetPayload<S extends boolean | null | undefined | TrainingRecordDefaultArgs> = $Result.GetResult<Prisma.$TrainingRecordPayload, S>

  type TrainingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingRecordCountAggregateInputType | true
    }

  export interface TrainingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingRecord'], meta: { name: 'TrainingRecord' } }
    /**
     * Find zero or one TrainingRecord that matches the filter.
     * @param {TrainingRecordFindUniqueArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingRecordFindUniqueArgs>(args: SelectSubset<T, TrainingRecordFindUniqueArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingRecordFindUniqueOrThrowArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordFindFirstArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingRecordFindFirstArgs>(args?: SelectSubset<T, TrainingRecordFindFirstArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordFindFirstOrThrowArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingRecords
     * const trainingRecords = await prisma.trainingRecord.findMany()
     * 
     * // Get first 10 TrainingRecords
     * const trainingRecords = await prisma.trainingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingRecordWithIdOnly = await prisma.trainingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingRecordFindManyArgs>(args?: SelectSubset<T, TrainingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingRecord.
     * @param {TrainingRecordCreateArgs} args - Arguments to create a TrainingRecord.
     * @example
     * // Create one TrainingRecord
     * const TrainingRecord = await prisma.trainingRecord.create({
     *   data: {
     *     // ... data to create a TrainingRecord
     *   }
     * })
     * 
     */
    create<T extends TrainingRecordCreateArgs>(args: SelectSubset<T, TrainingRecordCreateArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingRecords.
     * @param {TrainingRecordCreateManyArgs} args - Arguments to create many TrainingRecords.
     * @example
     * // Create many TrainingRecords
     * const trainingRecord = await prisma.trainingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingRecordCreateManyArgs>(args?: SelectSubset<T, TrainingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingRecords and returns the data saved in the database.
     * @param {TrainingRecordCreateManyAndReturnArgs} args - Arguments to create many TrainingRecords.
     * @example
     * // Create many TrainingRecords
     * const trainingRecord = await prisma.trainingRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingRecords and only return the `id`
     * const trainingRecordWithIdOnly = await prisma.trainingRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingRecord.
     * @param {TrainingRecordDeleteArgs} args - Arguments to delete one TrainingRecord.
     * @example
     * // Delete one TrainingRecord
     * const TrainingRecord = await prisma.trainingRecord.delete({
     *   where: {
     *     // ... filter to delete one TrainingRecord
     *   }
     * })
     * 
     */
    delete<T extends TrainingRecordDeleteArgs>(args: SelectSubset<T, TrainingRecordDeleteArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingRecord.
     * @param {TrainingRecordUpdateArgs} args - Arguments to update one TrainingRecord.
     * @example
     * // Update one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingRecordUpdateArgs>(args: SelectSubset<T, TrainingRecordUpdateArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingRecords.
     * @param {TrainingRecordDeleteManyArgs} args - Arguments to filter TrainingRecords to delete.
     * @example
     * // Delete a few TrainingRecords
     * const { count } = await prisma.trainingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingRecordDeleteManyArgs>(args?: SelectSubset<T, TrainingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingRecords
     * const trainingRecord = await prisma.trainingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingRecordUpdateManyArgs>(args: SelectSubset<T, TrainingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingRecords and returns the data updated in the database.
     * @param {TrainingRecordUpdateManyAndReturnArgs} args - Arguments to update many TrainingRecords.
     * @example
     * // Update many TrainingRecords
     * const trainingRecord = await prisma.trainingRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingRecords and only return the `id`
     * const trainingRecordWithIdOnly = await prisma.trainingRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingRecord.
     * @param {TrainingRecordUpsertArgs} args - Arguments to update or create a TrainingRecord.
     * @example
     * // Update or create a TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.upsert({
     *   create: {
     *     // ... data to create a TrainingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingRecord we want to update
     *   }
     * })
     */
    upsert<T extends TrainingRecordUpsertArgs>(args: SelectSubset<T, TrainingRecordUpsertArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordCountArgs} args - Arguments to filter TrainingRecords to count.
     * @example
     * // Count the number of TrainingRecords
     * const count = await prisma.trainingRecord.count({
     *   where: {
     *     // ... the filter for the TrainingRecords we want to count
     *   }
     * })
    **/
    count<T extends TrainingRecordCountArgs>(
      args?: Subset<T, TrainingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingRecordAggregateArgs>(args: Subset<T, TrainingRecordAggregateArgs>): Prisma.PrismaPromise<GetTrainingRecordAggregateType<T>>

    /**
     * Group by TrainingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingRecordGroupByArgs['orderBy'] }
        : { orderBy?: TrainingRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingRecord model
   */
  readonly fields: TrainingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    crew<T extends CrewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrewDefaultArgs<ExtArgs>>): Prisma__CrewClient<$Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingRecord model
   */
  interface TrainingRecordFieldRefs {
    readonly id: FieldRef<"TrainingRecord", 'String'>
    readonly crewId: FieldRef<"TrainingRecord", 'String'>
    readonly courseId: FieldRef<"TrainingRecord", 'String'>
    readonly dateTaken: FieldRef<"TrainingRecord", 'DateTime'>
    readonly expiryDate: FieldRef<"TrainingRecord", 'DateTime'>
    readonly status: FieldRef<"TrainingRecord", 'String'>
    readonly createdAt: FieldRef<"TrainingRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainingRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingRecord findUnique
   */
  export type TrainingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord findUniqueOrThrow
   */
  export type TrainingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord findFirst
   */
  export type TrainingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingRecords.
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingRecords.
     */
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * TrainingRecord findFirstOrThrow
   */
  export type TrainingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingRecords.
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingRecords.
     */
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * TrainingRecord findMany
   */
  export type TrainingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecords to fetch.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingRecords.
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * TrainingRecord create
   */
  export type TrainingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingRecord.
     */
    data: XOR<TrainingRecordCreateInput, TrainingRecordUncheckedCreateInput>
  }

  /**
   * TrainingRecord createMany
   */
  export type TrainingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingRecords.
     */
    data: TrainingRecordCreateManyInput | TrainingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingRecord createManyAndReturn
   */
  export type TrainingRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingRecords.
     */
    data: TrainingRecordCreateManyInput | TrainingRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingRecord update
   */
  export type TrainingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingRecord.
     */
    data: XOR<TrainingRecordUpdateInput, TrainingRecordUncheckedUpdateInput>
    /**
     * Choose, which TrainingRecord to update.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord updateMany
   */
  export type TrainingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingRecords.
     */
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyInput>
    /**
     * Filter which TrainingRecords to update
     */
    where?: TrainingRecordWhereInput
    /**
     * Limit how many TrainingRecords to update.
     */
    limit?: number
  }

  /**
   * TrainingRecord updateManyAndReturn
   */
  export type TrainingRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * The data used to update TrainingRecords.
     */
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyInput>
    /**
     * Filter which TrainingRecords to update
     */
    where?: TrainingRecordWhereInput
    /**
     * Limit how many TrainingRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingRecord upsert
   */
  export type TrainingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingRecord to update in case it exists.
     */
    where: TrainingRecordWhereUniqueInput
    /**
     * In case the TrainingRecord found by the `where` argument doesn't exist, create a new TrainingRecord with this data.
     */
    create: XOR<TrainingRecordCreateInput, TrainingRecordUncheckedCreateInput>
    /**
     * In case the TrainingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingRecordUpdateInput, TrainingRecordUncheckedUpdateInput>
  }

  /**
   * TrainingRecord delete
   */
  export type TrainingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter which TrainingRecord to delete.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord deleteMany
   */
  export type TrainingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRecords to delete
     */
    where?: TrainingRecordWhereInput
    /**
     * Limit how many TrainingRecords to delete.
     */
    limit?: number
  }

  /**
   * TrainingRecord without action
   */
  export type TrainingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orgId: 'orgId',
    name: 'name',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    actorId: 'actorId',
    targetUserId: 'targetUserId',
    orgId: 'orgId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const CrewScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    rank: 'rank',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrewScalarFieldEnum = (typeof CrewScalarFieldEnum)[keyof typeof CrewScalarFieldEnum]


  export const VesselScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imoNumber: 'imoNumber',
    capacity: 'capacity',
    homePort: 'homePort',
    vesselType: 'vesselType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bhpKw: 'bhpKw',
    companyName: 'companyName',
    dwt: 'dwt',
    flag: 'flag',
    grt: 'grt',
    tonnageValue: 'tonnageValue',
    ums: 'ums',
    yearBuilt: 'yearBuilt',
    orgId: 'orgId',
    engineMake: 'engineMake',
    tonnageUnit: 'tonnageUnit',
    callSign: 'callSign',
    contactEmail: 'contactEmail',
    contactPersonName: 'contactPersonName',
    contactPhone: 'contactPhone',
    deletedAt: 'deletedAt',
    inspectionDueDate: 'inspectionDueDate',
    isActive: 'isActive',
    lastInspectionDate: 'lastInspectionDate',
    mmsi: 'mmsi',
    safetyCertificateUrl: 'safetyCertificateUrl'
  };

  export type VesselScalarFieldEnum = (typeof VesselScalarFieldEnum)[keyof typeof VesselScalarFieldEnum]


  export const VesselRankRequirementScalarFieldEnum: {
    id: 'id',
    vesselId: 'vesselId',
    role: 'role',
    requiredCount: 'requiredCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VesselRankRequirementScalarFieldEnum = (typeof VesselRankRequirementScalarFieldEnum)[keyof typeof VesselRankRequirementScalarFieldEnum]


  export const VesselAssignmentScalarFieldEnum: {
    id: 'id',
    vesselId: 'vesselId',
    crewId: 'crewId',
    role: 'role',
    assignedAt: 'assignedAt',
    releasedAt: 'releasedAt'
  };

  export type VesselAssignmentScalarFieldEnum = (typeof VesselAssignmentScalarFieldEnum)[keyof typeof VesselAssignmentScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    crewId: 'crewId',
    type: 'type',
    fileName: 'fileName',
    url: 'url',
    uploadedAt: 'uploadedAt',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ConsultancyPartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    contactEmail: 'contactEmail',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultancyPartnerScalarFieldEnum = (typeof ConsultancyPartnerScalarFieldEnum)[keyof typeof ConsultancyPartnerScalarFieldEnum]


  export const TrainingPartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactEmail: 'contactEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainingPartnerScalarFieldEnum = (typeof TrainingPartnerScalarFieldEnum)[keyof typeof TrainingPartnerScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    trainingType: 'trainingType',
    partnerId: 'partnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const TrainingRecordScalarFieldEnum: {
    id: 'id',
    crewId: 'crewId',
    courseId: 'courseId',
    dateTaken: 'dateTaken',
    expiryDate: 'expiryDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainingRecordScalarFieldEnum = (typeof TrainingRecordScalarFieldEnum)[keyof typeof TrainingRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VesselType'
   */
  export type EnumVesselTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VesselType'>
    


  /**
   * Reference to a field of type 'VesselType[]'
   */
  export type ListEnumVesselTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VesselType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EngineMake'
   */
  export type EnumEngineMakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EngineMake'>
    


  /**
   * Reference to a field of type 'EngineMake[]'
   */
  export type ListEnumEngineMakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EngineMake[]'>
    


  /**
   * Reference to a field of type 'TonnageUnit'
   */
  export type EnumTonnageUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TonnageUnit'>
    


  /**
   * Reference to a field of type 'TonnageUnit[]'
   */
  export type ListEnumTonnageUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TonnageUnit[]'>
    


  /**
   * Reference to a field of type 'VesselRole'
   */
  export type EnumVesselRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VesselRole'>
    


  /**
   * Reference to a field of type 'VesselRole[]'
   */
  export type ListEnumVesselRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VesselRole[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'ConsultancyCategory'
   */
  export type EnumConsultancyCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultancyCategory'>
    


  /**
   * Reference to a field of type 'ConsultancyCategory[]'
   */
  export type ListEnumConsultancyCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultancyCategory[]'>
    


  /**
   * Reference to a field of type 'TrainingType'
   */
  export type EnumTrainingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingType'>
    


  /**
   * Reference to a field of type 'TrainingType[]'
   */
  export type ListEnumTrainingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingType[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orgId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdBy?: StringFilter<"User"> | string
    updatedBy?: StringFilter<"User"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdUsers?: UserListRelationFilter
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    updater?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedUsers?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    creator?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
    org?: OrganizationOrderByWithRelationInput
    updater?: UserOrderByWithRelationInput
    updatedUsers?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    orgId_email?: UserOrgIdEmailCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orgId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdBy?: StringFilter<"User"> | string
    updatedBy?: StringFilter<"User"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdUsers?: UserListRelationFilter
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    updater?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedUsers?: UserListRelationFilter
  }, "id" | "email" | "orgId_email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    orgId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdBy?: StringWithAggregatesFilter<"User"> | string
    updatedBy?: StringWithAggregatesFilter<"User"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    targetUserId?: StringNullableFilter<"AuditLog"> | string | null
    orgId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    orgId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    targetUserId?: StringNullableFilter<"AuditLog"> | string | null
    orgId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    orgId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    targetUserId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    orgId?: StringWithAggregatesFilter<"AuditLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type CrewWhereInput = {
    AND?: CrewWhereInput | CrewWhereInput[]
    OR?: CrewWhereInput[]
    NOT?: CrewWhereInput | CrewWhereInput[]
    id?: StringFilter<"Crew"> | string
    firstName?: StringFilter<"Crew"> | string
    lastName?: StringFilter<"Crew"> | string
    rank?: StringFilter<"Crew"> | string
    status?: StringFilter<"Crew"> | string
    createdAt?: DateTimeFilter<"Crew"> | Date | string
    updatedAt?: DateTimeFilter<"Crew"> | Date | string
    Document?: DocumentListRelationFilter
    TrainingRecord?: TrainingRecordListRelationFilter
    VesselAssignment?: VesselAssignmentListRelationFilter
  }

  export type CrewOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    rank?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Document?: DocumentOrderByRelationAggregateInput
    TrainingRecord?: TrainingRecordOrderByRelationAggregateInput
    VesselAssignment?: VesselAssignmentOrderByRelationAggregateInput
  }

  export type CrewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrewWhereInput | CrewWhereInput[]
    OR?: CrewWhereInput[]
    NOT?: CrewWhereInput | CrewWhereInput[]
    firstName?: StringFilter<"Crew"> | string
    lastName?: StringFilter<"Crew"> | string
    rank?: StringFilter<"Crew"> | string
    status?: StringFilter<"Crew"> | string
    createdAt?: DateTimeFilter<"Crew"> | Date | string
    updatedAt?: DateTimeFilter<"Crew"> | Date | string
    Document?: DocumentListRelationFilter
    TrainingRecord?: TrainingRecordListRelationFilter
    VesselAssignment?: VesselAssignmentListRelationFilter
  }, "id">

  export type CrewOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    rank?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrewCountOrderByAggregateInput
    _max?: CrewMaxOrderByAggregateInput
    _min?: CrewMinOrderByAggregateInput
  }

  export type CrewScalarWhereWithAggregatesInput = {
    AND?: CrewScalarWhereWithAggregatesInput | CrewScalarWhereWithAggregatesInput[]
    OR?: CrewScalarWhereWithAggregatesInput[]
    NOT?: CrewScalarWhereWithAggregatesInput | CrewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Crew"> | string
    firstName?: StringWithAggregatesFilter<"Crew"> | string
    lastName?: StringWithAggregatesFilter<"Crew"> | string
    rank?: StringWithAggregatesFilter<"Crew"> | string
    status?: StringWithAggregatesFilter<"Crew"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Crew"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Crew"> | Date | string
  }

  export type VesselWhereInput = {
    AND?: VesselWhereInput | VesselWhereInput[]
    OR?: VesselWhereInput[]
    NOT?: VesselWhereInput | VesselWhereInput[]
    id?: StringFilter<"Vessel"> | string
    name?: StringFilter<"Vessel"> | string
    imoNumber?: StringFilter<"Vessel"> | string
    capacity?: IntNullableFilter<"Vessel"> | number | null
    homePort?: StringNullableFilter<"Vessel"> | string | null
    vesselType?: EnumVesselTypeNullableFilter<"Vessel"> | $Enums.VesselType | null
    createdAt?: DateTimeFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeFilter<"Vessel"> | Date | string
    bhpKw?: FloatNullableFilter<"Vessel"> | number | null
    companyName?: StringNullableFilter<"Vessel"> | string | null
    dwt?: IntNullableFilter<"Vessel"> | number | null
    flag?: StringNullableFilter<"Vessel"> | string | null
    grt?: IntNullableFilter<"Vessel"> | number | null
    tonnageValue?: FloatNullableFilter<"Vessel"> | number | null
    ums?: BoolNullableFilter<"Vessel"> | boolean | null
    yearBuilt?: IntNullableFilter<"Vessel"> | number | null
    orgId?: StringFilter<"Vessel"> | string
    engineMake?: EnumEngineMakeNullableFilter<"Vessel"> | $Enums.EngineMake | null
    tonnageUnit?: EnumTonnageUnitNullableFilter<"Vessel"> | $Enums.TonnageUnit | null
    callSign?: StringNullableFilter<"Vessel"> | string | null
    contactEmail?: StringNullableFilter<"Vessel"> | string | null
    contactPersonName?: StringNullableFilter<"Vessel"> | string | null
    contactPhone?: StringNullableFilter<"Vessel"> | string | null
    deletedAt?: DateTimeNullableFilter<"Vessel"> | Date | string | null
    inspectionDueDate?: DateTimeNullableFilter<"Vessel"> | Date | string | null
    isActive?: BoolFilter<"Vessel"> | boolean
    lastInspectionDate?: DateTimeNullableFilter<"Vessel"> | Date | string | null
    mmsi?: StringNullableFilter<"Vessel"> | string | null
    safetyCertificateUrl?: StringNullableFilter<"Vessel"> | string | null
    VesselAssignment?: VesselAssignmentListRelationFilter
    rankRequirements?: VesselRankRequirementListRelationFilter
  }

  export type VesselOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    capacity?: SortOrderInput | SortOrder
    homePort?: SortOrderInput | SortOrder
    vesselType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bhpKw?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    dwt?: SortOrderInput | SortOrder
    flag?: SortOrderInput | SortOrder
    grt?: SortOrderInput | SortOrder
    tonnageValue?: SortOrderInput | SortOrder
    ums?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    orgId?: SortOrder
    engineMake?: SortOrderInput | SortOrder
    tonnageUnit?: SortOrderInput | SortOrder
    callSign?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPersonName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    inspectionDueDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastInspectionDate?: SortOrderInput | SortOrder
    mmsi?: SortOrderInput | SortOrder
    safetyCertificateUrl?: SortOrderInput | SortOrder
    VesselAssignment?: VesselAssignmentOrderByRelationAggregateInput
    rankRequirements?: VesselRankRequirementOrderByRelationAggregateInput
  }

  export type VesselWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    imoNumber_orgId?: VesselImoNumberOrgIdCompoundUniqueInput
    AND?: VesselWhereInput | VesselWhereInput[]
    OR?: VesselWhereInput[]
    NOT?: VesselWhereInput | VesselWhereInput[]
    name?: StringFilter<"Vessel"> | string
    imoNumber?: StringFilter<"Vessel"> | string
    capacity?: IntNullableFilter<"Vessel"> | number | null
    homePort?: StringNullableFilter<"Vessel"> | string | null
    vesselType?: EnumVesselTypeNullableFilter<"Vessel"> | $Enums.VesselType | null
    createdAt?: DateTimeFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeFilter<"Vessel"> | Date | string
    bhpKw?: FloatNullableFilter<"Vessel"> | number | null
    companyName?: StringNullableFilter<"Vessel"> | string | null
    dwt?: IntNullableFilter<"Vessel"> | number | null
    flag?: StringNullableFilter<"Vessel"> | string | null
    grt?: IntNullableFilter<"Vessel"> | number | null
    tonnageValue?: FloatNullableFilter<"Vessel"> | number | null
    ums?: BoolNullableFilter<"Vessel"> | boolean | null
    yearBuilt?: IntNullableFilter<"Vessel"> | number | null
    orgId?: StringFilter<"Vessel"> | string
    engineMake?: EnumEngineMakeNullableFilter<"Vessel"> | $Enums.EngineMake | null
    tonnageUnit?: EnumTonnageUnitNullableFilter<"Vessel"> | $Enums.TonnageUnit | null
    callSign?: StringNullableFilter<"Vessel"> | string | null
    contactEmail?: StringNullableFilter<"Vessel"> | string | null
    contactPersonName?: StringNullableFilter<"Vessel"> | string | null
    contactPhone?: StringNullableFilter<"Vessel"> | string | null
    deletedAt?: DateTimeNullableFilter<"Vessel"> | Date | string | null
    inspectionDueDate?: DateTimeNullableFilter<"Vessel"> | Date | string | null
    isActive?: BoolFilter<"Vessel"> | boolean
    lastInspectionDate?: DateTimeNullableFilter<"Vessel"> | Date | string | null
    mmsi?: StringNullableFilter<"Vessel"> | string | null
    safetyCertificateUrl?: StringNullableFilter<"Vessel"> | string | null
    VesselAssignment?: VesselAssignmentListRelationFilter
    rankRequirements?: VesselRankRequirementListRelationFilter
  }, "id" | "imoNumber_orgId">

  export type VesselOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    capacity?: SortOrderInput | SortOrder
    homePort?: SortOrderInput | SortOrder
    vesselType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bhpKw?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    dwt?: SortOrderInput | SortOrder
    flag?: SortOrderInput | SortOrder
    grt?: SortOrderInput | SortOrder
    tonnageValue?: SortOrderInput | SortOrder
    ums?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    orgId?: SortOrder
    engineMake?: SortOrderInput | SortOrder
    tonnageUnit?: SortOrderInput | SortOrder
    callSign?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPersonName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    inspectionDueDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastInspectionDate?: SortOrderInput | SortOrder
    mmsi?: SortOrderInput | SortOrder
    safetyCertificateUrl?: SortOrderInput | SortOrder
    _count?: VesselCountOrderByAggregateInput
    _avg?: VesselAvgOrderByAggregateInput
    _max?: VesselMaxOrderByAggregateInput
    _min?: VesselMinOrderByAggregateInput
    _sum?: VesselSumOrderByAggregateInput
  }

  export type VesselScalarWhereWithAggregatesInput = {
    AND?: VesselScalarWhereWithAggregatesInput | VesselScalarWhereWithAggregatesInput[]
    OR?: VesselScalarWhereWithAggregatesInput[]
    NOT?: VesselScalarWhereWithAggregatesInput | VesselScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vessel"> | string
    name?: StringWithAggregatesFilter<"Vessel"> | string
    imoNumber?: StringWithAggregatesFilter<"Vessel"> | string
    capacity?: IntNullableWithAggregatesFilter<"Vessel"> | number | null
    homePort?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    vesselType?: EnumVesselTypeNullableWithAggregatesFilter<"Vessel"> | $Enums.VesselType | null
    createdAt?: DateTimeWithAggregatesFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vessel"> | Date | string
    bhpKw?: FloatNullableWithAggregatesFilter<"Vessel"> | number | null
    companyName?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    dwt?: IntNullableWithAggregatesFilter<"Vessel"> | number | null
    flag?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    grt?: IntNullableWithAggregatesFilter<"Vessel"> | number | null
    tonnageValue?: FloatNullableWithAggregatesFilter<"Vessel"> | number | null
    ums?: BoolNullableWithAggregatesFilter<"Vessel"> | boolean | null
    yearBuilt?: IntNullableWithAggregatesFilter<"Vessel"> | number | null
    orgId?: StringWithAggregatesFilter<"Vessel"> | string
    engineMake?: EnumEngineMakeNullableWithAggregatesFilter<"Vessel"> | $Enums.EngineMake | null
    tonnageUnit?: EnumTonnageUnitNullableWithAggregatesFilter<"Vessel"> | $Enums.TonnageUnit | null
    callSign?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    contactPersonName?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Vessel"> | Date | string | null
    inspectionDueDate?: DateTimeNullableWithAggregatesFilter<"Vessel"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Vessel"> | boolean
    lastInspectionDate?: DateTimeNullableWithAggregatesFilter<"Vessel"> | Date | string | null
    mmsi?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
    safetyCertificateUrl?: StringNullableWithAggregatesFilter<"Vessel"> | string | null
  }

  export type VesselRankRequirementWhereInput = {
    AND?: VesselRankRequirementWhereInput | VesselRankRequirementWhereInput[]
    OR?: VesselRankRequirementWhereInput[]
    NOT?: VesselRankRequirementWhereInput | VesselRankRequirementWhereInput[]
    id?: StringFilter<"VesselRankRequirement"> | string
    vesselId?: StringFilter<"VesselRankRequirement"> | string
    role?: EnumVesselRoleFilter<"VesselRankRequirement"> | $Enums.VesselRole
    requiredCount?: IntFilter<"VesselRankRequirement"> | number
    createdAt?: DateTimeFilter<"VesselRankRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"VesselRankRequirement"> | Date | string
    vessel?: XOR<VesselScalarRelationFilter, VesselWhereInput>
  }

  export type VesselRankRequirementOrderByWithRelationInput = {
    id?: SortOrder
    vesselId?: SortOrder
    role?: SortOrder
    requiredCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vessel?: VesselOrderByWithRelationInput
  }

  export type VesselRankRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vesselId_role?: VesselRankRequirementVesselIdRoleCompoundUniqueInput
    AND?: VesselRankRequirementWhereInput | VesselRankRequirementWhereInput[]
    OR?: VesselRankRequirementWhereInput[]
    NOT?: VesselRankRequirementWhereInput | VesselRankRequirementWhereInput[]
    vesselId?: StringFilter<"VesselRankRequirement"> | string
    role?: EnumVesselRoleFilter<"VesselRankRequirement"> | $Enums.VesselRole
    requiredCount?: IntFilter<"VesselRankRequirement"> | number
    createdAt?: DateTimeFilter<"VesselRankRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"VesselRankRequirement"> | Date | string
    vessel?: XOR<VesselScalarRelationFilter, VesselWhereInput>
  }, "id" | "vesselId_role">

  export type VesselRankRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    vesselId?: SortOrder
    role?: SortOrder
    requiredCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VesselRankRequirementCountOrderByAggregateInput
    _avg?: VesselRankRequirementAvgOrderByAggregateInput
    _max?: VesselRankRequirementMaxOrderByAggregateInput
    _min?: VesselRankRequirementMinOrderByAggregateInput
    _sum?: VesselRankRequirementSumOrderByAggregateInput
  }

  export type VesselRankRequirementScalarWhereWithAggregatesInput = {
    AND?: VesselRankRequirementScalarWhereWithAggregatesInput | VesselRankRequirementScalarWhereWithAggregatesInput[]
    OR?: VesselRankRequirementScalarWhereWithAggregatesInput[]
    NOT?: VesselRankRequirementScalarWhereWithAggregatesInput | VesselRankRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VesselRankRequirement"> | string
    vesselId?: StringWithAggregatesFilter<"VesselRankRequirement"> | string
    role?: EnumVesselRoleWithAggregatesFilter<"VesselRankRequirement"> | $Enums.VesselRole
    requiredCount?: IntWithAggregatesFilter<"VesselRankRequirement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VesselRankRequirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VesselRankRequirement"> | Date | string
  }

  export type VesselAssignmentWhereInput = {
    AND?: VesselAssignmentWhereInput | VesselAssignmentWhereInput[]
    OR?: VesselAssignmentWhereInput[]
    NOT?: VesselAssignmentWhereInput | VesselAssignmentWhereInput[]
    id?: StringFilter<"VesselAssignment"> | string
    vesselId?: StringFilter<"VesselAssignment"> | string
    crewId?: StringFilter<"VesselAssignment"> | string
    role?: EnumVesselRoleFilter<"VesselAssignment"> | $Enums.VesselRole
    assignedAt?: DateTimeFilter<"VesselAssignment"> | Date | string
    releasedAt?: DateTimeNullableFilter<"VesselAssignment"> | Date | string | null
    crew?: XOR<CrewScalarRelationFilter, CrewWhereInput>
    vessel?: XOR<VesselScalarRelationFilter, VesselWhereInput>
  }

  export type VesselAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    vesselId?: SortOrder
    crewId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    releasedAt?: SortOrderInput | SortOrder
    crew?: CrewOrderByWithRelationInput
    vessel?: VesselOrderByWithRelationInput
  }

  export type VesselAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vesselId_crewId_role?: VesselAssignmentVesselIdCrewIdRoleCompoundUniqueInput
    AND?: VesselAssignmentWhereInput | VesselAssignmentWhereInput[]
    OR?: VesselAssignmentWhereInput[]
    NOT?: VesselAssignmentWhereInput | VesselAssignmentWhereInput[]
    vesselId?: StringFilter<"VesselAssignment"> | string
    crewId?: StringFilter<"VesselAssignment"> | string
    role?: EnumVesselRoleFilter<"VesselAssignment"> | $Enums.VesselRole
    assignedAt?: DateTimeFilter<"VesselAssignment"> | Date | string
    releasedAt?: DateTimeNullableFilter<"VesselAssignment"> | Date | string | null
    crew?: XOR<CrewScalarRelationFilter, CrewWhereInput>
    vessel?: XOR<VesselScalarRelationFilter, VesselWhereInput>
  }, "id" | "vesselId_crewId_role">

  export type VesselAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    vesselId?: SortOrder
    crewId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    releasedAt?: SortOrderInput | SortOrder
    _count?: VesselAssignmentCountOrderByAggregateInput
    _max?: VesselAssignmentMaxOrderByAggregateInput
    _min?: VesselAssignmentMinOrderByAggregateInput
  }

  export type VesselAssignmentScalarWhereWithAggregatesInput = {
    AND?: VesselAssignmentScalarWhereWithAggregatesInput | VesselAssignmentScalarWhereWithAggregatesInput[]
    OR?: VesselAssignmentScalarWhereWithAggregatesInput[]
    NOT?: VesselAssignmentScalarWhereWithAggregatesInput | VesselAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VesselAssignment"> | string
    vesselId?: StringWithAggregatesFilter<"VesselAssignment"> | string
    crewId?: StringWithAggregatesFilter<"VesselAssignment"> | string
    role?: EnumVesselRoleWithAggregatesFilter<"VesselAssignment"> | $Enums.VesselRole
    assignedAt?: DateTimeWithAggregatesFilter<"VesselAssignment"> | Date | string
    releasedAt?: DateTimeNullableWithAggregatesFilter<"VesselAssignment"> | Date | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    crewId?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileName?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    issueDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    crew?: XOR<CrewScalarRelationFilter, CrewWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    crewId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    crew?: CrewOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    crewId?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileName?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    issueDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    crew?: XOR<CrewScalarRelationFilter, CrewWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    crewId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    crewId?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    fileName?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    issueDate?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type ConsultancyPartnerWhereInput = {
    AND?: ConsultancyPartnerWhereInput | ConsultancyPartnerWhereInput[]
    OR?: ConsultancyPartnerWhereInput[]
    NOT?: ConsultancyPartnerWhereInput | ConsultancyPartnerWhereInput[]
    id?: StringFilter<"ConsultancyPartner"> | string
    name?: StringFilter<"ConsultancyPartner"> | string
    category?: EnumConsultancyCategoryFilter<"ConsultancyPartner"> | $Enums.ConsultancyCategory
    contactEmail?: StringNullableFilter<"ConsultancyPartner"> | string | null
    approvedBy?: StringNullableFilter<"ConsultancyPartner"> | string | null
    createdAt?: DateTimeFilter<"ConsultancyPartner"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultancyPartner"> | Date | string
  }

  export type ConsultancyPartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultancyPartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultancyPartnerWhereInput | ConsultancyPartnerWhereInput[]
    OR?: ConsultancyPartnerWhereInput[]
    NOT?: ConsultancyPartnerWhereInput | ConsultancyPartnerWhereInput[]
    name?: StringFilter<"ConsultancyPartner"> | string
    category?: EnumConsultancyCategoryFilter<"ConsultancyPartner"> | $Enums.ConsultancyCategory
    contactEmail?: StringNullableFilter<"ConsultancyPartner"> | string | null
    approvedBy?: StringNullableFilter<"ConsultancyPartner"> | string | null
    createdAt?: DateTimeFilter<"ConsultancyPartner"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultancyPartner"> | Date | string
  }, "id">

  export type ConsultancyPartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultancyPartnerCountOrderByAggregateInput
    _max?: ConsultancyPartnerMaxOrderByAggregateInput
    _min?: ConsultancyPartnerMinOrderByAggregateInput
  }

  export type ConsultancyPartnerScalarWhereWithAggregatesInput = {
    AND?: ConsultancyPartnerScalarWhereWithAggregatesInput | ConsultancyPartnerScalarWhereWithAggregatesInput[]
    OR?: ConsultancyPartnerScalarWhereWithAggregatesInput[]
    NOT?: ConsultancyPartnerScalarWhereWithAggregatesInput | ConsultancyPartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultancyPartner"> | string
    name?: StringWithAggregatesFilter<"ConsultancyPartner"> | string
    category?: EnumConsultancyCategoryWithAggregatesFilter<"ConsultancyPartner"> | $Enums.ConsultancyCategory
    contactEmail?: StringNullableWithAggregatesFilter<"ConsultancyPartner"> | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"ConsultancyPartner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConsultancyPartner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConsultancyPartner"> | Date | string
  }

  export type TrainingPartnerWhereInput = {
    AND?: TrainingPartnerWhereInput | TrainingPartnerWhereInput[]
    OR?: TrainingPartnerWhereInput[]
    NOT?: TrainingPartnerWhereInput | TrainingPartnerWhereInput[]
    id?: StringFilter<"TrainingPartner"> | string
    name?: StringFilter<"TrainingPartner"> | string
    contactEmail?: StringNullableFilter<"TrainingPartner"> | string | null
    createdAt?: DateTimeFilter<"TrainingPartner"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPartner"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type TrainingPartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type TrainingPartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingPartnerWhereInput | TrainingPartnerWhereInput[]
    OR?: TrainingPartnerWhereInput[]
    NOT?: TrainingPartnerWhereInput | TrainingPartnerWhereInput[]
    name?: StringFilter<"TrainingPartner"> | string
    contactEmail?: StringNullableFilter<"TrainingPartner"> | string | null
    createdAt?: DateTimeFilter<"TrainingPartner"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPartner"> | Date | string
    courses?: CourseListRelationFilter
  }, "id">

  export type TrainingPartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainingPartnerCountOrderByAggregateInput
    _max?: TrainingPartnerMaxOrderByAggregateInput
    _min?: TrainingPartnerMinOrderByAggregateInput
  }

  export type TrainingPartnerScalarWhereWithAggregatesInput = {
    AND?: TrainingPartnerScalarWhereWithAggregatesInput | TrainingPartnerScalarWhereWithAggregatesInput[]
    OR?: TrainingPartnerScalarWhereWithAggregatesInput[]
    NOT?: TrainingPartnerScalarWhereWithAggregatesInput | TrainingPartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingPartner"> | string
    name?: StringWithAggregatesFilter<"TrainingPartner"> | string
    contactEmail?: StringNullableWithAggregatesFilter<"TrainingPartner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TrainingPartner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainingPartner"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    trainingType?: EnumTrainingTypeFilter<"Course"> | $Enums.TrainingType
    partnerId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    partner?: XOR<TrainingPartnerNullableScalarRelationFilter, TrainingPartnerWhereInput> | null
    TrainingRecord?: TrainingRecordListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    trainingType?: SortOrder
    partnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partner?: TrainingPartnerOrderByWithRelationInput
    TrainingRecord?: TrainingRecordOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    trainingType?: EnumTrainingTypeFilter<"Course"> | $Enums.TrainingType
    partnerId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    partner?: XOR<TrainingPartnerNullableScalarRelationFilter, TrainingPartnerWhereInput> | null
    TrainingRecord?: TrainingRecordListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    trainingType?: SortOrder
    partnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    trainingType?: EnumTrainingTypeWithAggregatesFilter<"Course"> | $Enums.TrainingType
    partnerId?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type TrainingRecordWhereInput = {
    AND?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    OR?: TrainingRecordWhereInput[]
    NOT?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    id?: StringFilter<"TrainingRecord"> | string
    crewId?: StringFilter<"TrainingRecord"> | string
    courseId?: StringFilter<"TrainingRecord"> | string
    dateTaken?: DateTimeFilter<"TrainingRecord"> | Date | string
    expiryDate?: DateTimeNullableFilter<"TrainingRecord"> | Date | string | null
    status?: StringFilter<"TrainingRecord"> | string
    createdAt?: DateTimeFilter<"TrainingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingRecord"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    crew?: XOR<CrewScalarRelationFilter, CrewWhereInput>
  }

  export type TrainingRecordOrderByWithRelationInput = {
    id?: SortOrder
    crewId?: SortOrder
    courseId?: SortOrder
    dateTaken?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    crew?: CrewOrderByWithRelationInput
  }

  export type TrainingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    OR?: TrainingRecordWhereInput[]
    NOT?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    crewId?: StringFilter<"TrainingRecord"> | string
    courseId?: StringFilter<"TrainingRecord"> | string
    dateTaken?: DateTimeFilter<"TrainingRecord"> | Date | string
    expiryDate?: DateTimeNullableFilter<"TrainingRecord"> | Date | string | null
    status?: StringFilter<"TrainingRecord"> | string
    createdAt?: DateTimeFilter<"TrainingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingRecord"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    crew?: XOR<CrewScalarRelationFilter, CrewWhereInput>
  }, "id">

  export type TrainingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    crewId?: SortOrder
    courseId?: SortOrder
    dateTaken?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainingRecordCountOrderByAggregateInput
    _max?: TrainingRecordMaxOrderByAggregateInput
    _min?: TrainingRecordMinOrderByAggregateInput
  }

  export type TrainingRecordScalarWhereWithAggregatesInput = {
    AND?: TrainingRecordScalarWhereWithAggregatesInput | TrainingRecordScalarWhereWithAggregatesInput[]
    OR?: TrainingRecordScalarWhereWithAggregatesInput[]
    NOT?: TrainingRecordScalarWhereWithAggregatesInput | TrainingRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingRecord"> | string
    crewId?: StringWithAggregatesFilter<"TrainingRecord"> | string
    courseId?: StringWithAggregatesFilter<"TrainingRecord"> | string
    dateTaken?: DateTimeWithAggregatesFilter<"TrainingRecord"> | Date | string
    expiryDate?: DateTimeNullableWithAggregatesFilter<"TrainingRecord"> | Date | string | null
    status?: StringWithAggregatesFilter<"TrainingRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrainingRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainingRecord"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    creator: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatorInput
    org: OrganizationCreateNestedOneWithoutUsersInput
    updater: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdaterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    createdBy: string
    updatedBy: string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneRequiredWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatorNestedInput
    org?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    createdBy: string
    updatedBy: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    actorId: string
    targetUserId?: string | null
    orgId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    actorId: string
    targetUserId?: string | null
    orgId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    actorId: string
    targetUserId?: string | null
    orgId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrewCreateInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: DocumentCreateNestedManyWithoutCrewInput
    TrainingRecord?: TrainingRecordCreateNestedManyWithoutCrewInput
    VesselAssignment?: VesselAssignmentCreateNestedManyWithoutCrewInput
  }

  export type CrewUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: DocumentUncheckedCreateNestedManyWithoutCrewInput
    TrainingRecord?: TrainingRecordUncheckedCreateNestedManyWithoutCrewInput
    VesselAssignment?: VesselAssignmentUncheckedCreateNestedManyWithoutCrewInput
  }

  export type CrewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: DocumentUpdateManyWithoutCrewNestedInput
    TrainingRecord?: TrainingRecordUpdateManyWithoutCrewNestedInput
    VesselAssignment?: VesselAssignmentUpdateManyWithoutCrewNestedInput
  }

  export type CrewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: DocumentUncheckedUpdateManyWithoutCrewNestedInput
    TrainingRecord?: TrainingRecordUncheckedUpdateManyWithoutCrewNestedInput
    VesselAssignment?: VesselAssignmentUncheckedUpdateManyWithoutCrewNestedInput
  }

  export type CrewCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselCreateInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
    VesselAssignment?: VesselAssignmentCreateNestedManyWithoutVesselInput
    rankRequirements?: VesselRankRequirementCreateNestedManyWithoutVesselInput
  }

  export type VesselUncheckedCreateInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
    VesselAssignment?: VesselAssignmentUncheckedCreateNestedManyWithoutVesselInput
    rankRequirements?: VesselRankRequirementUncheckedCreateNestedManyWithoutVesselInput
  }

  export type VesselUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    VesselAssignment?: VesselAssignmentUpdateManyWithoutVesselNestedInput
    rankRequirements?: VesselRankRequirementUpdateManyWithoutVesselNestedInput
  }

  export type VesselUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    VesselAssignment?: VesselAssignmentUncheckedUpdateManyWithoutVesselNestedInput
    rankRequirements?: VesselRankRequirementUncheckedUpdateManyWithoutVesselNestedInput
  }

  export type VesselCreateManyInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
  }

  export type VesselUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VesselUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VesselRankRequirementCreateInput = {
    id?: string
    role: $Enums.VesselRole
    requiredCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vessel: VesselCreateNestedOneWithoutRankRequirementsInput
  }

  export type VesselRankRequirementUncheckedCreateInput = {
    id?: string
    vesselId: string
    role: $Enums.VesselRole
    requiredCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselRankRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vessel?: VesselUpdateOneRequiredWithoutRankRequirementsNestedInput
  }

  export type VesselRankRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vesselId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselRankRequirementCreateManyInput = {
    id?: string
    vesselId: string
    role: $Enums.VesselRole
    requiredCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselRankRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselRankRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vesselId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselAssignmentCreateInput = {
    id?: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
    crew: CrewCreateNestedOneWithoutVesselAssignmentInput
    vessel: VesselCreateNestedOneWithoutVesselAssignmentInput
  }

  export type VesselAssignmentUncheckedCreateInput = {
    id?: string
    vesselId: string
    crewId: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
  }

  export type VesselAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crew?: CrewUpdateOneRequiredWithoutVesselAssignmentNestedInput
    vessel?: VesselUpdateOneRequiredWithoutVesselAssignmentNestedInput
  }

  export type VesselAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vesselId?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VesselAssignmentCreateManyInput = {
    id?: string
    vesselId: string
    crewId: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
  }

  export type VesselAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VesselAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vesselId?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateInput = {
    id?: string
    type?: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt?: Date | string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    crew: CrewCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    crewId: string
    type?: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt?: Date | string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crew?: CrewUpdateOneRequiredWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    crewId: string
    type?: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt?: Date | string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultancyPartnerCreateInput = {
    id?: string
    name: string
    category: $Enums.ConsultancyCategory
    contactEmail?: string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultancyPartnerUncheckedCreateInput = {
    id?: string
    name: string
    category: $Enums.ConsultancyCategory
    contactEmail?: string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultancyPartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumConsultancyCategoryFieldUpdateOperationsInput | $Enums.ConsultancyCategory
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultancyPartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumConsultancyCategoryFieldUpdateOperationsInput | $Enums.ConsultancyCategory
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultancyPartnerCreateManyInput = {
    id?: string
    name: string
    category: $Enums.ConsultancyCategory
    contactEmail?: string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultancyPartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumConsultancyCategoryFieldUpdateOperationsInput | $Enums.ConsultancyCategory
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultancyPartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumConsultancyCategoryFieldUpdateOperationsInput | $Enums.ConsultancyCategory
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPartnerCreateInput = {
    id?: string
    name: string
    contactEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutPartnerInput
  }

  export type TrainingPartnerUncheckedCreateInput = {
    id?: string
    name: string
    contactEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type TrainingPartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutPartnerNestedInput
  }

  export type TrainingPartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type TrainingPartnerCreateManyInput = {
    id?: string
    name: string
    contactEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    createdAt?: Date | string
    updatedAt?: Date | string
    partner?: TrainingPartnerCreateNestedOneWithoutCoursesInput
    TrainingRecord?: TrainingRecordCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingRecord?: TrainingRecordUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: TrainingPartnerUpdateOneWithoutCoursesNestedInput
    TrainingRecord?: TrainingRecordUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingRecord?: TrainingRecordUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordCreateInput = {
    id?: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTrainingRecordInput
    crew: CrewCreateNestedOneWithoutTrainingRecordInput
  }

  export type TrainingRecordUncheckedCreateInput = {
    id?: string
    crewId: string
    courseId: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTrainingRecordNestedInput
    crew?: CrewUpdateOneRequiredWithoutTrainingRecordNestedInput
  }

  export type TrainingRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordCreateManyInput = {
    id?: string
    crewId: string
    courseId: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserOrgIdEmailCompoundUniqueInput = {
    orgId: string
    email: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    orgId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type TrainingRecordListRelationFilter = {
    every?: TrainingRecordWhereInput
    some?: TrainingRecordWhereInput
    none?: TrainingRecordWhereInput
  }

  export type VesselAssignmentListRelationFilter = {
    every?: VesselAssignmentWhereInput
    some?: VesselAssignmentWhereInput
    none?: VesselAssignmentWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VesselAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrewCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    rank?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrewMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    rank?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrewMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    rank?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumVesselTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselType | EnumVesselTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVesselTypeNullableFilter<$PrismaModel> | $Enums.VesselType | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumEngineMakeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EngineMake | EnumEngineMakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEngineMakeNullableFilter<$PrismaModel> | $Enums.EngineMake | null
  }

  export type EnumTonnageUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TonnageUnit | EnumTonnageUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTonnageUnitNullableFilter<$PrismaModel> | $Enums.TonnageUnit | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VesselRankRequirementListRelationFilter = {
    every?: VesselRankRequirementWhereInput
    some?: VesselRankRequirementWhereInput
    none?: VesselRankRequirementWhereInput
  }

  export type VesselRankRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VesselImoNumberOrgIdCompoundUniqueInput = {
    imoNumber: string
    orgId: string
  }

  export type VesselCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    capacity?: SortOrder
    homePort?: SortOrder
    vesselType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bhpKw?: SortOrder
    companyName?: SortOrder
    dwt?: SortOrder
    flag?: SortOrder
    grt?: SortOrder
    tonnageValue?: SortOrder
    ums?: SortOrder
    yearBuilt?: SortOrder
    orgId?: SortOrder
    engineMake?: SortOrder
    tonnageUnit?: SortOrder
    callSign?: SortOrder
    contactEmail?: SortOrder
    contactPersonName?: SortOrder
    contactPhone?: SortOrder
    deletedAt?: SortOrder
    inspectionDueDate?: SortOrder
    isActive?: SortOrder
    lastInspectionDate?: SortOrder
    mmsi?: SortOrder
    safetyCertificateUrl?: SortOrder
  }

  export type VesselAvgOrderByAggregateInput = {
    capacity?: SortOrder
    bhpKw?: SortOrder
    dwt?: SortOrder
    grt?: SortOrder
    tonnageValue?: SortOrder
    yearBuilt?: SortOrder
  }

  export type VesselMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    capacity?: SortOrder
    homePort?: SortOrder
    vesselType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bhpKw?: SortOrder
    companyName?: SortOrder
    dwt?: SortOrder
    flag?: SortOrder
    grt?: SortOrder
    tonnageValue?: SortOrder
    ums?: SortOrder
    yearBuilt?: SortOrder
    orgId?: SortOrder
    engineMake?: SortOrder
    tonnageUnit?: SortOrder
    callSign?: SortOrder
    contactEmail?: SortOrder
    contactPersonName?: SortOrder
    contactPhone?: SortOrder
    deletedAt?: SortOrder
    inspectionDueDate?: SortOrder
    isActive?: SortOrder
    lastInspectionDate?: SortOrder
    mmsi?: SortOrder
    safetyCertificateUrl?: SortOrder
  }

  export type VesselMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imoNumber?: SortOrder
    capacity?: SortOrder
    homePort?: SortOrder
    vesselType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bhpKw?: SortOrder
    companyName?: SortOrder
    dwt?: SortOrder
    flag?: SortOrder
    grt?: SortOrder
    tonnageValue?: SortOrder
    ums?: SortOrder
    yearBuilt?: SortOrder
    orgId?: SortOrder
    engineMake?: SortOrder
    tonnageUnit?: SortOrder
    callSign?: SortOrder
    contactEmail?: SortOrder
    contactPersonName?: SortOrder
    contactPhone?: SortOrder
    deletedAt?: SortOrder
    inspectionDueDate?: SortOrder
    isActive?: SortOrder
    lastInspectionDate?: SortOrder
    mmsi?: SortOrder
    safetyCertificateUrl?: SortOrder
  }

  export type VesselSumOrderByAggregateInput = {
    capacity?: SortOrder
    bhpKw?: SortOrder
    dwt?: SortOrder
    grt?: SortOrder
    tonnageValue?: SortOrder
    yearBuilt?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumVesselTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselType | EnumVesselTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVesselTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VesselType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVesselTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumVesselTypeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumEngineMakeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EngineMake | EnumEngineMakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEngineMakeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EngineMake | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEngineMakeNullableFilter<$PrismaModel>
    _max?: NestedEnumEngineMakeNullableFilter<$PrismaModel>
  }

  export type EnumTonnageUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TonnageUnit | EnumTonnageUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTonnageUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.TonnageUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTonnageUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumTonnageUnitNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVesselRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselRole | EnumVesselRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumVesselRoleFilter<$PrismaModel> | $Enums.VesselRole
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VesselScalarRelationFilter = {
    is?: VesselWhereInput
    isNot?: VesselWhereInput
  }

  export type VesselRankRequirementVesselIdRoleCompoundUniqueInput = {
    vesselId: string
    role: $Enums.VesselRole
  }

  export type VesselRankRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    vesselId?: SortOrder
    role?: SortOrder
    requiredCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselRankRequirementAvgOrderByAggregateInput = {
    requiredCount?: SortOrder
  }

  export type VesselRankRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    vesselId?: SortOrder
    role?: SortOrder
    requiredCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselRankRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    vesselId?: SortOrder
    role?: SortOrder
    requiredCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselRankRequirementSumOrderByAggregateInput = {
    requiredCount?: SortOrder
  }

  export type EnumVesselRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselRole | EnumVesselRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumVesselRoleWithAggregatesFilter<$PrismaModel> | $Enums.VesselRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVesselRoleFilter<$PrismaModel>
    _max?: NestedEnumVesselRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CrewScalarRelationFilter = {
    is?: CrewWhereInput
    isNot?: CrewWhereInput
  }

  export type VesselAssignmentVesselIdCrewIdRoleCompoundUniqueInput = {
    vesselId: string
    crewId: string
    role: $Enums.VesselRole
  }

  export type VesselAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    vesselId?: SortOrder
    crewId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    releasedAt?: SortOrder
  }

  export type VesselAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    vesselId?: SortOrder
    crewId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    releasedAt?: SortOrder
  }

  export type VesselAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    vesselId?: SortOrder
    crewId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    releasedAt?: SortOrder
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    crewId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    crewId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    crewId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumConsultancyCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultancyCategory | EnumConsultancyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultancyCategoryFilter<$PrismaModel> | $Enums.ConsultancyCategory
  }

  export type ConsultancyPartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    contactEmail?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultancyPartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    contactEmail?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultancyPartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    contactEmail?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumConsultancyCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultancyCategory | EnumConsultancyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultancyCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ConsultancyCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultancyCategoryFilter<$PrismaModel>
    _max?: NestedEnumConsultancyCategoryFilter<$PrismaModel>
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingPartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTrainingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeFilter<$PrismaModel> | $Enums.TrainingType
  }

  export type TrainingPartnerNullableScalarRelationFilter = {
    is?: TrainingPartnerWhereInput | null
    isNot?: TrainingPartnerWhereInput | null
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    trainingType?: SortOrder
    partnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    trainingType?: SortOrder
    partnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    trainingType?: SortOrder
    partnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTrainingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrainingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingTypeFilter<$PrismaModel>
    _max?: NestedEnumTrainingTypeFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type TrainingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    crewId?: SortOrder
    courseId?: SortOrder
    dateTaken?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    crewId?: SortOrder
    courseId?: SortOrder
    dateTaken?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    crewId?: SortOrder
    courseId?: SortOrder
    dateTaken?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatorInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedUsersInput = {
    create?: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatorInput | UserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatorInput | UserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatorInput | UserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedUsersInput
    upsert?: UserUpsertWithoutUpdatedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedUsersInput, UserUpdateWithoutUpdatedUsersInput>, UserUncheckedUpdateWithoutUpdatedUsersInput>
  }

  export type UserUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpdaterInput | UserUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpdaterInput | UserUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpdaterInput | UserUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatorInput | UserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatorInput | UserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatorInput | UserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpdaterInput | UserUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpdaterInput | UserUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpdaterInput | UserUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DocumentCreateNestedManyWithoutCrewInput = {
    create?: XOR<DocumentCreateWithoutCrewInput, DocumentUncheckedCreateWithoutCrewInput> | DocumentCreateWithoutCrewInput[] | DocumentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCrewInput | DocumentCreateOrConnectWithoutCrewInput[]
    createMany?: DocumentCreateManyCrewInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TrainingRecordCreateNestedManyWithoutCrewInput = {
    create?: XOR<TrainingRecordCreateWithoutCrewInput, TrainingRecordUncheckedCreateWithoutCrewInput> | TrainingRecordCreateWithoutCrewInput[] | TrainingRecordUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCrewInput | TrainingRecordCreateOrConnectWithoutCrewInput[]
    createMany?: TrainingRecordCreateManyCrewInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type VesselAssignmentCreateNestedManyWithoutCrewInput = {
    create?: XOR<VesselAssignmentCreateWithoutCrewInput, VesselAssignmentUncheckedCreateWithoutCrewInput> | VesselAssignmentCreateWithoutCrewInput[] | VesselAssignmentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutCrewInput | VesselAssignmentCreateOrConnectWithoutCrewInput[]
    createMany?: VesselAssignmentCreateManyCrewInputEnvelope
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCrewInput = {
    create?: XOR<DocumentCreateWithoutCrewInput, DocumentUncheckedCreateWithoutCrewInput> | DocumentCreateWithoutCrewInput[] | DocumentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCrewInput | DocumentCreateOrConnectWithoutCrewInput[]
    createMany?: DocumentCreateManyCrewInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TrainingRecordUncheckedCreateNestedManyWithoutCrewInput = {
    create?: XOR<TrainingRecordCreateWithoutCrewInput, TrainingRecordUncheckedCreateWithoutCrewInput> | TrainingRecordCreateWithoutCrewInput[] | TrainingRecordUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCrewInput | TrainingRecordCreateOrConnectWithoutCrewInput[]
    createMany?: TrainingRecordCreateManyCrewInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type VesselAssignmentUncheckedCreateNestedManyWithoutCrewInput = {
    create?: XOR<VesselAssignmentCreateWithoutCrewInput, VesselAssignmentUncheckedCreateWithoutCrewInput> | VesselAssignmentCreateWithoutCrewInput[] | VesselAssignmentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutCrewInput | VesselAssignmentCreateOrConnectWithoutCrewInput[]
    createMany?: VesselAssignmentCreateManyCrewInputEnvelope
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
  }

  export type DocumentUpdateManyWithoutCrewNestedInput = {
    create?: XOR<DocumentCreateWithoutCrewInput, DocumentUncheckedCreateWithoutCrewInput> | DocumentCreateWithoutCrewInput[] | DocumentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCrewInput | DocumentCreateOrConnectWithoutCrewInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCrewInput | DocumentUpsertWithWhereUniqueWithoutCrewInput[]
    createMany?: DocumentCreateManyCrewInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCrewInput | DocumentUpdateWithWhereUniqueWithoutCrewInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCrewInput | DocumentUpdateManyWithWhereWithoutCrewInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TrainingRecordUpdateManyWithoutCrewNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutCrewInput, TrainingRecordUncheckedCreateWithoutCrewInput> | TrainingRecordCreateWithoutCrewInput[] | TrainingRecordUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCrewInput | TrainingRecordCreateOrConnectWithoutCrewInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutCrewInput | TrainingRecordUpsertWithWhereUniqueWithoutCrewInput[]
    createMany?: TrainingRecordCreateManyCrewInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutCrewInput | TrainingRecordUpdateWithWhereUniqueWithoutCrewInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutCrewInput | TrainingRecordUpdateManyWithWhereWithoutCrewInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type VesselAssignmentUpdateManyWithoutCrewNestedInput = {
    create?: XOR<VesselAssignmentCreateWithoutCrewInput, VesselAssignmentUncheckedCreateWithoutCrewInput> | VesselAssignmentCreateWithoutCrewInput[] | VesselAssignmentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutCrewInput | VesselAssignmentCreateOrConnectWithoutCrewInput[]
    upsert?: VesselAssignmentUpsertWithWhereUniqueWithoutCrewInput | VesselAssignmentUpsertWithWhereUniqueWithoutCrewInput[]
    createMany?: VesselAssignmentCreateManyCrewInputEnvelope
    set?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    disconnect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    delete?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    update?: VesselAssignmentUpdateWithWhereUniqueWithoutCrewInput | VesselAssignmentUpdateWithWhereUniqueWithoutCrewInput[]
    updateMany?: VesselAssignmentUpdateManyWithWhereWithoutCrewInput | VesselAssignmentUpdateManyWithWhereWithoutCrewInput[]
    deleteMany?: VesselAssignmentScalarWhereInput | VesselAssignmentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCrewNestedInput = {
    create?: XOR<DocumentCreateWithoutCrewInput, DocumentUncheckedCreateWithoutCrewInput> | DocumentCreateWithoutCrewInput[] | DocumentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCrewInput | DocumentCreateOrConnectWithoutCrewInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCrewInput | DocumentUpsertWithWhereUniqueWithoutCrewInput[]
    createMany?: DocumentCreateManyCrewInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCrewInput | DocumentUpdateWithWhereUniqueWithoutCrewInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCrewInput | DocumentUpdateManyWithWhereWithoutCrewInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TrainingRecordUncheckedUpdateManyWithoutCrewNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutCrewInput, TrainingRecordUncheckedCreateWithoutCrewInput> | TrainingRecordCreateWithoutCrewInput[] | TrainingRecordUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCrewInput | TrainingRecordCreateOrConnectWithoutCrewInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutCrewInput | TrainingRecordUpsertWithWhereUniqueWithoutCrewInput[]
    createMany?: TrainingRecordCreateManyCrewInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutCrewInput | TrainingRecordUpdateWithWhereUniqueWithoutCrewInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutCrewInput | TrainingRecordUpdateManyWithWhereWithoutCrewInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type VesselAssignmentUncheckedUpdateManyWithoutCrewNestedInput = {
    create?: XOR<VesselAssignmentCreateWithoutCrewInput, VesselAssignmentUncheckedCreateWithoutCrewInput> | VesselAssignmentCreateWithoutCrewInput[] | VesselAssignmentUncheckedCreateWithoutCrewInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutCrewInput | VesselAssignmentCreateOrConnectWithoutCrewInput[]
    upsert?: VesselAssignmentUpsertWithWhereUniqueWithoutCrewInput | VesselAssignmentUpsertWithWhereUniqueWithoutCrewInput[]
    createMany?: VesselAssignmentCreateManyCrewInputEnvelope
    set?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    disconnect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    delete?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    update?: VesselAssignmentUpdateWithWhereUniqueWithoutCrewInput | VesselAssignmentUpdateWithWhereUniqueWithoutCrewInput[]
    updateMany?: VesselAssignmentUpdateManyWithWhereWithoutCrewInput | VesselAssignmentUpdateManyWithWhereWithoutCrewInput[]
    deleteMany?: VesselAssignmentScalarWhereInput | VesselAssignmentScalarWhereInput[]
  }

  export type VesselAssignmentCreateNestedManyWithoutVesselInput = {
    create?: XOR<VesselAssignmentCreateWithoutVesselInput, VesselAssignmentUncheckedCreateWithoutVesselInput> | VesselAssignmentCreateWithoutVesselInput[] | VesselAssignmentUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutVesselInput | VesselAssignmentCreateOrConnectWithoutVesselInput[]
    createMany?: VesselAssignmentCreateManyVesselInputEnvelope
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
  }

  export type VesselRankRequirementCreateNestedManyWithoutVesselInput = {
    create?: XOR<VesselRankRequirementCreateWithoutVesselInput, VesselRankRequirementUncheckedCreateWithoutVesselInput> | VesselRankRequirementCreateWithoutVesselInput[] | VesselRankRequirementUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselRankRequirementCreateOrConnectWithoutVesselInput | VesselRankRequirementCreateOrConnectWithoutVesselInput[]
    createMany?: VesselRankRequirementCreateManyVesselInputEnvelope
    connect?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
  }

  export type VesselAssignmentUncheckedCreateNestedManyWithoutVesselInput = {
    create?: XOR<VesselAssignmentCreateWithoutVesselInput, VesselAssignmentUncheckedCreateWithoutVesselInput> | VesselAssignmentCreateWithoutVesselInput[] | VesselAssignmentUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutVesselInput | VesselAssignmentCreateOrConnectWithoutVesselInput[]
    createMany?: VesselAssignmentCreateManyVesselInputEnvelope
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
  }

  export type VesselRankRequirementUncheckedCreateNestedManyWithoutVesselInput = {
    create?: XOR<VesselRankRequirementCreateWithoutVesselInput, VesselRankRequirementUncheckedCreateWithoutVesselInput> | VesselRankRequirementCreateWithoutVesselInput[] | VesselRankRequirementUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselRankRequirementCreateOrConnectWithoutVesselInput | VesselRankRequirementCreateOrConnectWithoutVesselInput[]
    createMany?: VesselRankRequirementCreateManyVesselInputEnvelope
    connect?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumVesselTypeFieldUpdateOperationsInput = {
    set?: $Enums.VesselType | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumEngineMakeFieldUpdateOperationsInput = {
    set?: $Enums.EngineMake | null
  }

  export type NullableEnumTonnageUnitFieldUpdateOperationsInput = {
    set?: $Enums.TonnageUnit | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VesselAssignmentUpdateManyWithoutVesselNestedInput = {
    create?: XOR<VesselAssignmentCreateWithoutVesselInput, VesselAssignmentUncheckedCreateWithoutVesselInput> | VesselAssignmentCreateWithoutVesselInput[] | VesselAssignmentUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutVesselInput | VesselAssignmentCreateOrConnectWithoutVesselInput[]
    upsert?: VesselAssignmentUpsertWithWhereUniqueWithoutVesselInput | VesselAssignmentUpsertWithWhereUniqueWithoutVesselInput[]
    createMany?: VesselAssignmentCreateManyVesselInputEnvelope
    set?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    disconnect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    delete?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    update?: VesselAssignmentUpdateWithWhereUniqueWithoutVesselInput | VesselAssignmentUpdateWithWhereUniqueWithoutVesselInput[]
    updateMany?: VesselAssignmentUpdateManyWithWhereWithoutVesselInput | VesselAssignmentUpdateManyWithWhereWithoutVesselInput[]
    deleteMany?: VesselAssignmentScalarWhereInput | VesselAssignmentScalarWhereInput[]
  }

  export type VesselRankRequirementUpdateManyWithoutVesselNestedInput = {
    create?: XOR<VesselRankRequirementCreateWithoutVesselInput, VesselRankRequirementUncheckedCreateWithoutVesselInput> | VesselRankRequirementCreateWithoutVesselInput[] | VesselRankRequirementUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselRankRequirementCreateOrConnectWithoutVesselInput | VesselRankRequirementCreateOrConnectWithoutVesselInput[]
    upsert?: VesselRankRequirementUpsertWithWhereUniqueWithoutVesselInput | VesselRankRequirementUpsertWithWhereUniqueWithoutVesselInput[]
    createMany?: VesselRankRequirementCreateManyVesselInputEnvelope
    set?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    disconnect?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    delete?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    connect?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    update?: VesselRankRequirementUpdateWithWhereUniqueWithoutVesselInput | VesselRankRequirementUpdateWithWhereUniqueWithoutVesselInput[]
    updateMany?: VesselRankRequirementUpdateManyWithWhereWithoutVesselInput | VesselRankRequirementUpdateManyWithWhereWithoutVesselInput[]
    deleteMany?: VesselRankRequirementScalarWhereInput | VesselRankRequirementScalarWhereInput[]
  }

  export type VesselAssignmentUncheckedUpdateManyWithoutVesselNestedInput = {
    create?: XOR<VesselAssignmentCreateWithoutVesselInput, VesselAssignmentUncheckedCreateWithoutVesselInput> | VesselAssignmentCreateWithoutVesselInput[] | VesselAssignmentUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselAssignmentCreateOrConnectWithoutVesselInput | VesselAssignmentCreateOrConnectWithoutVesselInput[]
    upsert?: VesselAssignmentUpsertWithWhereUniqueWithoutVesselInput | VesselAssignmentUpsertWithWhereUniqueWithoutVesselInput[]
    createMany?: VesselAssignmentCreateManyVesselInputEnvelope
    set?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    disconnect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    delete?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    connect?: VesselAssignmentWhereUniqueInput | VesselAssignmentWhereUniqueInput[]
    update?: VesselAssignmentUpdateWithWhereUniqueWithoutVesselInput | VesselAssignmentUpdateWithWhereUniqueWithoutVesselInput[]
    updateMany?: VesselAssignmentUpdateManyWithWhereWithoutVesselInput | VesselAssignmentUpdateManyWithWhereWithoutVesselInput[]
    deleteMany?: VesselAssignmentScalarWhereInput | VesselAssignmentScalarWhereInput[]
  }

  export type VesselRankRequirementUncheckedUpdateManyWithoutVesselNestedInput = {
    create?: XOR<VesselRankRequirementCreateWithoutVesselInput, VesselRankRequirementUncheckedCreateWithoutVesselInput> | VesselRankRequirementCreateWithoutVesselInput[] | VesselRankRequirementUncheckedCreateWithoutVesselInput[]
    connectOrCreate?: VesselRankRequirementCreateOrConnectWithoutVesselInput | VesselRankRequirementCreateOrConnectWithoutVesselInput[]
    upsert?: VesselRankRequirementUpsertWithWhereUniqueWithoutVesselInput | VesselRankRequirementUpsertWithWhereUniqueWithoutVesselInput[]
    createMany?: VesselRankRequirementCreateManyVesselInputEnvelope
    set?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    disconnect?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    delete?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    connect?: VesselRankRequirementWhereUniqueInput | VesselRankRequirementWhereUniqueInput[]
    update?: VesselRankRequirementUpdateWithWhereUniqueWithoutVesselInput | VesselRankRequirementUpdateWithWhereUniqueWithoutVesselInput[]
    updateMany?: VesselRankRequirementUpdateManyWithWhereWithoutVesselInput | VesselRankRequirementUpdateManyWithWhereWithoutVesselInput[]
    deleteMany?: VesselRankRequirementScalarWhereInput | VesselRankRequirementScalarWhereInput[]
  }

  export type VesselCreateNestedOneWithoutRankRequirementsInput = {
    create?: XOR<VesselCreateWithoutRankRequirementsInput, VesselUncheckedCreateWithoutRankRequirementsInput>
    connectOrCreate?: VesselCreateOrConnectWithoutRankRequirementsInput
    connect?: VesselWhereUniqueInput
  }

  export type EnumVesselRoleFieldUpdateOperationsInput = {
    set?: $Enums.VesselRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VesselUpdateOneRequiredWithoutRankRequirementsNestedInput = {
    create?: XOR<VesselCreateWithoutRankRequirementsInput, VesselUncheckedCreateWithoutRankRequirementsInput>
    connectOrCreate?: VesselCreateOrConnectWithoutRankRequirementsInput
    upsert?: VesselUpsertWithoutRankRequirementsInput
    connect?: VesselWhereUniqueInput
    update?: XOR<XOR<VesselUpdateToOneWithWhereWithoutRankRequirementsInput, VesselUpdateWithoutRankRequirementsInput>, VesselUncheckedUpdateWithoutRankRequirementsInput>
  }

  export type CrewCreateNestedOneWithoutVesselAssignmentInput = {
    create?: XOR<CrewCreateWithoutVesselAssignmentInput, CrewUncheckedCreateWithoutVesselAssignmentInput>
    connectOrCreate?: CrewCreateOrConnectWithoutVesselAssignmentInput
    connect?: CrewWhereUniqueInput
  }

  export type VesselCreateNestedOneWithoutVesselAssignmentInput = {
    create?: XOR<VesselCreateWithoutVesselAssignmentInput, VesselUncheckedCreateWithoutVesselAssignmentInput>
    connectOrCreate?: VesselCreateOrConnectWithoutVesselAssignmentInput
    connect?: VesselWhereUniqueInput
  }

  export type CrewUpdateOneRequiredWithoutVesselAssignmentNestedInput = {
    create?: XOR<CrewCreateWithoutVesselAssignmentInput, CrewUncheckedCreateWithoutVesselAssignmentInput>
    connectOrCreate?: CrewCreateOrConnectWithoutVesselAssignmentInput
    upsert?: CrewUpsertWithoutVesselAssignmentInput
    connect?: CrewWhereUniqueInput
    update?: XOR<XOR<CrewUpdateToOneWithWhereWithoutVesselAssignmentInput, CrewUpdateWithoutVesselAssignmentInput>, CrewUncheckedUpdateWithoutVesselAssignmentInput>
  }

  export type VesselUpdateOneRequiredWithoutVesselAssignmentNestedInput = {
    create?: XOR<VesselCreateWithoutVesselAssignmentInput, VesselUncheckedCreateWithoutVesselAssignmentInput>
    connectOrCreate?: VesselCreateOrConnectWithoutVesselAssignmentInput
    upsert?: VesselUpsertWithoutVesselAssignmentInput
    connect?: VesselWhereUniqueInput
    update?: XOR<XOR<VesselUpdateToOneWithWhereWithoutVesselAssignmentInput, VesselUpdateWithoutVesselAssignmentInput>, VesselUncheckedUpdateWithoutVesselAssignmentInput>
  }

  export type CrewCreateNestedOneWithoutDocumentInput = {
    create?: XOR<CrewCreateWithoutDocumentInput, CrewUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CrewCreateOrConnectWithoutDocumentInput
    connect?: CrewWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type CrewUpdateOneRequiredWithoutDocumentNestedInput = {
    create?: XOR<CrewCreateWithoutDocumentInput, CrewUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CrewCreateOrConnectWithoutDocumentInput
    upsert?: CrewUpsertWithoutDocumentInput
    connect?: CrewWhereUniqueInput
    update?: XOR<XOR<CrewUpdateToOneWithWhereWithoutDocumentInput, CrewUpdateWithoutDocumentInput>, CrewUncheckedUpdateWithoutDocumentInput>
  }

  export type EnumConsultancyCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ConsultancyCategory
  }

  export type CourseCreateNestedManyWithoutPartnerInput = {
    create?: XOR<CourseCreateWithoutPartnerInput, CourseUncheckedCreateWithoutPartnerInput> | CourseCreateWithoutPartnerInput[] | CourseUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPartnerInput | CourseCreateOrConnectWithoutPartnerInput[]
    createMany?: CourseCreateManyPartnerInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<CourseCreateWithoutPartnerInput, CourseUncheckedCreateWithoutPartnerInput> | CourseCreateWithoutPartnerInput[] | CourseUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPartnerInput | CourseCreateOrConnectWithoutPartnerInput[]
    createMany?: CourseCreateManyPartnerInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<CourseCreateWithoutPartnerInput, CourseUncheckedCreateWithoutPartnerInput> | CourseCreateWithoutPartnerInput[] | CourseUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPartnerInput | CourseCreateOrConnectWithoutPartnerInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutPartnerInput | CourseUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: CourseCreateManyPartnerInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutPartnerInput | CourseUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutPartnerInput | CourseUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<CourseCreateWithoutPartnerInput, CourseUncheckedCreateWithoutPartnerInput> | CourseCreateWithoutPartnerInput[] | CourseUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPartnerInput | CourseCreateOrConnectWithoutPartnerInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutPartnerInput | CourseUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: CourseCreateManyPartnerInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutPartnerInput | CourseUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutPartnerInput | CourseUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TrainingPartnerCreateNestedOneWithoutCoursesInput = {
    create?: XOR<TrainingPartnerCreateWithoutCoursesInput, TrainingPartnerUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TrainingPartnerCreateOrConnectWithoutCoursesInput
    connect?: TrainingPartnerWhereUniqueInput
  }

  export type TrainingRecordCreateNestedManyWithoutCourseInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type TrainingRecordUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type EnumTrainingTypeFieldUpdateOperationsInput = {
    set?: $Enums.TrainingType
  }

  export type TrainingPartnerUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<TrainingPartnerCreateWithoutCoursesInput, TrainingPartnerUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TrainingPartnerCreateOrConnectWithoutCoursesInput
    upsert?: TrainingPartnerUpsertWithoutCoursesInput
    disconnect?: TrainingPartnerWhereInput | boolean
    delete?: TrainingPartnerWhereInput | boolean
    connect?: TrainingPartnerWhereUniqueInput
    update?: XOR<XOR<TrainingPartnerUpdateToOneWithWhereWithoutCoursesInput, TrainingPartnerUpdateWithoutCoursesInput>, TrainingPartnerUncheckedUpdateWithoutCoursesInput>
  }

  export type TrainingRecordUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutCourseInput | TrainingRecordUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutCourseInput | TrainingRecordUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutCourseInput | TrainingRecordUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type TrainingRecordUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutCourseInput | TrainingRecordUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutCourseInput | TrainingRecordUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutCourseInput | TrainingRecordUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutTrainingRecordInput = {
    create?: XOR<CourseCreateWithoutTrainingRecordInput, CourseUncheckedCreateWithoutTrainingRecordInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTrainingRecordInput
    connect?: CourseWhereUniqueInput
  }

  export type CrewCreateNestedOneWithoutTrainingRecordInput = {
    create?: XOR<CrewCreateWithoutTrainingRecordInput, CrewUncheckedCreateWithoutTrainingRecordInput>
    connectOrCreate?: CrewCreateOrConnectWithoutTrainingRecordInput
    connect?: CrewWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutTrainingRecordNestedInput = {
    create?: XOR<CourseCreateWithoutTrainingRecordInput, CourseUncheckedCreateWithoutTrainingRecordInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTrainingRecordInput
    upsert?: CourseUpsertWithoutTrainingRecordInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTrainingRecordInput, CourseUpdateWithoutTrainingRecordInput>, CourseUncheckedUpdateWithoutTrainingRecordInput>
  }

  export type CrewUpdateOneRequiredWithoutTrainingRecordNestedInput = {
    create?: XOR<CrewCreateWithoutTrainingRecordInput, CrewUncheckedCreateWithoutTrainingRecordInput>
    connectOrCreate?: CrewCreateOrConnectWithoutTrainingRecordInput
    upsert?: CrewUpsertWithoutTrainingRecordInput
    connect?: CrewWhereUniqueInput
    update?: XOR<XOR<CrewUpdateToOneWithWhereWithoutTrainingRecordInput, CrewUpdateWithoutTrainingRecordInput>, CrewUncheckedUpdateWithoutTrainingRecordInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumVesselTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselType | EnumVesselTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVesselTypeNullableFilter<$PrismaModel> | $Enums.VesselType | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumEngineMakeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EngineMake | EnumEngineMakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEngineMakeNullableFilter<$PrismaModel> | $Enums.EngineMake | null
  }

  export type NestedEnumTonnageUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TonnageUnit | EnumTonnageUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTonnageUnitNullableFilter<$PrismaModel> | $Enums.TonnageUnit | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumVesselTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselType | EnumVesselTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VesselType[] | ListEnumVesselTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVesselTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VesselType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVesselTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumVesselTypeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumEngineMakeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EngineMake | EnumEngineMakeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EngineMake[] | ListEnumEngineMakeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEngineMakeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EngineMake | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEngineMakeNullableFilter<$PrismaModel>
    _max?: NestedEnumEngineMakeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTonnageUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TonnageUnit | EnumTonnageUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TonnageUnit[] | ListEnumTonnageUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTonnageUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.TonnageUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTonnageUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumTonnageUnitNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVesselRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselRole | EnumVesselRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumVesselRoleFilter<$PrismaModel> | $Enums.VesselRole
  }

  export type NestedEnumVesselRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VesselRole | EnumVesselRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.VesselRole[] | ListEnumVesselRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumVesselRoleWithAggregatesFilter<$PrismaModel> | $Enums.VesselRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVesselRoleFilter<$PrismaModel>
    _max?: NestedEnumVesselRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumConsultancyCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultancyCategory | EnumConsultancyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultancyCategoryFilter<$PrismaModel> | $Enums.ConsultancyCategory
  }

  export type NestedEnumConsultancyCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultancyCategory | EnumConsultancyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultancyCategory[] | ListEnumConsultancyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultancyCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ConsultancyCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultancyCategoryFilter<$PrismaModel>
    _max?: NestedEnumConsultancyCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTrainingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeFilter<$PrismaModel> | $Enums.TrainingType
  }

  export type NestedEnumTrainingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrainingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingTypeFilter<$PrismaModel>
    _max?: NestedEnumTrainingTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrgInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    creator: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatorInput
    updater: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdaterInput
  }

  export type UserUncheckedCreateWithoutOrgInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    createdBy: string
    updatedBy: string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type UserCreateOrConnectWithoutOrgInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserCreateManyOrgInputEnvelope = {
    data: UserCreateManyOrgInput | UserCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
  }

  export type UserUpdateManyWithWhereWithoutOrgInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrgInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orgId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdBy?: StringFilter<"User"> | string
    updatedBy?: StringFilter<"User"> | string
  }

  export type UserCreateWithoutCreatedUsersInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    creator: UserCreateNestedOneWithoutCreatedUsersInput
    org: OrganizationCreateNestedOneWithoutUsersInput
    updater: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdaterInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    createdBy: string
    updatedBy: string
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatorInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    createdUsers?: UserCreateNestedManyWithoutCreatorInput
    org: OrganizationCreateNestedOneWithoutUsersInput
    updater: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdaterInput
  }

  export type UserUncheckedCreateWithoutCreatorInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    updatedBy: string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type UserCreateOrConnectWithoutCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput>
  }

  export type UserCreateManyCreatorInputEnvelope = {
    data: UserCreateManyCreatorInput | UserCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutUpdatedUsersInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    creator: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatorInput
    org: OrganizationCreateNestedOneWithoutUsersInput
    updater: UserCreateNestedOneWithoutUpdatedUsersInput
  }

  export type UserUncheckedCreateWithoutUpdatedUsersInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    createdBy: string
    updatedBy: string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUpdatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
  }

  export type UserCreateWithoutUpdaterInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    creator: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatorInput
    org: OrganizationCreateNestedOneWithoutUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdaterInput
  }

  export type UserUncheckedCreateWithoutUpdaterInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    createdBy: string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type UserCreateOrConnectWithoutUpdaterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput>
  }

  export type UserCreateManyUpdaterInputEnvelope = {
    data: UserCreateManyUpdaterInput | UserCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneRequiredWithoutCreatedUsersNestedInput
    org?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatorInput, UserUncheckedUpdateWithoutCreatorInput>
    create: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatorInput, UserUncheckedUpdateWithoutCreatorInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatorInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutUpdatedUsersInput = {
    update: XOR<UserUpdateWithoutUpdatedUsersInput, UserUncheckedUpdateWithoutUpdatedUsersInput>
    create: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedUsersInput, UserUncheckedUpdateWithoutUpdatedUsersInput>
  }

  export type UserUpdateWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneRequiredWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatorNestedInput
    org?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUpdaterInput, UserUncheckedUpdateWithoutUpdaterInput>
    create: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUpdaterInput, UserUncheckedUpdateWithoutUpdaterInput>
  }

  export type UserUpdateManyWithWhereWithoutUpdaterInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type DocumentCreateWithoutCrewInput = {
    id?: string
    type?: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt?: Date | string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutCrewInput = {
    id?: string
    type?: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt?: Date | string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutCrewInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCrewInput, DocumentUncheckedCreateWithoutCrewInput>
  }

  export type DocumentCreateManyCrewInputEnvelope = {
    data: DocumentCreateManyCrewInput | DocumentCreateManyCrewInput[]
    skipDuplicates?: boolean
  }

  export type TrainingRecordCreateWithoutCrewInput = {
    id?: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTrainingRecordInput
  }

  export type TrainingRecordUncheckedCreateWithoutCrewInput = {
    id?: string
    courseId: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRecordCreateOrConnectWithoutCrewInput = {
    where: TrainingRecordWhereUniqueInput
    create: XOR<TrainingRecordCreateWithoutCrewInput, TrainingRecordUncheckedCreateWithoutCrewInput>
  }

  export type TrainingRecordCreateManyCrewInputEnvelope = {
    data: TrainingRecordCreateManyCrewInput | TrainingRecordCreateManyCrewInput[]
    skipDuplicates?: boolean
  }

  export type VesselAssignmentCreateWithoutCrewInput = {
    id?: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
    vessel: VesselCreateNestedOneWithoutVesselAssignmentInput
  }

  export type VesselAssignmentUncheckedCreateWithoutCrewInput = {
    id?: string
    vesselId: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
  }

  export type VesselAssignmentCreateOrConnectWithoutCrewInput = {
    where: VesselAssignmentWhereUniqueInput
    create: XOR<VesselAssignmentCreateWithoutCrewInput, VesselAssignmentUncheckedCreateWithoutCrewInput>
  }

  export type VesselAssignmentCreateManyCrewInputEnvelope = {
    data: VesselAssignmentCreateManyCrewInput | VesselAssignmentCreateManyCrewInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithWhereUniqueWithoutCrewInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCrewInput, DocumentUncheckedUpdateWithoutCrewInput>
    create: XOR<DocumentCreateWithoutCrewInput, DocumentUncheckedCreateWithoutCrewInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCrewInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCrewInput, DocumentUncheckedUpdateWithoutCrewInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCrewInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCrewInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    crewId?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileName?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    issueDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type TrainingRecordUpsertWithWhereUniqueWithoutCrewInput = {
    where: TrainingRecordWhereUniqueInput
    update: XOR<TrainingRecordUpdateWithoutCrewInput, TrainingRecordUncheckedUpdateWithoutCrewInput>
    create: XOR<TrainingRecordCreateWithoutCrewInput, TrainingRecordUncheckedCreateWithoutCrewInput>
  }

  export type TrainingRecordUpdateWithWhereUniqueWithoutCrewInput = {
    where: TrainingRecordWhereUniqueInput
    data: XOR<TrainingRecordUpdateWithoutCrewInput, TrainingRecordUncheckedUpdateWithoutCrewInput>
  }

  export type TrainingRecordUpdateManyWithWhereWithoutCrewInput = {
    where: TrainingRecordScalarWhereInput
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyWithoutCrewInput>
  }

  export type TrainingRecordScalarWhereInput = {
    AND?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
    OR?: TrainingRecordScalarWhereInput[]
    NOT?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
    id?: StringFilter<"TrainingRecord"> | string
    crewId?: StringFilter<"TrainingRecord"> | string
    courseId?: StringFilter<"TrainingRecord"> | string
    dateTaken?: DateTimeFilter<"TrainingRecord"> | Date | string
    expiryDate?: DateTimeNullableFilter<"TrainingRecord"> | Date | string | null
    status?: StringFilter<"TrainingRecord"> | string
    createdAt?: DateTimeFilter<"TrainingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingRecord"> | Date | string
  }

  export type VesselAssignmentUpsertWithWhereUniqueWithoutCrewInput = {
    where: VesselAssignmentWhereUniqueInput
    update: XOR<VesselAssignmentUpdateWithoutCrewInput, VesselAssignmentUncheckedUpdateWithoutCrewInput>
    create: XOR<VesselAssignmentCreateWithoutCrewInput, VesselAssignmentUncheckedCreateWithoutCrewInput>
  }

  export type VesselAssignmentUpdateWithWhereUniqueWithoutCrewInput = {
    where: VesselAssignmentWhereUniqueInput
    data: XOR<VesselAssignmentUpdateWithoutCrewInput, VesselAssignmentUncheckedUpdateWithoutCrewInput>
  }

  export type VesselAssignmentUpdateManyWithWhereWithoutCrewInput = {
    where: VesselAssignmentScalarWhereInput
    data: XOR<VesselAssignmentUpdateManyMutationInput, VesselAssignmentUncheckedUpdateManyWithoutCrewInput>
  }

  export type VesselAssignmentScalarWhereInput = {
    AND?: VesselAssignmentScalarWhereInput | VesselAssignmentScalarWhereInput[]
    OR?: VesselAssignmentScalarWhereInput[]
    NOT?: VesselAssignmentScalarWhereInput | VesselAssignmentScalarWhereInput[]
    id?: StringFilter<"VesselAssignment"> | string
    vesselId?: StringFilter<"VesselAssignment"> | string
    crewId?: StringFilter<"VesselAssignment"> | string
    role?: EnumVesselRoleFilter<"VesselAssignment"> | $Enums.VesselRole
    assignedAt?: DateTimeFilter<"VesselAssignment"> | Date | string
    releasedAt?: DateTimeNullableFilter<"VesselAssignment"> | Date | string | null
  }

  export type VesselAssignmentCreateWithoutVesselInput = {
    id?: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
    crew: CrewCreateNestedOneWithoutVesselAssignmentInput
  }

  export type VesselAssignmentUncheckedCreateWithoutVesselInput = {
    id?: string
    crewId: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
  }

  export type VesselAssignmentCreateOrConnectWithoutVesselInput = {
    where: VesselAssignmentWhereUniqueInput
    create: XOR<VesselAssignmentCreateWithoutVesselInput, VesselAssignmentUncheckedCreateWithoutVesselInput>
  }

  export type VesselAssignmentCreateManyVesselInputEnvelope = {
    data: VesselAssignmentCreateManyVesselInput | VesselAssignmentCreateManyVesselInput[]
    skipDuplicates?: boolean
  }

  export type VesselRankRequirementCreateWithoutVesselInput = {
    id?: string
    role: $Enums.VesselRole
    requiredCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselRankRequirementUncheckedCreateWithoutVesselInput = {
    id?: string
    role: $Enums.VesselRole
    requiredCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselRankRequirementCreateOrConnectWithoutVesselInput = {
    where: VesselRankRequirementWhereUniqueInput
    create: XOR<VesselRankRequirementCreateWithoutVesselInput, VesselRankRequirementUncheckedCreateWithoutVesselInput>
  }

  export type VesselRankRequirementCreateManyVesselInputEnvelope = {
    data: VesselRankRequirementCreateManyVesselInput | VesselRankRequirementCreateManyVesselInput[]
    skipDuplicates?: boolean
  }

  export type VesselAssignmentUpsertWithWhereUniqueWithoutVesselInput = {
    where: VesselAssignmentWhereUniqueInput
    update: XOR<VesselAssignmentUpdateWithoutVesselInput, VesselAssignmentUncheckedUpdateWithoutVesselInput>
    create: XOR<VesselAssignmentCreateWithoutVesselInput, VesselAssignmentUncheckedCreateWithoutVesselInput>
  }

  export type VesselAssignmentUpdateWithWhereUniqueWithoutVesselInput = {
    where: VesselAssignmentWhereUniqueInput
    data: XOR<VesselAssignmentUpdateWithoutVesselInput, VesselAssignmentUncheckedUpdateWithoutVesselInput>
  }

  export type VesselAssignmentUpdateManyWithWhereWithoutVesselInput = {
    where: VesselAssignmentScalarWhereInput
    data: XOR<VesselAssignmentUpdateManyMutationInput, VesselAssignmentUncheckedUpdateManyWithoutVesselInput>
  }

  export type VesselRankRequirementUpsertWithWhereUniqueWithoutVesselInput = {
    where: VesselRankRequirementWhereUniqueInput
    update: XOR<VesselRankRequirementUpdateWithoutVesselInput, VesselRankRequirementUncheckedUpdateWithoutVesselInput>
    create: XOR<VesselRankRequirementCreateWithoutVesselInput, VesselRankRequirementUncheckedCreateWithoutVesselInput>
  }

  export type VesselRankRequirementUpdateWithWhereUniqueWithoutVesselInput = {
    where: VesselRankRequirementWhereUniqueInput
    data: XOR<VesselRankRequirementUpdateWithoutVesselInput, VesselRankRequirementUncheckedUpdateWithoutVesselInput>
  }

  export type VesselRankRequirementUpdateManyWithWhereWithoutVesselInput = {
    where: VesselRankRequirementScalarWhereInput
    data: XOR<VesselRankRequirementUpdateManyMutationInput, VesselRankRequirementUncheckedUpdateManyWithoutVesselInput>
  }

  export type VesselRankRequirementScalarWhereInput = {
    AND?: VesselRankRequirementScalarWhereInput | VesselRankRequirementScalarWhereInput[]
    OR?: VesselRankRequirementScalarWhereInput[]
    NOT?: VesselRankRequirementScalarWhereInput | VesselRankRequirementScalarWhereInput[]
    id?: StringFilter<"VesselRankRequirement"> | string
    vesselId?: StringFilter<"VesselRankRequirement"> | string
    role?: EnumVesselRoleFilter<"VesselRankRequirement"> | $Enums.VesselRole
    requiredCount?: IntFilter<"VesselRankRequirement"> | number
    createdAt?: DateTimeFilter<"VesselRankRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"VesselRankRequirement"> | Date | string
  }

  export type VesselCreateWithoutRankRequirementsInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
    VesselAssignment?: VesselAssignmentCreateNestedManyWithoutVesselInput
  }

  export type VesselUncheckedCreateWithoutRankRequirementsInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
    VesselAssignment?: VesselAssignmentUncheckedCreateNestedManyWithoutVesselInput
  }

  export type VesselCreateOrConnectWithoutRankRequirementsInput = {
    where: VesselWhereUniqueInput
    create: XOR<VesselCreateWithoutRankRequirementsInput, VesselUncheckedCreateWithoutRankRequirementsInput>
  }

  export type VesselUpsertWithoutRankRequirementsInput = {
    update: XOR<VesselUpdateWithoutRankRequirementsInput, VesselUncheckedUpdateWithoutRankRequirementsInput>
    create: XOR<VesselCreateWithoutRankRequirementsInput, VesselUncheckedCreateWithoutRankRequirementsInput>
    where?: VesselWhereInput
  }

  export type VesselUpdateToOneWithWhereWithoutRankRequirementsInput = {
    where?: VesselWhereInput
    data: XOR<VesselUpdateWithoutRankRequirementsInput, VesselUncheckedUpdateWithoutRankRequirementsInput>
  }

  export type VesselUpdateWithoutRankRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    VesselAssignment?: VesselAssignmentUpdateManyWithoutVesselNestedInput
  }

  export type VesselUncheckedUpdateWithoutRankRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    VesselAssignment?: VesselAssignmentUncheckedUpdateManyWithoutVesselNestedInput
  }

  export type CrewCreateWithoutVesselAssignmentInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: DocumentCreateNestedManyWithoutCrewInput
    TrainingRecord?: TrainingRecordCreateNestedManyWithoutCrewInput
  }

  export type CrewUncheckedCreateWithoutVesselAssignmentInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: DocumentUncheckedCreateNestedManyWithoutCrewInput
    TrainingRecord?: TrainingRecordUncheckedCreateNestedManyWithoutCrewInput
  }

  export type CrewCreateOrConnectWithoutVesselAssignmentInput = {
    where: CrewWhereUniqueInput
    create: XOR<CrewCreateWithoutVesselAssignmentInput, CrewUncheckedCreateWithoutVesselAssignmentInput>
  }

  export type VesselCreateWithoutVesselAssignmentInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
    rankRequirements?: VesselRankRequirementCreateNestedManyWithoutVesselInput
  }

  export type VesselUncheckedCreateWithoutVesselAssignmentInput = {
    id?: string
    name: string
    imoNumber: string
    capacity?: number | null
    homePort?: string | null
    vesselType?: $Enums.VesselType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bhpKw?: number | null
    companyName?: string | null
    dwt?: number | null
    flag?: string | null
    grt?: number | null
    tonnageValue?: number | null
    ums?: boolean | null
    yearBuilt?: number | null
    orgId: string
    engineMake?: $Enums.EngineMake | null
    tonnageUnit?: $Enums.TonnageUnit | null
    callSign?: string | null
    contactEmail?: string | null
    contactPersonName?: string | null
    contactPhone?: string | null
    deletedAt?: Date | string | null
    inspectionDueDate?: Date | string | null
    isActive?: boolean
    lastInspectionDate?: Date | string | null
    mmsi?: string | null
    safetyCertificateUrl?: string | null
    rankRequirements?: VesselRankRequirementUncheckedCreateNestedManyWithoutVesselInput
  }

  export type VesselCreateOrConnectWithoutVesselAssignmentInput = {
    where: VesselWhereUniqueInput
    create: XOR<VesselCreateWithoutVesselAssignmentInput, VesselUncheckedCreateWithoutVesselAssignmentInput>
  }

  export type CrewUpsertWithoutVesselAssignmentInput = {
    update: XOR<CrewUpdateWithoutVesselAssignmentInput, CrewUncheckedUpdateWithoutVesselAssignmentInput>
    create: XOR<CrewCreateWithoutVesselAssignmentInput, CrewUncheckedCreateWithoutVesselAssignmentInput>
    where?: CrewWhereInput
  }

  export type CrewUpdateToOneWithWhereWithoutVesselAssignmentInput = {
    where?: CrewWhereInput
    data: XOR<CrewUpdateWithoutVesselAssignmentInput, CrewUncheckedUpdateWithoutVesselAssignmentInput>
  }

  export type CrewUpdateWithoutVesselAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: DocumentUpdateManyWithoutCrewNestedInput
    TrainingRecord?: TrainingRecordUpdateManyWithoutCrewNestedInput
  }

  export type CrewUncheckedUpdateWithoutVesselAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: DocumentUncheckedUpdateManyWithoutCrewNestedInput
    TrainingRecord?: TrainingRecordUncheckedUpdateManyWithoutCrewNestedInput
  }

  export type VesselUpsertWithoutVesselAssignmentInput = {
    update: XOR<VesselUpdateWithoutVesselAssignmentInput, VesselUncheckedUpdateWithoutVesselAssignmentInput>
    create: XOR<VesselCreateWithoutVesselAssignmentInput, VesselUncheckedCreateWithoutVesselAssignmentInput>
    where?: VesselWhereInput
  }

  export type VesselUpdateToOneWithWhereWithoutVesselAssignmentInput = {
    where?: VesselWhereInput
    data: XOR<VesselUpdateWithoutVesselAssignmentInput, VesselUncheckedUpdateWithoutVesselAssignmentInput>
  }

  export type VesselUpdateWithoutVesselAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rankRequirements?: VesselRankRequirementUpdateManyWithoutVesselNestedInput
  }

  export type VesselUncheckedUpdateWithoutVesselAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    homePort?: NullableStringFieldUpdateOperationsInput | string | null
    vesselType?: NullableEnumVesselTypeFieldUpdateOperationsInput | $Enums.VesselType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bhpKw?: NullableFloatFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    dwt?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    grt?: NullableIntFieldUpdateOperationsInput | number | null
    tonnageValue?: NullableFloatFieldUpdateOperationsInput | number | null
    ums?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    orgId?: StringFieldUpdateOperationsInput | string
    engineMake?: NullableEnumEngineMakeFieldUpdateOperationsInput | $Enums.EngineMake | null
    tonnageUnit?: NullableEnumTonnageUnitFieldUpdateOperationsInput | $Enums.TonnageUnit | null
    callSign?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inspectionDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mmsi?: NullableStringFieldUpdateOperationsInput | string | null
    safetyCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rankRequirements?: VesselRankRequirementUncheckedUpdateManyWithoutVesselNestedInput
  }

  export type CrewCreateWithoutDocumentInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingRecord?: TrainingRecordCreateNestedManyWithoutCrewInput
    VesselAssignment?: VesselAssignmentCreateNestedManyWithoutCrewInput
  }

  export type CrewUncheckedCreateWithoutDocumentInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingRecord?: TrainingRecordUncheckedCreateNestedManyWithoutCrewInput
    VesselAssignment?: VesselAssignmentUncheckedCreateNestedManyWithoutCrewInput
  }

  export type CrewCreateOrConnectWithoutDocumentInput = {
    where: CrewWhereUniqueInput
    create: XOR<CrewCreateWithoutDocumentInput, CrewUncheckedCreateWithoutDocumentInput>
  }

  export type CrewUpsertWithoutDocumentInput = {
    update: XOR<CrewUpdateWithoutDocumentInput, CrewUncheckedUpdateWithoutDocumentInput>
    create: XOR<CrewCreateWithoutDocumentInput, CrewUncheckedCreateWithoutDocumentInput>
    where?: CrewWhereInput
  }

  export type CrewUpdateToOneWithWhereWithoutDocumentInput = {
    where?: CrewWhereInput
    data: XOR<CrewUpdateWithoutDocumentInput, CrewUncheckedUpdateWithoutDocumentInput>
  }

  export type CrewUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingRecord?: TrainingRecordUpdateManyWithoutCrewNestedInput
    VesselAssignment?: VesselAssignmentUpdateManyWithoutCrewNestedInput
  }

  export type CrewUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingRecord?: TrainingRecordUncheckedUpdateManyWithoutCrewNestedInput
    VesselAssignment?: VesselAssignmentUncheckedUpdateManyWithoutCrewNestedInput
  }

  export type CourseCreateWithoutPartnerInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingRecord?: TrainingRecordCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPartnerInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    createdAt?: Date | string
    updatedAt?: Date | string
    TrainingRecord?: TrainingRecordUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPartnerInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPartnerInput, CourseUncheckedCreateWithoutPartnerInput>
  }

  export type CourseCreateManyPartnerInputEnvelope = {
    data: CourseCreateManyPartnerInput | CourseCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutPartnerInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutPartnerInput, CourseUncheckedUpdateWithoutPartnerInput>
    create: XOR<CourseCreateWithoutPartnerInput, CourseUncheckedCreateWithoutPartnerInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutPartnerInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutPartnerInput, CourseUncheckedUpdateWithoutPartnerInput>
  }

  export type CourseUpdateManyWithWhereWithoutPartnerInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutPartnerInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    trainingType?: EnumTrainingTypeFilter<"Course"> | $Enums.TrainingType
    partnerId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type TrainingPartnerCreateWithoutCoursesInput = {
    id?: string
    name: string
    contactEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPartnerUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    contactEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPartnerCreateOrConnectWithoutCoursesInput = {
    where: TrainingPartnerWhereUniqueInput
    create: XOR<TrainingPartnerCreateWithoutCoursesInput, TrainingPartnerUncheckedCreateWithoutCoursesInput>
  }

  export type TrainingRecordCreateWithoutCourseInput = {
    id?: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crew: CrewCreateNestedOneWithoutTrainingRecordInput
  }

  export type TrainingRecordUncheckedCreateWithoutCourseInput = {
    id?: string
    crewId: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRecordCreateOrConnectWithoutCourseInput = {
    where: TrainingRecordWhereUniqueInput
    create: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput>
  }

  export type TrainingRecordCreateManyCourseInputEnvelope = {
    data: TrainingRecordCreateManyCourseInput | TrainingRecordCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TrainingPartnerUpsertWithoutCoursesInput = {
    update: XOR<TrainingPartnerUpdateWithoutCoursesInput, TrainingPartnerUncheckedUpdateWithoutCoursesInput>
    create: XOR<TrainingPartnerCreateWithoutCoursesInput, TrainingPartnerUncheckedCreateWithoutCoursesInput>
    where?: TrainingPartnerWhereInput
  }

  export type TrainingPartnerUpdateToOneWithWhereWithoutCoursesInput = {
    where?: TrainingPartnerWhereInput
    data: XOR<TrainingPartnerUpdateWithoutCoursesInput, TrainingPartnerUncheckedUpdateWithoutCoursesInput>
  }

  export type TrainingPartnerUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPartnerUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUpsertWithWhereUniqueWithoutCourseInput = {
    where: TrainingRecordWhereUniqueInput
    update: XOR<TrainingRecordUpdateWithoutCourseInput, TrainingRecordUncheckedUpdateWithoutCourseInput>
    create: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput>
  }

  export type TrainingRecordUpdateWithWhereUniqueWithoutCourseInput = {
    where: TrainingRecordWhereUniqueInput
    data: XOR<TrainingRecordUpdateWithoutCourseInput, TrainingRecordUncheckedUpdateWithoutCourseInput>
  }

  export type TrainingRecordUpdateManyWithWhereWithoutCourseInput = {
    where: TrainingRecordScalarWhereInput
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutTrainingRecordInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    createdAt?: Date | string
    updatedAt?: Date | string
    partner?: TrainingPartnerCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutTrainingRecordInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutTrainingRecordInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTrainingRecordInput, CourseUncheckedCreateWithoutTrainingRecordInput>
  }

  export type CrewCreateWithoutTrainingRecordInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: DocumentCreateNestedManyWithoutCrewInput
    VesselAssignment?: VesselAssignmentCreateNestedManyWithoutCrewInput
  }

  export type CrewUncheckedCreateWithoutTrainingRecordInput = {
    id?: string
    firstName: string
    lastName: string
    rank: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: DocumentUncheckedCreateNestedManyWithoutCrewInput
    VesselAssignment?: VesselAssignmentUncheckedCreateNestedManyWithoutCrewInput
  }

  export type CrewCreateOrConnectWithoutTrainingRecordInput = {
    where: CrewWhereUniqueInput
    create: XOR<CrewCreateWithoutTrainingRecordInput, CrewUncheckedCreateWithoutTrainingRecordInput>
  }

  export type CourseUpsertWithoutTrainingRecordInput = {
    update: XOR<CourseUpdateWithoutTrainingRecordInput, CourseUncheckedUpdateWithoutTrainingRecordInput>
    create: XOR<CourseCreateWithoutTrainingRecordInput, CourseUncheckedCreateWithoutTrainingRecordInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTrainingRecordInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTrainingRecordInput, CourseUncheckedUpdateWithoutTrainingRecordInput>
  }

  export type CourseUpdateWithoutTrainingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: TrainingPartnerUpdateOneWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutTrainingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrewUpsertWithoutTrainingRecordInput = {
    update: XOR<CrewUpdateWithoutTrainingRecordInput, CrewUncheckedUpdateWithoutTrainingRecordInput>
    create: XOR<CrewCreateWithoutTrainingRecordInput, CrewUncheckedCreateWithoutTrainingRecordInput>
    where?: CrewWhereInput
  }

  export type CrewUpdateToOneWithWhereWithoutTrainingRecordInput = {
    where?: CrewWhereInput
    data: XOR<CrewUpdateWithoutTrainingRecordInput, CrewUncheckedUpdateWithoutTrainingRecordInput>
  }

  export type CrewUpdateWithoutTrainingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: DocumentUpdateManyWithoutCrewNestedInput
    VesselAssignment?: VesselAssignmentUpdateManyWithoutCrewNestedInput
  }

  export type CrewUncheckedUpdateWithoutTrainingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: DocumentUncheckedUpdateManyWithoutCrewNestedInput
    VesselAssignment?: VesselAssignmentUncheckedUpdateManyWithoutCrewNestedInput
  }

  export type UserCreateManyOrgInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    createdBy: string
    updatedBy: string
  }

  export type UserUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneRequiredWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatorNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyCreatorInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    updatedBy: string
  }

  export type UserCreateManyUpdaterInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orgId: string
    name: string
    createdBy: string
  }

  export type UserUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    createdUsers?: UserUpdateManyWithoutCreatorNestedInput
    org?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    updater?: UserUpdateOneRequiredWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutUpdaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneRequiredWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatorNestedInput
    org?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUpdaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyCrewInput = {
    id?: string
    type?: $Enums.DocumentType
    fileName: string
    url: string
    uploadedAt?: Date | string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRecordCreateManyCrewInput = {
    id?: string
    courseId: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselAssignmentCreateManyCrewInput = {
    id?: string
    vesselId: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
  }

  export type DocumentUpdateWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUpdateWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTrainingRecordNestedInput
  }

  export type TrainingRecordUncheckedUpdateWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUncheckedUpdateManyWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselAssignmentUpdateWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vessel?: VesselUpdateOneRequiredWithoutVesselAssignmentNestedInput
  }

  export type VesselAssignmentUncheckedUpdateWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    vesselId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VesselAssignmentUncheckedUpdateManyWithoutCrewInput = {
    id?: StringFieldUpdateOperationsInput | string
    vesselId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VesselAssignmentCreateManyVesselInput = {
    id?: string
    crewId: string
    role?: $Enums.VesselRole
    assignedAt?: Date | string
    releasedAt?: Date | string | null
  }

  export type VesselRankRequirementCreateManyVesselInput = {
    id?: string
    role: $Enums.VesselRole
    requiredCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselAssignmentUpdateWithoutVesselInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crew?: CrewUpdateOneRequiredWithoutVesselAssignmentNestedInput
  }

  export type VesselAssignmentUncheckedUpdateWithoutVesselInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VesselAssignmentUncheckedUpdateManyWithoutVesselInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VesselRankRequirementUpdateWithoutVesselInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselRankRequirementUncheckedUpdateWithoutVesselInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselRankRequirementUncheckedUpdateManyWithoutVesselInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumVesselRoleFieldUpdateOperationsInput | $Enums.VesselRole
    requiredCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyPartnerInput = {
    id?: string
    title: string
    description?: string | null
    trainingType?: $Enums.TrainingType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingRecord?: TrainingRecordUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TrainingRecord?: TrainingRecordUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordCreateManyCourseInput = {
    id?: string
    crewId: string
    dateTaken?: Date | string
    expiryDate?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingRecordUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crew?: CrewUpdateOneRequiredWithoutTrainingRecordNestedInput
  }

  export type TrainingRecordUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    crewId?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}