// scripts/createAdmin.ts
import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const plainPassword = 'Pulak91@'; // 🔐 You can change this
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // First create an organization if it doesn't exist
  const org = await prisma.organization.upsert({
    where: { id: 'org-temp' },
    update: {},
    create: {
      id: 'org-temp',
      name: 'Default Organization',
    },
  });

  const admin = await prisma.user.upsert({
    where: {
      orgId_email: {
        orgId: org.id,
        email: 'sandarbh@example.com',
      },
    },
    update: {
      password: hashedPassword, // Update password
      role: 'SUPER_ADMIN',
      name: 'Super Admin',
    },
    create: {
      email: 'sandarbh@example.com', // 📨 Change if needed
      password: hashedPassword, // 🔐 Secure hash
      role: 'SUPER_ADMIN', // 🎩 Set to any Role enum
      name: 'Super Admin', // 👤 Required field
      orgId: org.id, // 🏢 Use the organization ID
      createdBy: 'system', // Will be updated after creation
      updatedBy: 'system', // Will be updated after creation
    },
  });

  // Update the admin to reference itself as creator/updater if it was just created
  if (admin.createdBy === 'system') {
    await prisma.user.update({
      where: { id: admin.id },
      data: {
        createdBy: admin.id,
        updatedBy: admin.id,
      },
    });
  }

  console.log('✅ Admin user created:\n', {
    email: admin.email,
    role: admin.role,
    orgId: admin.orgId,
  });

  // Also create an HR user for testing
  const hrUser = await prisma.user.upsert({
    where: {
      orgId_email: {
        orgId: org.id,
        email: 'hr@example.com',
      },
    },
    update: {
      password: hashedPassword, // Update password
      role: 'HR',
      name: 'HR User',
    },
    create: {
      email: 'hr@example.com',
      password: hashedPassword,
      role: 'HR',
      name: 'HR User',
      orgId: org.id,
      createdBy: admin.id,
      updatedBy: admin.id,
    },
  });

  console.log('✅ HR user created:\n', {
    email: hrUser.email,
    role: hrUser.role,
    orgId: hrUser.orgId,
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error('❌ Error creating admin:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
