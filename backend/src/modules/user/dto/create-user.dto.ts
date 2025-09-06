// create-user.dto.ts
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Role, VesselDepartment, VesselRole } from '@cms-app/prisma';

export class CreateUserDto {
  @IsEmail() email!: string;
  @IsString() name!: string;
  @IsString() password!: string;
  @IsEnum(Role) role!: Role;

  // Optional explicit names (nice to have for Crew)
  @ValidateIf((o: CreateUserDto) => o.role === Role.CREW)
  @IsOptional()
  @IsString()
  firstName?: string;

  @ValidateIf((o: CreateUserDto) => o.role === Role.CREW)
  @IsOptional()
  @IsString()
  lastName?: string;

  // Required when role = CREW
  @ValidateIf((o: CreateUserDto) => o.role === Role.CREW)
  @IsEnum(VesselDepartment)
  primaryDepartment?: VesselDepartment;

  @ValidateIf((o: CreateUserDto) => o.role === Role.CREW)
  @IsEnum(VesselRole)
  rank?: VesselRole;
}
