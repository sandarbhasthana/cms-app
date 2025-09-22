import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { AuthenticatedUser } from '../../common/types/authenticated-request';

@Injectable()
export class CrewOnboardingDraftService {
  constructor(private readonly prisma: PrismaService) {}

  /** Load the draft for a given crew (must belong to your org) */
  async getDraft(crewId: string, user: AuthenticatedUser) {
    const draft = await this.prisma.crewOnboardingDraft.findUnique({
      where: { crewId },
      include: { crew: true },
    });
    if (!draft || draft.crew.orgId !== user.orgId) {
      throw new NotFoundException('Draft not found');
    }
    return draft;
  }

  /** Partial update (auto-save) of the draft JSON blob */
  async updateDraft(
    crewId: string,
    patch: Partial<Record<string, any>>,
    user: AuthenticatedUser,
  ) {
    // Ensure existence & org
    const existing = await this.prisma.crewOnboardingDraft.findUnique({
      where: { crewId },
      include: { crew: true },
    });
    if (!existing || existing.crew.orgId !== user.orgId) {
      throw new NotFoundException('Draft not found');
    }

    // Merge JSON data - handle case where existing.data might be null
    const existingData = existing.data as Record<string, any> | null;
    const newData = { ...(existingData || {}), ...patch };

    return this.prisma.crewOnboardingDraft.update({
      where: { crewId },
      data: { data: newData },
    });
  }

  /** Mark the draft complete once final Submit comes in */
  async completeDraft(crewId: string, user: AuthenticatedUser) {
    // Ensure existence & org access
    await this.getDraft(crewId, user);
    return this.prisma.crewOnboardingDraft.update({
      where: { crewId },
      data: { status: 'COMPLETED' },
    });
  }
}
