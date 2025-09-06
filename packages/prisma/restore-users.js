const { PrismaClient } = require("./generated/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function restoreUsers() {
  try {
    console.log("Restoring missing users...");

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

        // Create user without self-referencing fields first
        const { createdBy, updatedBy, ...userWithoutRefs } = user;

        const newUser = await prisma.user.create({
          data: userWithoutRefs
        });

        console.log(`  ✓ Created user: ${newUser.email} (${newUser.role})`);

        // Update with self-referencing fields if they exist
        if (createdBy || updatedBy) {
          await prisma.user.update({
            where: { id: newUser.id },
            data: {
              createdBy: createdBy,
              updatedBy: updatedBy
            }
          });
          console.log(`  ✓ Updated references for: ${newUser.email}`);
        }
      } catch (error) {
        console.log(
          `  ❌ Failed to create user ${user.email}: ${error.message}`
        );

        // If it's a unique constraint error, try to find by email
        if (error.code === "P2002") {
          const existingByEmail = await prisma.user.findFirst({
            where: { email: user.email }
          });
          if (existingByEmail) {
            console.log(
              `  ℹ User with email ${user.email} already exists with different ID`
            );
          }
        }
      }
    }

    // Final count
    const finalUsers = await prisma.user.findMany();
    console.log(
      `\n✅ Restore completed! Now have ${finalUsers.length} users total`
    );
  } catch (error) {
    console.error("❌ Restore failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

restoreUsers();
