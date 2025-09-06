// dto/create-crew.dto.ts
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CrewStatus, VesselDepartment, VesselRole } from '@cms-app/prisma';

export class CreateCrewDto {
  @IsString() userId!: string;
  @IsString() firstName!: string;
  @IsString() lastName!: string;
  @IsEnum(VesselDepartment) primaryDepartment!: VesselDepartment;
  @IsEnum(VesselRole) rank!: VesselRole;
  @IsOptional() @IsEnum(CrewStatus) status?: CrewStatus;
  @IsOptional() dateJoined?: string;
}

export class SearchCrewDto {
  @IsOptional() q?: string;
  @IsOptional() @IsEnum(VesselRole) rank?: VesselRole;
  @IsOptional() @IsEnum(VesselDepartment) primaryDepartment?: VesselDepartment;
  @IsOptional() @IsEnum(CrewStatus) status?: CrewStatus;
  @IsOptional() @IsString() _sort?: string;
  @IsOptional() @IsString() _order?: 'asc' | 'desc';
}
