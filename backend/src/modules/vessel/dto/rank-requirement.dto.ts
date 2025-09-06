import { IsEnum, IsInt, Min } from 'class-validator';
import { VesselRole } from '@cms-app/prisma';

export class RankRequirementDto {
  @IsEnum(VesselRole)
  role!: VesselRole;
  @IsInt()
  @Min(1)
  requiredCount!: number;
}
