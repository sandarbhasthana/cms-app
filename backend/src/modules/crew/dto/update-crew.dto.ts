import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateCrewDto } from './create-crew.dto';

export class UpdateCrewDto extends PartialType(CreateCrewDto) {
  @IsOptional()
  @IsString()
  dateLeft?: string;
}
