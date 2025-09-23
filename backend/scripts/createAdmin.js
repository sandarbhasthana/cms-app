// scripts/createAdmin.js
const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcrypt');

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

  // Check if admin already exists
  let admin = await prisma.user.findUnique({
    where: {
      orgId_email: {
        orgId: org.id,
        email: 'sandarbh@example.com',
      },
    },
  });

  if (admin) {
    console.log('✅ Admin user already exists:', {
      email: admin.email,
      role: admin.role,
      orgId: admin.orgId,
    });
  } else {
    // Create admin using raw SQL to bypass foreign key constraints temporarily
    const adminResult = await prisma.$executeRaw`
      INSERT INTO "User" (id, email, password, role, name, "orgId", "createdBy", "updatedBy")
      VALUES (gen_random_uuid(), 'sandarbh@example.com', ${hashedPassword}, 'SUPER_ADMIN', 'Super Admin', ${org.id}, gen_random_uuid(), gen_random_uuid())
      RETURNING id;
    `;

    // Get the created admin
    admin = await prisma.user.findUnique({
      where: {
        orgId_email: {
          orgId: org.id,
          email: 'sandarbh@example.com',
        },
      },
    });

    // Update the admin to reference itself
    await prisma.user.update({
      where: { id: admin.id },
      data: {
        createdBy: admin.id,
        updatedBy: admin.id,
      },
    });

    console.log('✅ Admin user created:', {
      email: admin.email,
      role: admin.role,
      orgId: admin.orgId,
    });
  }

  // Create HR user
  let hrUser = await prisma.user.findUnique({
    where: {
      orgId_email: {
        orgId: org.id,
        email: 'hr@example.com',
      },
    },
  });

  if (hrUser) {
    console.log('✅ HR user already exists:', {
      email: hrUser.email,
      role: hrUser.role,
      orgId: hrUser.orgId,
    });
  } else {
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

    console.log('✅ HR user created:', {
      email: hrUser.email,
      role: hrUser.role,
      orgId: hrUser.orgId,
    });
  }

  console.log('\n🎉 Setup complete! You can now login with:');
  console.log('Email: sandarbh@example.com');
  console.log('Password: Pulak91@');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error('❌ Error creating admin:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
