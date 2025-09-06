const { PrismaClient } = require("./generated/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function fixPayrollUser() {
  try {
    console.log("Fixing payroll user...");

    // Read backup file
    const backupData = JSON.parse(fs.readFileSync("data-backup.json", "utf8"));
    const payrollUser = backupData.data.users.find(
      (u) => u.email === "payroll@example.com"
    );

    if (!payrollUser) {
      console.log("Payroll user not found in backup");
      return;
    }

    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: { email: "payroll@example.com" }
    });

    if (existingUser) {
      console.log("Payroll user already exists");
      return;
    }

    // Find the super admin user to use as creator
    const superAdmin = await prisma.user.findFirst({
      where: { role: "SUPER_ADMIN" }
    });

    if (!superAdmin) {
      console.log("No super admin found to use as creator");
      return;
    }

    console.log(`Using ${superAdmin.email} as creator for payroll user`);

    // Create payroll user with super admin as creator
    await prisma.$executeRaw`
      INSERT INTO "User" (
        id, email, password, role, "createdAt", "updatedAt", 
        "orgId", name, "createdBy", "updatedBy"
      ) VALUES (
        ${payrollUser.id}, ${payrollUser.email}, ${payrollUser.password}, ${
      payrollUser.role
    }::"Role", 
        ${new Date(payrollUser.createdAt)}, ${new Date(
      payrollUser.updatedAt
    )}, ${payrollUser.orgId}, ${payrollUser.name},
        ${superAdmin.id}, ${superAdmin.id}
      )
    `;

    console.log(`✅ Created payroll user: ${payrollUser.email}`);

    // Final count
    const finalUsers = await prisma.user.findMany();
    console.log(`\n✅ Now have ${finalUsers.length} users total`);
  } catch (error) {
    console.error("❌ Failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

fixPayrollUser();
