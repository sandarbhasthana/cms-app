import { IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { VesselRole } from '@cms-app/prisma';

export class CreateAssignmentDto {
  @IsString() vesselId!: string;
  @IsString() crewId!: string;
  @IsEnum(VesselRole) role!: VesselRole;

  @IsOptional()
  @IsDateString()
  assignedAt?: string; // ISO; defaults to now if not sent
}
