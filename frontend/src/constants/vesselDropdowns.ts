import { VesselType } from "@cms-app/prisma";

// NOTE: EngineMake, TonnageUnit, and CertificateType have Prisma export issues
// Using hardcoded values as a workaround until the root cause is resolved

// Helper function to convert enum to options with safety check
const enumToOptions = (enumObj: Record<string, string> | undefined) => {
  if (!enumObj || typeof enumObj !== "object") {
    return [];
  }
  return Object.values(enumObj).map((value) => ({
    label: value.replace(/_/g, " "),
    value
  }));
};

// VesselType works fine from Prisma
export const vesselTypeOptions = enumToOptions(VesselType);

// Hardcoded fallbacks for broken Prisma exports
const ENGINE_MAKE_VALUES = [
  "ABB_STROMBERG",
  "AKASAKA",
  "BW_6GFVT2BF",
  "BW_6560MC",
  "BW_6S70MC_C",
  "BW_GFCA",
  "BW_KEF",
  "BW_KGF",
  "BW_LMC",
  "BW_MC",
  "BW_MC_C",
  "BW_ME_B",
  "BW_ME_C",
  "BW_SMC",
  "BW_ST_X",
  "BERGEN",
  "BMZ_MAN_BW_7S50MC_C",
  "CATERPILLAR",
  "CUMMINS_KTA50",
  "DAIHATSU",
  "DALIAN_SULZER",
  "DEUTZ",
  "DIESEL",
  "DMD_SULZER",
  "GN8320ZC4B",
  "HITACHI",
  "HYUNDAI_MAN_BW_7_S_60_MC_C_MK_7",
  "Hyundai_MAN_BW_7S60MC_Mk_6",
  "JAPAN_ENGINE",
  "KAWASAKI_MAN_BW",
  "KAWASAKI_HEAVY",
  "KOBE_DIESEL",
  "KRUPP_MAK",
  "MAK",
  "MAN",
  "MAN_6G50ME_B9_3",
  "MAN_BW",
  "MAN_BW_5S70MC",
  "MAN_BW_6S50MC_C",
  "MAN_BW_6S60MC_C",
  "MAN_BW_6S90MC",
  "MAN_BW_7S60_MC",
  "MAN_BW_7S60MC_C",
  "MAN_BW_L32_40_MAN_BW_DIESEL_8L32_40",
  "MITSUBISHI",
  "MITSUBISHI_AKASAKA",
  "MITSUBISHI_AKASAKA_DIESEL",
  "MITSUBISHI_HEAVY",
  "MITSUBISHI_UEC",
  "MITSUI_MAN_BW",
  "MWM",
  "NIIGATA",
  "NIPPATSU",
  "PIELSTICK",
  "STORK_WERKSPOR_DIESEL",
  "SULZER",
  "SULZER_RD",
  "SULZER_RLB",
  "SULZER_RND",
  "SULZER_RT_FLEX",
  "SULZER_RTA",
  "WARTSILLA",
  "WARTSILLA_DIESEL_BV",
  "YANMAR"
];

const TONNAGE_UNIT_VALUES = [
  "BHP",
  "CEUs",
  "DWT",
  "GRT",
  "KW",
  "LIMS",
  "M3",
  "TEUs"
];

// Use hardcoded values due to Prisma export bug
export const engineMakeOptions = ENGINE_MAKE_VALUES.map((value) => ({
  label: value.replace(/_/g, " "),
  value
}));

export const tonnageUnitOptions = TONNAGE_UNIT_VALUES.map((value) => ({
  label: value.replace(/_/g, " "),
  value
}));
