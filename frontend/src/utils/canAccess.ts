import { Role } from "@cms-app/prisma";

type ResourceAction = "create" | "edit" | "delete" | "list" | "show";

export function canAccess(
  userRole: Role,
  action: ResourceAction,
  resource: string
): boolean {
  const rules: Record<Role, Record<string, ResourceAction[]>> = {
    SUPER_ADMIN: {
      users: ["list", "create", "edit", "delete"],
      crew: ["list", "create", "edit", "delete"]
    },
    ADMIN: {
      users: ["list", "create", "edit", "delete"],
      crew: ["list", "create", "edit", "delete"]
    },
    HR: {
      users: ["list", "create", "edit", "delete"],
      crew: ["list", "create", "edit", "delete"]
    },
    SCHEDULER: {
      crew: ["list", "show"]
    },
    PAYROLL: {
      crew: ["list", "show"]
    },
    CREW: {
      // Crew members typically have limited access
    },
    AUDITOR: {
      users: ["list", "show"],
      crew: ["list", "show"]
    },
    CREW_COORDINATOR: {
      users: ["list", "show"],
      crew: ["list", "create", "edit", "delete"]
    },
    COMPLIANCE_VIEWER: {
      users: ["list", "show"],
      crew: ["list", "show"]
    }
  };

  return rules[userRole]?.[resource]?.includes(action) ?? false;
}
