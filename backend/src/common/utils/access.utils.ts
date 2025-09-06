import { Role } from '@cms-app/prisma';

export function canAccess(userRole: Role, requiredRoles: Role[]): boolean {
  return requiredRoles.includes(userRole);
}
