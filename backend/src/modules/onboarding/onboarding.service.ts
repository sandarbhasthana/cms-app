// import { Injectable, BadRequestException } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
// import { PrismaClient } from '../../../generated/prisma';
// import * as bcrypt from 'bcrypt';
// import { Role } from '../../../generated/prisma';
// import { randomUUID } from 'crypto';

// export interface ProvisionAdminInput {
//   orgName: string;
//   adminEmail: string;
//   adminPassword?: string; // optional, can auto-generate later
// }

// @Injectable()
// export class OnboardingService {
//   constructor(private readonly prisma: PrismaService) {}

//   // Create a new organization and its initial Admin user
//   async provisionAdmin(input: ProvisionAdminInput) {
//     const { orgName, adminEmail, adminPassword } = input;

//     // Check if admin email exists globally
//     const existing = await this.prisma.user.findFirst({
//       where: {
//         email: adminEmail,
//       },
//     });

//     if (existing) {
//       throw new BadRequestException('Email is already in use');
//     }

//     // Create Organization
//     c//onst prismaClient: PrismaClient = this.prisma as any;
//     // const organization = await prismaClient.organization.create({
//     //   data: {
//     //     id: `org_${randomUUID()}`,
//     //     name: orgName,
//     //   },
//     // });

//     // Create hashed password (or generate random password if needed)
//     const rawPassword = adminPassword || this.generateTempPassword();
//     const hashedPassword = await bcrypt.hash(rawPassword, 10);

//     // const adminUser = await prismaClient.user.create({
//     //   data: {
//     //     email: adminEmail,
//     //     password: hashedPassword,
//     //     role: Role.ADMIN,
//     //     orgId: organization.id,
//     //   },
//     // });

//     return {
//       orgId: organization.id,
//       adminId: adminUser.id,
//       email: adminEmail,
//       password: adminPassword ? undefined : rawPassword, // return only if system-generated
//     };
//   }

//   // Simple temp password generator
//   private generateTempPassword(): string {
//     return `C!${Math.random().toString(36).slice(-8)}#`;
//   }
// }
