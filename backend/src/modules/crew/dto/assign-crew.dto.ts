// dto/assign-crew.dto.ts
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { VesselRole } from '@cms-app/prisma';

export class AssignCrewDto {
  @IsString() vesselId!: string;
  @IsEnum(VesselRole) role!: VesselRole;
  @IsOptional() assignedAt?: string;
}

export class ReleaseAssignmentDto {
  @IsOptional() releasedAt?: string;
}
