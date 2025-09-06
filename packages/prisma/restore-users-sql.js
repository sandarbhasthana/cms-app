const { PrismaClient } = require("./generated/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function restoreUsersSQL() {
  try {
    console.log("Restoring missing users using raw SQL...");

    // Read backup file
    const backupData = JSON.parse(fs.readFileSync("data-backup.json", "utf8"));
    const { users } = backupData.data;

    console.log(`Found ${users.length} users in backup`);

    // Check current users
    const currentUsers = await prisma.user.findMany();
    console.log(`Currently have ${currentUsers.length} users in database`);

    for (const user of users) {
      try {
        // Check if user exists
        const existingUser = await prisma.user.findUnique({
          where: { id: user.id }
        });

        if (existingUser) {
          console.log(`  ✓ User already exists: ${user.email}`);
          continue;
        }

        // Insert user using raw SQL with proper date casting
        await prisma.$executeRaw`
          INSERT INTO "User" (
            id, email, password, role, "createdAt", "updatedAt",
            "orgId", name, "createdBy", "updatedBy"
          ) VALUES (
            ${user.id}, ${user.email}, ${user.password}, ${user.role}::"Role",
            ${new Date(user.createdAt)}, ${new Date(user.updatedAt)}, ${
          user.orgId
        }, ${user.name},
            ${user.createdBy}, ${user.updatedBy}
          )
        `;

        console.log(`  ✓ Created user: ${user.email} (${user.role})`);
      } catch (error) {
        console.log(
          `  ❌ Failed to create user ${user.email}: ${error.message}`
        );
      }
    }

    // Final count
    const finalUsers = await prisma.user.findMany();
    console.log(
      `\n✅ Restore completed! Now have ${finalUsers.length} users total`
    );

    // Show all users
    console.log("\n👥 All users:");
    finalUsers.forEach((user) =>
      console.log(`   - ${user.email} (${user.role}) - ${user.name}`)
    );
  } catch (error) {
    console.error("❌ Restore failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

restoreUsersSQL();
