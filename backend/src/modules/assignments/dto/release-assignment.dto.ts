import { IsOptional, IsDateString } from 'class-validator';

export class ReleaseAssignmentDto {
  @IsOptional()
  @IsDateString()
  releasedAt?: string; // if omitted, server uses now()
}
