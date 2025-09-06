const { PrismaClient } = require('./generated/client');

const prisma = new PrismaClient();

async function checkTables() {
  try {
    console.log('Checking database tables...');
    
    // Check if VesselUserRoleMap table exists by trying to query it
    try {
      const vesselUserRoleMaps = await prisma.vesselUserRoleMap.findMany();
      console.log(`✅ VesselUserRoleMap table exists with ${vesselUserRoleMaps.length} records`);
    } catch (error) {
      console.log(`❌ VesselUserRoleMap table does NOT exist: ${error.message}`);
    }
    
    // Check other vessel-related tables
    try {
      const vessels = await prisma.vessel.findMany();
      console.log(`✅ Vessel table exists with ${vessels.length} records`);
    } catch (error) {
      console.log(`❌ Vessel table issue: ${error.message}`);
    }
    
    try {
      const vesselAssignments = await prisma.vesselAssignment.findMany();
      console.log(`✅ VesselAssignment table exists with ${vesselAssignments.length} records`);
    } catch (error) {
      console.log(`❌ VesselAssignment table issue: ${error.message}`);
    }
    
    try {
      const vesselRankRequirements = await prisma.vesselRankRequirement.findMany();
      console.log(`✅ VesselRankRequirement table exists with ${vesselRankRequirements.length} records`);
    } catch (error) {
      console.log(`❌ VesselRankRequirement table issue: ${error.message}`);
    }
    
    // Let's also check what tables actually exist using raw SQL
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `;
    
    console.log('\n📋 All tables in database:');
    tables.forEach(table => console.log(`   - ${table.table_name}`));
    
  } catch (error) {
    console.error('❌ Check failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkTables();
