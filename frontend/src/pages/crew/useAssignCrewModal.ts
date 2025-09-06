import { useModalForm } from "@refinedev/antd";

export type AssignCrewFormValues = {
  vesselId: string;
  role: string;
  assignedAt?: string;
};

export function useAssignCrewModal() {
  // useModalForm just to get open/close + form plumbing
  return useModalForm<AssignCrewFormValues>({
    action: "create",
    warnWhenUnsavedChanges: false
    // no resource; we'll submit manually with useCustomMutation
  });
}
