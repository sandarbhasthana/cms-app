const { PrismaClient } = require('./generated/client');

const prisma = new PrismaClient();

async function checkMigrationSafety() {
  try {
    console.log('🔍 Checking migration safety...\n');
    
    // Check 1: VesselRole enum values in use
    console.log('1. Checking VesselRole enum usage...');
    try {
      const vesselAssignments = await prisma.$queryRaw`
        SELECT DISTINCT role FROM "VesselAssignment"
      `;
      console.log('   VesselRole values in VesselAssignment:', vesselAssignments.map(r => r.role));
      
      const vesselRankReqs = await prisma.$queryRaw`
        SELECT DISTINCT role FROM "VesselRankRequirement"
      `;
      console.log('   VesselRole values in VesselRankRequirement:', vesselRankReqs.map(r => r.role));
    } catch (error) {
      console.log('   ⚠️ Could not check VesselRole usage:', error.message);
    }
    
    // Check 2: isActive column data
    console.log('\n2. Checking Vessel.isActive column...');
    try {
      const activeVessels = await prisma.$queryRaw`
        SELECT id, name, "isActive" FROM "Vessel" WHERE "isActive" IS NOT NULL
      `;
      console.log(`   Found ${activeVessels.length} vessels with isActive data:`);
      activeVessels.forEach(v => console.log(`     - ${v.name}: isActive = ${v.isActive}`));
    } catch (error) {
      console.log('   ⚠️ Could not check isActive column:', error.message);
    }
    
    // Check 3: Potential unique constraint violations
    console.log('\n3. Checking for potential unique constraint violations...');
    
    // Check User id,orgId duplicates
    try {
      const userDuplicates = await prisma.$queryRaw`
        SELECT id, "orgId", COUNT(*) as count
        FROM "User"
        GROUP BY id, "orgId"
        HAVING COUNT(*) > 1
      `;
      if (userDuplicates.length > 0) {
        console.log('   ❌ Found User (id,orgId) duplicates:', userDuplicates);
      } else {
        console.log('   ✅ No User (id,orgId) duplicates found');
      }
    } catch (error) {
      console.log('   ⚠️ Could not check User duplicates:', error.message);
    }
    
    // Check Vessel id,orgId duplicates
    try {
      const vesselDuplicates = await prisma.$queryRaw`
        SELECT id, "orgId", COUNT(*) as count
        FROM "Vessel"
        GROUP BY id, "orgId"
        HAVING COUNT(*) > 1
      `;
      if (vesselDuplicates.length > 0) {
        console.log('   ❌ Found Vessel (id,orgId) duplicates:', vesselDuplicates);
      } else {
        console.log('   ✅ No Vessel (id,orgId) duplicates found');
      }
    } catch (error) {
      console.log('   ⚠️ Could not check Vessel duplicates:', error.message);
    }
    
    // Check if Crew table has userId column (it shouldn't exist yet)
    console.log('\n4. Checking Crew table structure...');
    try {
      const crewColumns = await prisma.$queryRaw`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'Crew' AND table_schema = 'public'
      `;
      const hasUserId = crewColumns.some(col => col.column_name === 'userId');
      console.log(`   Crew table has userId column: ${hasUserId}`);
      
      if (hasUserId) {
        const crewUserIdDuplicates = await prisma.$queryRaw`
          SELECT "userId", COUNT(*) as count
          FROM "Crew"
          WHERE "userId" IS NOT NULL
          GROUP BY "userId"
          HAVING COUNT(*) > 1
        `;
        if (crewUserIdDuplicates.length > 0) {
          console.log('   ❌ Found Crew userId duplicates:', crewUserIdDuplicates);
        } else {
          console.log('   ✅ No Crew userId duplicates found');
        }
      }
    } catch (error) {
      console.log('   ⚠️ Could not check Crew structure:', error.message);
    }
    
    console.log('\n📋 Summary:');
    console.log('   - Review the VesselRole enum values above');
    console.log('   - Check if you need the isActive data');
    console.log('   - Ensure no duplicate constraint violations');
    console.log('\n💡 If everything looks safe, you can proceed with the migration.');
    
  } catch (error) {
    console.error('❌ Safety check failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkMigrationSafety();
