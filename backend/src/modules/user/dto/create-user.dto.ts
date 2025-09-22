// create-user.dto.ts
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Role } from '@cms-app/prisma';

export class CreateUserDto {
  @IsEmail() email!: string;
  @IsString() name!: string;
  @IsString() password!: string;
  @IsEnum(Role) role!: Role;

  // Note: Crew-specific fields (firstName, lastName, primaryDepartment, rank)
  // are now handled separately in the crew onboarding process
}
