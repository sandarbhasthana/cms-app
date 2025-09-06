import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { VesselService } from './vessel.service';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { ChangeVesselIdentifiersDto } from './dto/change-vessel-identifiers.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role, VesselType } from '@cms-app/prisma'; // adjust import if needed
import { AuthenticatedRequest } from '../../common/types/authenticated-request';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.HR, Role.CREW_COORDINATOR)
@Controller('vessels')
export class VesselController {
  constructor(private readonly vesselService: VesselService) {}

  @Post()
  create(
    @Body() createVesselDto: CreateVesselDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.vesselService.create(createVesselDto, req.user);
  }

  @Get()
  findAll(
    @Req() req: AuthenticatedRequest,
    @Query('q') q?: string,
    @Query('vesselType') vesselType?: VesselType,
    @Query('dueInDays') dueInDays?: string,
    @Query('overdue') overdue?: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    return this.vesselService.findAll(req.user, {
      q,
      vesselType,
      dueInDays: dueInDays ? Number(dueInDays) : undefined,
      overdue: overdue === 'true',
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.vesselService.findOne(id, req.user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVesselDto: UpdateVesselDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.vesselService.update(id, updateVesselDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.vesselService.remove(id, req.user);
  }

  @Get(':id/occupancy')
  occupancy(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.vesselService.getOccupancyNow(id, req.user);
  }

  @Patch(':id/identifiers')
  @Roles(Role.SUPER_ADMIN, Role.ADMIN) // More restrictive for identifier changes
  async changeIdentifiers(
    @Param('id') id: string,
    @Body() changeIdentifiersDto: ChangeVesselIdentifiersDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return await this.vesselService.changeIdentifiers(
      id,
      changeIdentifiersDto,
      req.user,
    );
  }

  @Get(':id/crew')
  listCrew(
    @Param('id') id: string,
    @Req() req: AuthenticatedRequest,
    @Query('active') active?: string,
  ) {
    return this.vesselService.listCrew(id, req.user, active !== 'false');
  }

  @Get(':id/requirements-gap')
  requirementsGap(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.vesselService.requirementsGap(id, req.user);
  }
}
