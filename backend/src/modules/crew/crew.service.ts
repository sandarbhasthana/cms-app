import {
  Injectable,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AssignCrewDto, ReleaseAssignmentDto } from './dto/assign-crew.dto';
import { CreateCrewDto, SearchCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';
import { AuthenticatedUser } from '../../common/types/authenticated-request';
import { Prisma, Role, VesselRole, VesselUserRole } from '@cms-app/prisma';

const VESSEL_ADMIN_ROLES = new Set<VesselRole>([
  // Grant vessel admin for these roles (tweak as you prefer)
  VesselRole.MASTER,
  VesselRole.CAPTAIN,
  VesselRole.SR_DPO_MASTER,
  VesselRole.DPO_MASTER,
  VesselRole.EXTRA_MASTER,
  VesselRole.ADD_MASTER,
  VesselRole.MASTER_MARINER,
  VesselRole.MASTER_NCV,
]);

@Injectable()
export class CrewService {
  constructor(private prisma: PrismaService) {}

  /** Create Crew linked to an existing User (role=CREW) */
  async create(dto: CreateCrewDto, user: AuthenticatedUser) {
    // ensure the user exists in same org and is not already linked
    const u = await this.prisma.user.findFirst({
      where: { id: dto.userId, orgId: user.orgId },
      select: { id: true, role: true, orgId: true },
    });
    if (!u) throw new NotFoundException('User not found in org');

    // Enforce that only users with CREW role can have crew records
    if (u.role !== Role.CREW) {
      throw new ForbiddenException(
        'User must have CREW role to create crew record',
      );
    }

    // ensure no existing crew for this user
    const existingCrew = await this.prisma.crew.findFirst({
      where: { userId: dto.userId },
    });
    if (existingCrew)
      throw new ConflictException('Crew already exists for this user');

    return this.prisma.crew.create({
      data: {
        orgId: user.orgId,
        userId: dto.userId,
        firstName: dto.firstName,
        lastName: dto.lastName,
        primaryDepartment: dto.primaryDepartment,
        rank: dto.rank,
        status: dto.status ?? 'ACTIVE',
        dateJoined: dto.dateJoined ? new Date(dto.dateJoined) : new Date(),
      },
    });
  }

  async list(query: SearchCrewDto, user: AuthenticatedUser) {
    const { q, rank, primaryDepartment, status, _sort, _order } = query;
    const where: Prisma.CrewWhereInput = {
      orgId: user.orgId,
      ...(rank ? { rank } : {}),
      ...(primaryDepartment ? { primaryDepartment } : {}),
      ...(status ? { status } : {}),
      ...(q
        ? {
            OR: [
              { firstName: { contains: q, mode: 'insensitive' } },
              { lastName: { contains: q, mode: 'insensitive' } },
              { user: { email: { contains: q, mode: 'insensitive' } } },
            ],
          }
        : {}),
    };

    // Build orderBy based on sort parameters
    let orderBy: Prisma.CrewOrderByWithRelationInput[] = [
      { lastName: 'asc' },
      { firstName: 'asc' },
    ];

    if (_sort && _order) {
      const sortOrder = _order === 'desc' ? 'desc' : 'asc';

      // Handle nested sorting for email (user.email)
      if (_sort === 'email' || _sort === 'user.email') {
        orderBy = [{ user: { email: sortOrder } }];
      } else if (_sort === 'name') {
        // For name sorting, sort by lastName then firstName
        orderBy = [{ lastName: sortOrder }, { firstName: sortOrder }];
      } else if (_sort === 'dateJoined') {
        orderBy = [{ dateJoined: sortOrder }];
      } else if (['primaryDepartment', 'rank', 'status'].includes(_sort)) {
        orderBy = [{ [_sort]: sortOrder }];
      }
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.crew.findMany({
        where,
        orderBy,
        include: { user: { select: { email: true, createdAt: true } } },
      }),
      this.prisma.crew.count({ where }),
    ]);
    return { data, total };
  }

  async get(id: string, user: AuthenticatedUser) {
    const crew = await this.prisma.crew.findFirst({
      where: { id, orgId: user.orgId },
      include: {
        user: { select: { email: true, createdAt: true } },
        VesselAssignment: {
          where: { orgId: user.orgId },
          orderBy: { assignedAt: 'desc' },
          include: { vessel: true },
        },
        Document: true,
        TrainingRecord: true,
      },
    });
    if (!crew) throw new NotFoundException();
    return crew;
  }

  async update(id: string, dto: UpdateCrewDto, user: AuthenticatedUser) {
    await this.ensureCrew(id, user);

    const updateData: Prisma.CrewUpdateInput = {};

    // Copy non-date fields
    if (dto.firstName !== undefined) updateData.firstName = dto.firstName;
    if (dto.lastName !== undefined) updateData.lastName = dto.lastName;
    if (dto.primaryDepartment !== undefined)
      updateData.primaryDepartment = dto.primaryDepartment;
    if (dto.rank !== undefined) updateData.rank = dto.rank;
    if (dto.status !== undefined) updateData.status = dto.status;

    // Handle date fields with proper conversion
    if (dto.dateJoined) {
      updateData.dateJoined = new Date(dto.dateJoined);
    }
    if (dto.dateLeft) {
      updateData.dateLeft = new Date(dto.dateLeft);
    }

    return this.prisma.crew.update({
      where: { id },
      data: updateData,
    });
  }

  async deactivate(id: string, user: AuthenticatedUser) {
    await this.ensureCrew(id, user);
    return this.prisma.crew.update({
      where: { id },
      data: { status: 'INACTIVE', dateLeft: new Date() },
    });
  }

  /** Assign to vessel (single-role model) */
  async assign(crewId: string, dto: AssignCrewDto, user: AuthenticatedUser) {
    // ensure crew & vessel in same org
    const [crew, vessel] = await Promise.all([
      this.prisma.crew.findFirst({
        where: { id: crewId, orgId: user.orgId },
        select: { id: true, userId: true },
      }),
      this.prisma.vessel.findFirst({
        where: { id: dto.vesselId, orgId: user.orgId },
        select: { id: true },
      }),
    ]);
    if (!crew || !vessel)
      throw new NotFoundException('Crew or Vessel not found in org');

    try {
      const assignment = await this.prisma.vesselAssignment.create({
        data: {
          orgId: user.orgId,
          vesselId: dto.vesselId,
          crewId: crewId,
          role: dto.role,
          assignedAt: dto.assignedAt ? new Date(dto.assignedAt) : undefined,
        },
      });

      // Auto-grant Vessel Admin if role qualifies and user exists
      if (crew.userId && VESSEL_ADMIN_ROLES.has(dto.role)) {
        await this.prisma.vesselUserRoleMap.upsert({
          where: {
            vesselId_userId_role: {
              vesselId: dto.vesselId,
              userId: crew.userId,
              role: VesselUserRole.VESSEL_ADMIN,
            },
          },
          update: { updatedAt: new Date() },
          create: {
            orgId: user.orgId,
            vesselId: dto.vesselId,
            userId: crew.userId,
            role: VesselUserRole.VESSEL_ADMIN,
          },
        });
      }

      return assignment;
    } catch (e: unknown) {
      // Map the partial-unique violation (crew already has an active posting)
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002' &&
        /ux_active_assignment_per_crew/i.test(
          (e.meta?.constraint as string) ?? '',
        )
      ) {
        throw new ConflictException('Crew already has an active assignment');
      }
      throw e;
    }
  }

  /** Release current assignment (by assignment id) */
  async release(
    assignmentId: string,
    dto: ReleaseAssignmentDto,
    user: AuthenticatedUser,
  ) {
    const assignment = await this.prisma.vesselAssignment.findFirst({
      where: { id: assignmentId, orgId: user.orgId },
      select: {
        id: true,
        crewId: true,
        vesselId: true,
        role: true,
        crew: { select: { userId: true } },
      },
    });
    if (!assignment) throw new NotFoundException();

    const released = await this.prisma.vesselAssignment.update({
      where: { id: assignmentId },
      data: {
        releasedAt: dto.releasedAt ? new Date(dto.releasedAt) : new Date(),
      },
    });

    // Revoke Vessel Admin if the crew has no other qualifying active roles on this vessel
    if (assignment.crew.userId && VESSEL_ADMIN_ROLES.has(assignment.role)) {
      const stillQualifying = await this.prisma.vesselAssignment.count({
        where: {
          orgId: user.orgId,
          vesselId: assignment.vesselId,
          crewId: assignment.crewId,
          releasedAt: null,
          role: { in: Array.from(VESSEL_ADMIN_ROLES) },
        },
      });
      if (stillQualifying === 0) {
        await this.prisma.vesselUserRoleMap.deleteMany({
          where: {
            orgId: user.orgId,
            vesselId: assignment.vesselId,
            userId: assignment.crew.userId,
            role: VesselUserRole.VESSEL_ADMIN,
          },
        });
      }
    }

    return released;
  }

  private async ensureCrew(id: string, user: AuthenticatedUser) {
    const exists = await this.prisma.crew.findFirst({
      where: { id, orgId: user.orgId },
      select: { id: true },
    });
    if (!exists) throw new NotFoundException();
  }
}
