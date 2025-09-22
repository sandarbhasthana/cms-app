import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@cms-app/prisma';
import { CrewService } from './crew.service';
import { CreateCrewDto, SearchCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';
import { AssignCrewDto, ReleaseAssignmentDto } from './dto/assign-crew.dto';
import { AuthenticatedRequest } from '../../common/types/authenticated-request';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(
  Role.SUPER_ADMIN,
  Role.ADMIN,
  Role.HR,
  Role.CREW_COORDINATOR,
  Role.SCHEDULER,
)
@Controller('crew')
export class CrewController {
  constructor(private readonly service: CrewService) {}

  @Post()
  create(@Body() dto: CreateCrewDto, @Req() req: AuthenticatedRequest) {
    return this.service.create(dto, req.user);
  }

  @Get()
  list(@Query() q: SearchCrewDto, @Req() req: AuthenticatedRequest) {
    return this.service.list(q, req.user);
  }

  @Get(':id')
  get(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.service.get(id, req.user);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCrewDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.update(id, dto, req.user);
  }

  @Patch(':id/deactivate')
  deactivate(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.service.deactivate(id, req.user);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    // Map DELETE to deactivate for Refine compatibility
    return this.service.deactivate(id, req.user);
  }

  // Assignment endpoints
  @Post(':id/assign')
  assign(
    @Param('id') crewId: string,
    @Body() dto: AssignCrewDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.assign(crewId, dto, req.user);
  }

  @Patch('assignments/:assignmentId/release')
  release(
    @Param('assignmentId') assignmentId: string,
    @Body() dto: ReleaseAssignmentDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.release(assignmentId, dto, req.user);
  }
}
