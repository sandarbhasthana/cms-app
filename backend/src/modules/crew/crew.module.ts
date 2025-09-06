import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CrewService } from './crew.service';
import { CrewController } from './crew.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CrewController],
  providers: [CrewService],
})
export class CrewModule {}
