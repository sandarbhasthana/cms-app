// migrate-data.js - Migrate data from localhost to cloud database
const { PrismaClient } = require('./generated/client');

// Source database (localhost)
const sourceDb = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://postgres:Pulak91@localhost:5432/cms"
    }
  }
});

// Target database (Prisma Accelerate)
const targetDb = new PrismaClient({
  datasources: {
    db: {
      url: "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19rSG9oRlRvUlU0Z3pQSWhRbDVZcUEiLCJhcGlfa2V5IjoiMDFLNVZZSFM3UENLUTNaSEpSUUM4NkVLMkUiLCJ0ZW5hbnRfaWQiOiJjZjNlZWQ0YTM3NjhlZDFmNTU5MGVmYmI4YjhkZTQxOGQ5MTg2MzMwNjc4ZjRkYzA1NTdiOTZmMmE5MGU1Y2Y2IiwiaW50ZXJuYWxfc2VjcmV0IjoiYTBkMWMwMzEtYjI4YS00YTg0LTkxYjktNWEwMGVhMGU1NDg4In0.c5017TmB9K588HVus8Mf-EoDc01uAJujoRMkA30vNRM"
    }
  }
});

async function migrateData() {
  console.log('🚀 Starting data migration from localhost to cloud database...\n');

  try {
    // Test connections
    console.log('🔍 Testing database connections...');
    await sourceDb.$connect();
    await targetDb.$connect();
    console.log('✅ Both databases connected successfully\n');

    // 1. Migrate Organizations
    console.log('📋 Migrating Organizations...');
    const organizations = await sourceDb.organization.findMany();
    console.log(`Found ${organizations.length} organizations`);
    
    for (const org of organizations) {
      await targetDb.organization.upsert({
        where: { id: org.id },
        update: org,
        create: org,
      });
    }
    console.log('✅ Organizations migrated\n');

    // 2. Migrate Users
    console.log('👥 Migrating Users...');
    const users = await sourceDb.user.findMany();
    console.log(`Found ${users.length} users`);
    
    for (const user of users) {
      await targetDb.user.upsert({
        where: { id: user.id },
        update: {
          email: user.email,
          password: user.password,
          role: user.role,
          name: user.name,
          orgId: user.orgId,
          createdBy: user.createdBy,
          updatedBy: user.updatedBy,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        create: user,
      });
    }
    console.log('✅ Users migrated\n');

    // 3. Migrate Vessels
    console.log('🚢 Migrating Vessels...');
    const vessels = await sourceDb.vessel.findMany();
    console.log(`Found ${vessels.length} vessels`);
    
    for (const vessel of vessels) {
      await targetDb.vessel.upsert({
        where: { id: vessel.id },
        update: {
          name: vessel.name,
          type: vessel.type,
          flag: vessel.flag,
          imo: vessel.imo,
          callSign: vessel.callSign,
          mmsi: vessel.mmsi,
          orgId: vessel.orgId,
          createdBy: vessel.createdBy,
          updatedBy: vessel.updatedBy,
          createdAt: vessel.createdAt,
          updatedAt: vessel.updatedAt,
        },
        create: vessel,
      });
    }
    console.log('✅ Vessels migrated\n');

    // 4. Migrate Crew
    console.log('👨‍⚓ Migrating Crew...');
    const crew = await sourceDb.crew.findMany();
    console.log(`Found ${crew.length} crew members`);
    
    for (const crewMember of crew) {
      await targetDb.crew.upsert({
        where: { id: crewMember.id },
        update: {
          firstName: crewMember.firstName,
          lastName: crewMember.lastName,
          position: crewMember.position,
          nationality: crewMember.nationality,
          dateOfBirth: crewMember.dateOfBirth,
          passportNumber: crewMember.passportNumber,
          seamanBookNumber: crewMember.seamanBookNumber,
          medicalCertificateExpiry: crewMember.medicalCertificateExpiry,
          basicSafetyTrainingExpiry: crewMember.basicSafetyTrainingExpiry,
          userId: crewMember.userId,
          orgId: crewMember.orgId,
          createdBy: crewMember.createdBy,
          updatedBy: crewMember.updatedBy,
          createdAt: crewMember.createdAt,
          updatedAt: crewMember.updatedAt,
        },
        create: crewMember,
      });
    }
    console.log('✅ Crew migrated\n');

    // 5. Migrate VesselUserRoleMap
    console.log('🔗 Migrating Vessel User Role Maps...');
    const vesselUserRoleMaps = await sourceDb.vesselUserRoleMap.findMany();
    console.log(`Found ${vesselUserRoleMaps.length} vessel user role maps`);
    
    for (const map of vesselUserRoleMaps) {
      await targetDb.vesselUserRoleMap.upsert({
        where: { id: map.id },
        update: {
          userId: map.userId,
          vesselId: map.vesselId,
          role: map.role,
          orgId: map.orgId,
          createdBy: map.createdBy,
          updatedBy: map.updatedBy,
          createdAt: map.createdAt,
          updatedAt: map.updatedAt,
        },
        create: map,
      });
    }
    console.log('✅ Vessel User Role Maps migrated\n');

    // Summary
    console.log('🎉 Data migration completed successfully!');
    console.log(`📊 Migration Summary:`);
    console.log(`   • ${organizations.length} Organizations`);
    console.log(`   • ${users.length} Users`);
    console.log(`   • ${vessels.length} Vessels`);
    console.log(`   • ${crew.length} Crew Members`);
    console.log(`   • ${vesselUserRoleMaps.length} Vessel User Role Maps`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    await sourceDb.$disconnect();
    await targetDb.$disconnect();
  }
}

// Run the migration
migrateData()
  .then(() => {
    console.log('\n✅ Migration script completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Migration script failed:', error);
    process.exit(1);
  });
