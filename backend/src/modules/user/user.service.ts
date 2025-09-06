import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, Role } from '@cms-app/prisma';
import * as bcrypt from 'bcrypt';

function splitName(name: string): { firstName: string; lastName: string } {
  const parts = (name ?? '').trim().split(/\s+/);
  if (parts.length === 0) return { firstName: '', lastName: '' };
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return {
    firstName: parts.slice(0, -1).join(' '),
    lastName: parts.slice(-1)[0],
  };
}

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createUserDto: CreateUserDto,
    orgId: string,
    createdById: string,
  ) {
    // Email uniqueness within org
    const existingUser = await this.prisma.user.findUnique({
      where: { orgId_email: { orgId, email: createUserDto.email } },
    });
    if (existingUser) {
      throw new BadRequestException(
        `User with email "${createUserDto.email}" already exists in this organization.`,
      );
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.$transaction(async (tx) => {
      // 1) Create the user
      const user = await tx.user.create({
        data: {
          email: createUserDto.email,
          name: createUserDto.name,
          password: hashedPassword,
          role: createUserDto.role,
          orgId,
          createdBy: createdById,
          updatedBy: createdById,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          orgId: true,
          createdAt: true,
          updatedAt: true,
          createdBy: true,
          updatedBy: true,
        },
      });

      // 2) If CREW, create the Crew profile linked to this user
      if (createUserDto.role === Role.CREW) {
        if (!createUserDto.primaryDepartment || !createUserDto.rank) {
          throw new BadRequestException(
            'Department and Rank are required for CREW users.',
          );
        }

        // Prefer explicit first/last if provided; else split from name
        const { firstName, lastName } =
          createUserDto.firstName || createUserDto.lastName
            ? {
                firstName: createUserDto.firstName ?? '',
                lastName: createUserDto.lastName ?? '',
              }
            : splitName(createUserDto.name);

        await tx.crew.create({
          data: {
            orgId,
            userId: user.id,
            firstName,
            lastName,
            primaryDepartment: createUserDto.primaryDepartment,
            rank: createUserDto.rank,
            status: 'ACTIVE',
            dateJoined: new Date(),
          },
        });
      }

      return user;
    });
  }

  async findPaginated(
    orgId: string,
    skip: number,
    take: number,
    sort?: string,
    order: 'asc' | 'desc' = 'asc',
    search?: string,
    role?: string,
  ) {
    const where = {
      orgId,
      ...(role ? { role: role as Role } : {}),
      ...(search
        ? {
            OR: [
              {
                name: { contains: search, mode: Prisma.QueryMode.insensitive },
              },
              {
                email: { contains: search, mode: Prisma.QueryMode.insensitive },
              },
            ],
          }
        : {}),
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: sort ? { [sort]: order } : undefined,
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          orgId: true,
          createdAt: true,
          updatedAt: true,
          createdBy: true,
          updatedBy: true,
          // Include crew data for CREW users
          crew: {
            select: {
              firstName: true,
              lastName: true,
              primaryDepartment: true,
              rank: true,
            },
          },
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return { data, total };
  }

  async findOne(id: string, orgId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, orgId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        orgId: true,
        createdAt: true,
        updatedAt: true,
        createdBy: true,
        updatedBy: true,
        // Include crew data for CREW users
        crew: {
          select: {
            firstName: true,
            lastName: true,
            primaryDepartment: true,
            rank: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID "${id}" not found in your organization.`,
      );
    }

    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    orgId: string,
    updatedById: string,
  ) {
    await this.findOne(id, orgId);

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: {
        id,
        orgId,
      },
      data: {
        ...updateUserDto,
        updatedBy: updatedById,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        orgId: true,
        createdAt: true,
        updatedAt: true,
        createdBy: true,
        updatedBy: true,
      },
    });
  }

  async remove(id: string, orgId: string) {
    await this.findOne(id, orgId);
    return this.prisma.user.delete({
      where: {
        id,
        orgId,
      },
    });
  }
}
