// add-admin.cjs - Add a SUPER_ADMIN user to the cloud database
const { PrismaClient } = require("./generated/client");
const bcrypt = require("bcrypt");

// Use the cloud database
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19rSG9oRlRvUlU0Z3pQSWhRbDVZcUEiLCJhcGlfa2V5IjoiMDFLNVZZSFM3UENLUTNaSEpSUUM4NkVLMkUiLCJ0ZW5hbnRfaWQiOiJjZjNlZWQ0YTM3NjhlZDFmNTU5MGVmYmI4YjhkZTQxOGQ5MTg2MzMwNjc4ZjRkYzA1NTdiOTZmMmE5MGU1Y2Y2IiwiaW50ZXJuYWxfc2VjcmV0IjoiYTBkMWMwMzEtYjI4YS00YTg0LTkxYjktNWEwMGVhMGU1NDg4In0.c5017TmB9K588HVus8Mf-EoDc01uAJujoRMkA30vNRM"
    }
  }
});

async function addSuperAdmin() {
  console.log("🚀 Adding SUPER_ADMIN user to cloud database...\n");

  try {
    await prisma.$connect();
    console.log("✅ Connected to cloud database\n");

    // Admin credentials
    const adminEmail = "admin@cms.com";
    const adminPassword = "Admin123!";
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Get the first organization
    const org = await prisma.organization.findFirst();
    if (!org) {
      throw new Error(
        "No organization found. Please create an organization first."
      );
    }

    console.log(`📋 Using organization: ${org.name} (${org.id})`);

    // Get any existing SUPER_ADMIN user to update
    let adminUser = await prisma.user.findFirst({
      where: {
        orgId: org.id,
        role: "SUPER_ADMIN"
      }
    });

    if (!adminUser) {
      // If no SUPER_ADMIN exists, get the first user and make them admin
      adminUser = await prisma.user.findFirst({
        where: {
          orgId: org.id
        }
      });
    }

    if (adminUser) {
      console.log(
        `👤 Updating existing user (${adminUser.email}) to be SUPER_ADMIN...`
      );

      // Update existing user to be admin with new credentials
      const updatedAdmin = await prisma.user.update({
        where: { id: adminUser.id },
        data: {
          email: adminEmail,
          password: hashedPassword,
          role: "SUPER_ADMIN",
          name: "Super Admin",
          updatedBy: adminUser.id
        }
      });

      console.log("✅ Admin user updated:", {
        id: updatedAdmin.id,
        email: updatedAdmin.email,
        role: updatedAdmin.role,
        name: updatedAdmin.name
      });
    } else {
      console.log("❌ No users found in the organization to update.");
      throw new Error("No users found to update. Please check your database.");
    }

    // Also check/update the existing sandarbh@example.com user
    const existingSandarbh = await prisma.user.findUnique({
      where: {
        orgId_email: {
          orgId: org.id,
          email: "sandarbh@example.com"
        }
      }
    });

    if (existingSandarbh) {
      console.log("\n👤 Updating sandarbh@example.com password...");

      await prisma.user.update({
        where: { id: existingSandarbh.id },
        data: {
          password: hashedPassword, // Same password for consistency
          role: "SUPER_ADMIN"
        }
      });

      console.log("✅ sandarbh@example.com password updated");
    }

    console.log("\n🎉 Admin setup completed successfully!");
    console.log("\n📧 Login Credentials:");
    console.log("   Email: admin@cms.com");
    console.log("   Password: Admin123!");
    console.log("\n   OR");
    console.log("\n   Email: sandarbh@example.com");
    console.log("   Password: Admin123!");
  } catch (error) {
    console.error("❌ Error adding admin:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
addSuperAdmin()
  .then(() => {
    console.log("\n✅ Script completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Script failed:", error);
    process.exit(1);
  });
