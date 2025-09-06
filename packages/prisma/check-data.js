const { PrismaClient } = require("./generated/client");

const prisma = new PrismaClient();

async function checkData() {
  try {
    console.log("Checking current database state...");

    const organizations = await prisma.organization.findMany();
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        name: true
      }
    });
    const vessels = await prisma.vessel.findMany();

    console.log(`📊 Current data:`);
    console.log(`   - Organizations: ${organizations.length}`);
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Vessels: ${vessels.length}`);

    if (organizations.length > 0) {
      console.log("\n🏢 Organizations:");
      organizations.forEach((org) =>
        console.log(`   - ${org.name} (${org.id})`)
      );
    }

    if (users.length > 0) {
      console.log("\n👥 Users:");
      users.forEach((user) =>
        console.log(`   - ${user.email} (${user.role}) - ${user.name}`)
      );
    }

    if (vessels.length > 0) {
      console.log("\n🚢 Vessels:");
      vessels.forEach((vessel) =>
        console.log(`   - ${vessel.name} (${vessel.imoNumber})`)
      );
    }
  } catch (error) {
    console.error("❌ Check failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();
