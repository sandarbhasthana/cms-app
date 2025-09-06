// src/vessels/dto/update-vessel.dto.ts
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateVesselDto } from './create-vessel.dto';

/**
 * Generic PATCH/PUT that updates *everything except* identifiers like IMO.
 * If you need to change identifiers, use ChangeVesselIdentifiersDto below.
 */
export class UpdateVesselDto extends PartialType(
  OmitType(CreateVesselDto, ['imoNumber'] as const),
) {}
