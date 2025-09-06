const { PrismaClient } = require('./generated/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function backupData() {
  try {
    console.log('Starting data backup...');
    
    // Backup all tables
    const organizations = await prisma.organization.findMany();
    const users = await prisma.user.findMany();
    const auditLogs = await prisma.auditLog.findMany();
    const crew = await prisma.crew.findMany();
    const vessels = await prisma.vessel.findMany();
    const vesselRankRequirements = await prisma.vesselRankRequirement.findMany();
    const vesselAssignments = await prisma.vesselAssignment.findMany();
    const documents = await prisma.document.findMany();
    const consultancyPartners = await prisma.consultancyPartner.findMany();
    const trainingPartners = await prisma.trainingPartner.findMany();
    const courses = await prisma.course.findMany();
    const trainingRecords = await prisma.trainingRecord.findMany();

    const backup = {
      timestamp: new Date().toISOString(),
      data: {
        organizations,
        users,
        auditLogs,
        crew,
        vessels,
        vesselRankRequirements,
        vesselAssignments,
        documents,
        consultancyPartners,
        trainingPartners,
        courses,
        trainingRecords
      }
    };

    fs.writeFileSync('data-backup.json', JSON.stringify(backup, null, 2));
    console.log('✅ Data backup completed successfully!');
    console.log(`📊 Backup summary:`);
    console.log(`   - Organizations: ${organizations.length}`);
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Audit Logs: ${auditLogs.length}`);
    console.log(`   - Crew: ${crew.length}`);
    console.log(`   - Vessels: ${vessels.length}`);
    console.log(`   - Vessel Rank Requirements: ${vesselRankRequirements.length}`);
    console.log(`   - Vessel Assignments: ${vesselAssignments.length}`);
    console.log(`   - Documents: ${documents.length}`);
    console.log(`   - Consultancy Partners: ${consultancyPartners.length}`);
    console.log(`   - Training Partners: ${trainingPartners.length}`);
    console.log(`   - Courses: ${courses.length}`);
    console.log(`   - Training Records: ${trainingRecords.length}`);
    
  } catch (error) {
    console.error('❌ Backup failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

backupData();
