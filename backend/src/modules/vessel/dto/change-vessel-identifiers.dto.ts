// src/vessels/dto/change-vessel-identifiers.dto.ts
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { IsIMO, IsMMSI } from '../../../common/decorators/maritime.decorators';

/**
 * Use this in a dedicated endpoint, e.g.:
 * PATCH /vessels/:id/identifiers
 * Requires extra authorization + audit logging.
 */
export class ChangeVesselIdentifiersDto {
  @IsOptional()
  @IsIMO()
  imoNumber?: string;

  @IsOptional()
  @IsMMSI()
  mmsi?: string;

  @IsOptional()
  @IsString()
  callSign?: string;

  // Force a reason for auditor trail
  @IsString()
  @IsNotEmpty()
  reason!: string;
}
