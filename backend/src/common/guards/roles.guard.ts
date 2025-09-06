import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '@cms-app/prisma';

interface AuthenticatedUser {
  id: string;
  email: string;
  role: Role;
  orgId: string;
}

interface AuthenticatedRequest {
  user?: AuthenticatedUser; // Make user optional to prevent undefined errors
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // No role restrictions
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();

    const user = request.user;

    if (!user) {
      // JWT Guard likely hasn't run yet
      console.warn('[RolesGuard] No user found in request. Skipping.');
      return true; // Allow AuthGuard to run next
    }

    console.log('[RolesGuard] Required Roles:', requiredRoles);
    console.log('[RolesGuard] User Role:', user.role);

    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Insufficient role permissions');
    }

    return true;
  }
}
