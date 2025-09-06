import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
// If you already have a PrismaModule that provides PrismaService, import it.
// Otherwise, remove this import and add PrismaService directly to providers.
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssignmentsController],
  providers: [AssignmentsService],
  exports: [AssignmentsService], // optional, useful if other modules need it
})
export class AssignmentsModule {}
