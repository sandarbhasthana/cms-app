// Small helpers for enum labels and filtering rank by department.
// Uses Prisma enums for type safety and consistency.

import { VesselRole, VesselDepartment, CrewStatus } from "@cms-app/prisma";

export const humanizeEnum = (v: string | null | undefined): string => {
  if (!v) return "-";
  return v
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (m) => m.toUpperCase());
};

export const DEPARTMENTS = Object.values(VesselDepartment).map((dept) => ({
  label: humanizeEnum(dept as string),
  value: dept
}));

export const STATUSES = Object.values(CrewStatus).map((status) => ({
  label: humanizeEnum(status as string),
  value: status
}));

// Comprehensive role mapping by department using Prisma VesselRole enum
export const ROLE_BY_DEPT: Record<string, VesselRole[]> = {
  DECK: [
    VesselRole.MASTER,
    VesselRole.CAPTAIN,
    VesselRole.CHIEF_OFFICER,
    VesselRole.CHIEF_OFFICER_NCV,
    VesselRole.SECOND_OFFICER,
    VesselRole.THIRD_OFFICER,
    VesselRole.JUNIOR_THIRD_OFFICER,
    VesselRole.JUNIOR_FOURTH_OFFICER,
    VesselRole.JUNIOR_OFFICER,
    VesselRole.DPO,
    VesselRole.DPO_MASTER,
    VesselRole.DPO_CHIEF_OFFICER,
    VesselRole.DPO_SECOND_OFFICER,
    VesselRole.DPO_THIRD_OFFICER,
    VesselRole.JR_DPO_CHIEF_OFFICER,
    VesselRole.SR_DPO_CHIEF_OFFICER,
    VesselRole.SR_DPO_MASTER,
    VesselRole.JUNIOR_DPO,
    VesselRole.AB,
    VesselRole.OS,
    VesselRole.BOSUN,
    VesselRole.DECK_CADET,
    VesselRole.DECK_FITTER,
    VesselRole.ADDL_CHIEF_OFFICER,
    VesselRole.ADDL_SECOND_OFFICER,
    VesselRole.ADD_MASTER,
    VesselRole.EXTRA_MASTER,
    VesselRole.MASTER_MARINER,
    VesselRole.MASTER_NCV,
    VesselRole.INLAND_MASTER,
    VesselRole.CRANE_OPERATOR,
    VesselRole.RIGGER,
    VesselRole.FITTER,
    VesselRole.SAFETY_OFFICER
  ],
  ENGINE: [
    VesselRole.CHIEF_ENGINEER,
    VesselRole.CHIEF_ENGINEER_NCV,
    VesselRole.SECOND_ENGINEER,
    VesselRole.SECOND_ENGINEER_NCV,
    VesselRole.THIRD_ENGINEER,
    VesselRole.FOURTH_ENGINEER,
    VesselRole.FOURTH_ENGINEER_NCV,
    VesselRole.FIFTH_ENGINEER,
    VesselRole.ELECTRICAL_OFFICER,
    VesselRole.ELECTRICAL_ENGINEER,
    VesselRole.ASST_ELECTRICAL_OFFICER,
    VesselRole.TRAINEE_ELECTRICAL_OFFICER,
    VesselRole.ELECTRO_TECHNICAL_ENGINEER,
    VesselRole.ADDL_CHIEF_ENGINEER,
    VesselRole.ADDL_SECOND_ENGINEER,
    VesselRole.ADDL_THIRD_ENGINEER,
    VesselRole.JUNIOR_ENGINEER,
    VesselRole.TRAINEE_ENGINEER,
    VesselRole.OILER,
    VesselRole.MOTORMAN,
    VesselRole.ENGINE_FITTER,
    VesselRole.GAS_ENGINEER,
    VesselRole.CARGO_ENGINEER,
    VesselRole.DREDGER_ENGINEER,
    VesselRole.REEFER_ENGINEER,
    VesselRole.REEFER_MECHANIC,
    VesselRole.PUMPMAN,
    VesselRole.PIPE_OPERATOR,
    VesselRole.TUBE_OPERATOR,
    VesselRole.TRAVEL_FITTER,
    VesselRole.TRAVEL_WIPER
  ],
  CATERING: [
    VesselRole.CHEF,
    VesselRole.CHIEF_COOK,
    VesselRole.SECOND_COOK,
    VesselRole.SOUS_CHEF,
    VesselRole.STEWARD,
    VesselRole.CHIEF_STEWARD,
    VesselRole.CABIN_ATTENDANT,
    VesselRole.HOTEL_MANAGER,
    VesselRole.BAR_TENDER,
    VesselRole.LAUNDRYMAN,
    VesselRole.PURSER
  ]
};

export const filterRolesByDept = (allRoles: VesselRole[], dept?: string) => {
  if (!dept) return allRoles;
  const allow = new Set(ROLE_BY_DEPT[dept] ?? []);
  if (allow.size === 0) return allRoles;
  // Put allowed first, then the rest
  const preferred = allRoles.filter((r) => allow.has(r));
  const others = allRoles.filter((r) => !allow.has(r));
  return [...preferred, ...others];
};
