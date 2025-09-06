import {
  IsString,
  IsEnum,
  IsOptional,
  IsInt,
  IsNumber,
  IsBoolean,
  Min,
  Max,
  IsEmail,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { VesselType, EngineMake, TonnageUnit } from '@cms-app/prisma';
import { RankRequirementDto } from './rank-requirement.dto';
import { IsIMO, IsMMSI } from '../../../common/decorators/maritime.decorators';

const CURRENT_YEAR = new Date().getFullYear();

export class CreateVesselDto {
  @IsString()
  name!: string;

  @IsIMO()
  imoNumber!: string;

  // NOTE: orgId must be injected from auth/tenant context on the server, not from client.

  // Prisma has capacity Int? — make it optional; if you prefer required, remove @IsOptional
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  capacity?: number;

  @IsOptional()
  @IsString()
  homePort?: string;

  @IsOptional()
  @IsEnum(VesselType)
  vesselType?: VesselType;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1850)
  @Max(CURRENT_YEAR)
  yearBuilt?: number;

  @IsOptional()
  @IsEnum(EngineMake)
  engineMake?: EngineMake;

  @IsOptional()
  @IsEnum(TonnageUnit)
  tonnageUnit?: TonnageUnit;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  tonnageValue?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  grt?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  dwt?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  bhpKw?: number;

  @IsOptional()
  @IsBoolean()
  ums?: boolean;

  @IsOptional()
  @IsString()
  flag?: string;

  /** -------- Ops & Identifiers (future‑proof) -------- */
  @IsOptional()
  @IsString()
  contactPersonName?: string;

  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsOptional()
  @IsString()
  callSign?: string;

  @IsOptional()
  @IsMMSI()
  mmsi?: string;

  /** -------- Compliance -------- */
  @IsOptional()
  @Type(() => Date)
  lastInspectionDate?: Date;

  @IsOptional()
  @Type(() => Date)
  inspectionDueDate?: Date;

  @IsOptional()
  @IsUrl()
  safetyCertificateUrl?: string;

  /** -------- Rank Requirements for auto‑slotting -------- */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => RankRequirementDto)
  rankRequirements?: RankRequirementDto[];
}
