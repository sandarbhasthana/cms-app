import {
  Controller,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@cms-app/prisma';
import type { AuthenticatedRequest } from '../../common/types/authenticated-request';
import { CrewOnboardingDraftService } from './crew-onboarding-draft.service';

@Controller('crew/:crewId/draft')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.HR, Role.CREW_COORDINATOR)
export class CrewOnboardingDraftController {
  constructor(private draftSvc: CrewOnboardingDraftService) {}

  /** GET /crew/:crewId/draft */
  @Get()
  async get(@Param('crewId') crewId: string, @Req() req: AuthenticatedRequest) {
    return this.draftSvc.getDraft(crewId, req.user);
  }

  /** PATCH /crew/:crewId/draft — body: { data: { ...partial } } */
  @Patch()
  async patch(
    @Param('crewId') crewId: string,
    @Body('data') patch: Record<string, any>,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.draftSvc.updateDraft(crewId, patch, req.user);
  }
}
