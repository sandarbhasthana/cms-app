import {
  Controller,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@cms-app/prisma';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { ReleaseAssignmentDto } from './dto/release-assignment.dto';
import { AuthenticatedRequest } from '../../common/types/authenticated-request';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.HR, Role.CREW_COORDINATOR)
@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly service: AssignmentsService) {}

  @Post()
  create(@Body() dto: CreateAssignmentDto, @Req() req: AuthenticatedRequest) {
    return this.service.create(dto, req.user);
  }

  @Patch(':id/release')
  release(
    @Param('id') id: string,
    @Body() body: ReleaseAssignmentDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.release(id, body, req.user);
  }
}
