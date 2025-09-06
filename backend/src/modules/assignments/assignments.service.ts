import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { ReleaseAssignmentDto } from './dto/release-assignment.dto';
import { AuthenticatedUser } from '../../common/types/authenticated-request';

@Injectable()
export class AssignmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAssignmentDto, user: AuthenticatedUser) {
    // tenant validation
    const vessel = await this.prisma.vessel.findFirst({
      where: { id: dto.vesselId, orgId: user.orgId },
      select: { id: true },
    });
    if (!vessel) throw new NotFoundException('Vessel not found');

    const crew = await this.prisma.crew.findFirst({
      where: { id: dto.crewId, orgId: user.orgId },
      select: { id: true },
    });
    if (!crew) throw new NotFoundException('Crew not found');

    return this.prisma.vesselAssignment.create({
      data: {
        orgId: user.orgId,
        vesselId: dto.vesselId,
        crewId: dto.crewId,
        role: dto.role,
        assignedAt: dto.assignedAt ? new Date(dto.assignedAt) : undefined,
      },
      include: { crew: true },
    });
  }

  async release(
    id: string,
    body: ReleaseAssignmentDto,
    user: AuthenticatedUser,
  ) {
    // enforce tenant by joining through assignment->vessel orgId
    const a = await this.prisma.vesselAssignment.findFirst({
      where: { id, orgId: user.orgId },
      select: { id: true, releasedAt: true },
    });
    if (!a) throw new NotFoundException('Assignment not found');
    if (a.releasedAt) return a; // idempotent

    return this.prisma.vesselAssignment.update({
      where: { id },
      data: {
        releasedAt: body.releasedAt ? new Date(body.releasedAt) : new Date(),
      },
    });
  }
}
