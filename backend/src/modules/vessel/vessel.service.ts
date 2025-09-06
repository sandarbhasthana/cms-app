import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { ChangeVesselIdentifiersDto } from './dto/change-vessel-identifiers.dto';
import { AuthenticatedUser } from '../../common/types/authenticated-request';
import { Prisma, VesselRole, VesselType } from '@cms-app/prisma';

@Injectable()
export class VesselService {
  constructor(private readonly prisma: PrismaService) {}

  // list active or all assignments with crew details
  async listCrew(vesselId: string, user: AuthenticatedUser, activeOnly = true) {
    // enforce tenant
    await this.findOne(vesselId, user);
    const now = new Date();
    return this.prisma.vesselAssignment.findMany({
      where: {
        vesselId,
        ...(activeOnly
          ? {
              assignedAt: { lte: now },
              OR: [{ releasedAt: null }, { releasedAt: { gte: now } }],
            }
          : {}),
      },
      include: { crew: true },
      orderBy: { assignedAt: 'desc' },
    });
  }

  // requirements gap
  async requirementsGap(vesselId: string, user: AuthenticatedUser) {
    const vessel = await this.prisma.vessel.findFirst({
      where: { id: vesselId, orgId: user.orgId },
      include: { rankRequirements: true },
    });
    if (!vessel) throw new NotFoundException();

    const now = new Date();
    const onboard = await this.prisma.vesselAssignment.groupBy({
      by: ['role'],
      where: {
        orgId: user.orgId,
        vesselId,
        assignedAt: { lte: now },
        OR: [{ releasedAt: null }, { releasedAt: { gte: now } }],
      },
      _count: { _all: true },
    });

    const onboardMap = new Map(
      onboard.map((o: { role: any; _count: { _all: number } }) => [
        o.role,
        Number(o._count._all),
      ]),
    );
    return (vessel.rankRequirements ?? []).map(
      (r: { role: VesselRole; requiredCount: number }) => {
        const on = onboardMap.get(r.role) ?? 0;
        return {
          role: r.role,
          required: r.requiredCount,
          onboard: on,
          shortfall: Math.max(Number(r.requiredCount) - on, 0),
        };
      },
    );
  }

  async create(dto: CreateVesselDto, user: AuthenticatedUser) {
    const { rankRequirements, ...rest } = dto;

    try {
      return await this.prisma.vessel.create({
        data: {
          ...rest,
          orgId: user.orgId,
          ...(rankRequirements?.length
            ? {
                rankRequirements: {
                  createMany: {
                    data: rankRequirements.map((rr) => ({
                      role: rr.role,
                      requiredCount: rr.requiredCount,
                    })),
                  },
                },
              }
            : {}),
        },
        include: { rankRequirements: true },
      });
    } catch (e: any) {
      // Handle @@unique([imoNumber, orgId])
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(
          'A vessel with this IMO already exists in your organization',
        );
      }
      throw e;
    }
  }

  async findAll(
    user: AuthenticatedUser,
    params?: {
      q?: string;
      vesselType?: (typeof VesselType)[keyof typeof VesselType];
      dueInDays?: number;
      overdue?: boolean;
      skip?: number;
      take?: number;
    },
  ) {
    const {
      q,
      vesselType,
      dueInDays,
      overdue,
      skip = 0,
      take = 20,
    } = params ?? {};

    const where: Prisma.VesselWhereInput = { orgId: user.orgId };
    if (vesselType) where.vesselType = vesselType;
    if (q) {
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { imoNumber: { contains: q } },
        { companyName: { contains: q, mode: 'insensitive' } }, // optional field
      ];
    }
    if (dueInDays && dueInDays > 0) {
      const now = new Date();
      const due = new Date(now.getTime() + dueInDays * 86400 * 1000);
      where.inspectionDueDate = { gte: now, lte: due };
    }
    if (overdue === true) {
      const now = new Date();
      where.inspectionDueDate = { lt: now };
    }

    return this.prisma.vessel.findMany({
      where,
      skip,
      take,
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findOne(id: string, user: AuthenticatedUser) {
    const vessel = await this.prisma.vessel.findFirst({
      where: { id, orgId: user.orgId },
      include: { rankRequirements: true },
    });

    if (!vessel) throw new NotFoundException(`Vessel with ID ${id} not found`);
    return vessel;
  }

  async update(id: string, dto: UpdateVesselDto, user: AuthenticatedUser) {
    const { rankRequirements, ...rest } = dto;

    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // enforce tenant
      const existing = await tx.vessel.findFirst({
        where: { id, orgId: user.orgId },
      });
      if (!existing)
        throw new NotFoundException(`Vessel with ID ${id} not found`);

      await tx.vessel.update({ where: { id }, data: rest });

      if (rankRequirements) {
        await tx.vesselRankRequirement.deleteMany({ where: { vesselId: id } });
        if (rankRequirements.length) {
          await tx.vesselRankRequirement.createMany({
            data: rankRequirements.map((rr) => ({
              vesselId: id,
              orgId: user.orgId,
              role: rr.role,
              requiredCount: rr.requiredCount,
            })),
          });
        }
      }

      return tx.vessel.findUnique({
        where: { id },
        include: { rankRequirements: true },
      });
    });
  }

  async remove(id: string, user: AuthenticatedUser) {
    // ensure tenant ownership
    await this.findOne(id, user);
    return this.prisma.vessel.delete({ where: { id } });
  }

  // Optional: current occupancy; replace `vesselAssignment` with your actual assignments model if different
  async getOccupancyNow(id: string, user: AuthenticatedUser) {
    await this.findOne(id, user); // tenant check
    const now = new Date();
    const occupancy = await this.prisma.vesselAssignment.count({
      where: {
        vesselId: id,
        assignedAt: { lte: now },
        OR: [{ releasedAt: null }, { releasedAt: { gte: now } }],
      },
    });
    return { vesselId: id, occupancy };
  }

  async changeIdentifiers(
    id: string,
    dto: ChangeVesselIdentifiersDto,
    user: AuthenticatedUser,
  ): Promise<Prisma.VesselGetPayload<{ include: { rankRequirements: true } }>> {
    // Ensure vessel exists and user has access
    await this.findOne(id, user);

    try {
      // Update only the provided identifier fields
      const updateData: Prisma.VesselUpdateInput = {};
      if (dto.imoNumber !== undefined) updateData.imoNumber = dto.imoNumber;
      if (dto.mmsi !== undefined) updateData.mmsi = dto.mmsi;
      if (dto.callSign !== undefined) updateData.callSign = dto.callSign;

      const updatedVessel = await this.prisma.vessel.update({
        where: { id },
        data: updateData,
        include: { rankRequirements: true },
      });

      // TODO: Add audit logging here with the reason
      // Example: await this.auditService.log({
      //   action: 'VESSEL_IDENTIFIERS_CHANGED',
      //   vesselId: id,
      //   userId: user.id,
      //   reason: dto.reason,
      //   changes: updateData
      // });

      return updatedVessel;
    } catch (e: any) {
      // Handle unique constraint violations
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(
          'A vessel with these identifiers already exists in your organization',
        );
      }
      throw e;
    }
  }
}
