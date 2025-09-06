import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { VesselService } from './vessel.service';
import { VesselController } from './vessel.controller';

@Module({
  imports: [PrismaModule],
  controllers: [VesselController],
  providers: [VesselService],
})
export class VesselModule {}
