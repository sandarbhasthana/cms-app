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

  // First, try to find existing admin
  let admin = await prisma.user.findUnique({
    where: {
      orgId_email: {
        orgId: org.id,
        email: 'sandarbh@example.com',
      },
    },
  });

  if (admin) {
    // Update existing admin
    admin = await prisma.user.update({
      where: { id: admin.id },
      data: {
        password: hashedPassword,
        role: 'SUPER_ADMIN',
        name: 'Super Admin',
      },
    });
  } else {
    // Create new admin without createdBy/updatedBy first
    admin = await prisma.user.create({
      data: {
        email: 'sandarbh@example.com',
        password: hashedPassword,
        role: 'SUPER_ADMIN',
        name: 'Super Admin',
        orgId: org.id,
      },
    });
  }

  // Update the admin to reference itself as creator/updater
  await prisma.user.update({
    where: { id: admin.id },
    data: {
      createdBy: admin.id,
      updatedBy: admin.id,
    },
  });

  console.log('✅ Admin user created:\n', {
    email: admin.email,
    role: admin.role,
    orgId: admin.orgId,
  });

  // Also create an HR user for testing
  let hrUser = await prisma.user.findUnique({
    where: {
      orgId_email: {
        orgId: org.id,
        email: 'hr@example.com',
      },
    },
  });

  if (hrUser) {
    // Update existing HR user
    hrUser = await prisma.user.update({
      where: { id: hrUser.id },
      data: {
        password: hashedPassword,
        role: 'HR',
        name: 'HR User',
        updatedBy: admin.id,
      },
    });
  } else {
    // Create new HR user
    hrUser = await prisma.user.create({
      data: {
        email: 'hr@example.com',
        password: hashedPassword,
        role: 'HR',
        name: 'HR User',
        orgId: org.id,
        createdBy: admin.id,
        updatedBy: admin.id,
      },
    });
  }

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
