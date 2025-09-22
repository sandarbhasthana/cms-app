import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CrewService } from './crew.service';
import { CrewController } from './crew.controller';
import { CrewOnboardingDraftController } from './crew-onboarding-draft.controller';
import { CrewOnboardingDraftService } from './crew-onboarding-draft.service';

@Module({
  imports: [PrismaModule],
  controllers: [CrewController, CrewOnboardingDraftController],
  providers: [CrewService, CrewOnboardingDraftService],
})
export class CrewModule {}
