// src/common/types/authenticated-request.ts
import { Role } from '@cms-app/prisma';
import { Request as ExpressRequest } from 'express';

export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  orgId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthenticatedRequest extends ExpressRequest {
  user: AuthenticatedUser;
}
