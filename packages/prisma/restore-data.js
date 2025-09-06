const { PrismaClient } = require("./generated/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function restoreData() {
  try {
    console.log("Starting data restore...");

    // Read backup file
    const backupData = JSON.parse(fs.readFileSync("data-backup.json", "utf8"));
    const { data } = backupData;

    console.log(`📅 Restoring backup from: ${backupData.timestamp}`);

    // Restore in dependency order

    // 1. Organizations (no dependencies)
    if (data.organizations.length > 0) {
      console.log(`Restoring ${data.organizations.length} organizations...`);
      for (const org of data.organizations) {
        await prisma.organization.upsert({
          where: { id: org.id },
          update: org,
          create: org
        });
      }
    }

    // 2. Users (depends on organizations) - Handle self-referencing foreign keys
    if (data.users.length > 0) {
      console.log(`Restoring ${data.users.length} users...`);

      // First, create/update users without the self-referencing fields
      const usersWithoutRefs = data.users.map((user) => {
        const { createdBy, updatedBy, ...userWithoutRefs } = user;
        return userWithoutRefs;
      });

      for (const user of usersWithoutRefs) {
        try {
          await prisma.user.upsert({
            where: { id: user.id },
            update: user,
            create: user
          });
          console.log(`  ✓ User: ${user.email}`);
        } catch (error) {
          console.log(`  ⚠ Skipping existing user: ${user.email}`);
        }
      }

      // Then update with the self-referencing fields
      for (const user of data.users) {
        if (user.createdBy || user.updatedBy) {
          try {
            await prisma.user.update({
              where: { id: user.id },
              data: {
                createdBy: user.createdBy,
                updatedBy: user.updatedBy
              }
            });
          } catch (error) {
            console.log(`  ⚠ Could not update references for: ${user.email}`);
          }
        }
      }
    }

    // 3. Crew (depends on organizations and users)
    if (data.crew.length > 0) {
      console.log(`Restoring ${data.crew.length} crew members...`);
      for (const crewMember of data.crew) {
        await prisma.crew.create({ data: crewMember });
      }
    }

    // 4. Vessels (depends on organizations)
    if (data.vessels.length > 0) {
      console.log(`Restoring ${data.vessels.length} vessels...`);
      for (const vessel of data.vessels) {
        try {
          await prisma.vessel.upsert({
            where: { id: vessel.id },
            update: vessel,
            create: vessel
          });
          console.log(`  ✓ Vessel: ${vessel.name} (${vessel.imoNumber})`);
        } catch (error) {
          console.log(
            `  ❌ Failed to restore vessel: ${vessel.name} - ${error.message}`
          );
        }
      }
    }

    // 5. Vessel Rank Requirements (depends on vessels)
    if (data.vesselRankRequirements.length > 0) {
      console.log(
        `Restoring ${data.vesselRankRequirements.length} vessel rank requirements...`
      );
      for (const req of data.vesselRankRequirements) {
        await prisma.vesselRankRequirement.create({ data: req });
      }
    }

    // 6. Vessel Assignments (depends on vessels and crew)
    if (data.vesselAssignments.length > 0) {
      console.log(
        `Restoring ${data.vesselAssignments.length} vessel assignments...`
      );
      for (const assignment of data.vesselAssignments) {
        await prisma.vesselAssignment.create({ data: assignment });
      }
    }

    // 7. Documents (depends on crew)
    if (data.documents.length > 0) {
      console.log(`Restoring ${data.documents.length} documents...`);
      for (const doc of data.documents) {
        await prisma.document.create({ data: doc });
      }
    }

    // 8. Training Partners (no dependencies)
    if (data.trainingPartners.length > 0) {
      console.log(
        `Restoring ${data.trainingPartners.length} training partners...`
      );
      for (const partner of data.trainingPartners) {
        await prisma.trainingPartner.create({ data: partner });
      }
    }

    // 9. Courses (depends on training partners)
    if (data.courses.length > 0) {
      console.log(`Restoring ${data.courses.length} courses...`);
      for (const course of data.courses) {
        await prisma.course.create({ data: course });
      }
    }

    // 10. Training Records (depends on crew and courses)
    if (data.trainingRecords.length > 0) {
      console.log(
        `Restoring ${data.trainingRecords.length} training records...`
      );
      for (const record of data.trainingRecords) {
        await prisma.trainingRecord.create({ data: record });
      }
    }

    // 11. Consultancy Partners (no dependencies)
    if (data.consultancyPartners.length > 0) {
      console.log(
        `Restoring ${data.consultancyPartners.length} consultancy partners...`
      );
      for (const partner of data.consultancyPartners) {
        await prisma.consultancyPartner.create({ data: partner });
      }
    }

    // 12. Audit Logs (depends on users)
    if (data.auditLogs.length > 0) {
      console.log(`Restoring ${data.auditLogs.length} audit logs...`);
      for (const log of data.auditLogs) {
        await prisma.auditLog.create({ data: log });
      }
    }

    console.log("✅ Data restore completed successfully!");
  } catch (error) {
    console.error("❌ Restore failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

restoreData();
