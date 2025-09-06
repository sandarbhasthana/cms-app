import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@cms-app/prisma';
import { AuthenticatedRequest } from '../../common/types/authenticated-request';
import { Response } from 'express';
import { RolesGuard } from '../../common/guards/roles.guard';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Post()
  create(
    @Req() req: AuthenticatedRequest,
    @Body() createUserDto: CreateUserDto,
  ) {
    console.log('👤 req.user in CREATE:', req.user);
    const { orgId, id: userId } = req.user;
    return this.userService.create(createUserDto, orgId, userId);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN, Role.HR)
  @Get()
  async findAll(
    @Req() req: AuthenticatedRequest,
    @Res() res: Response,
    @Query('_page') page: string,
    @Query('_limit') limit: string,
    @Query('_sort') sort: string,
    @Query('_order') order: string,
    @Query('search') search: string,
    @Query('role') role: string,
  ) {
    const take = parseInt(limit || '10', 10);
    const skip = (parseInt(page || '1', 10) - 1) * take;

    const result = await this.userService.findPaginated(
      req.user.orgId,
      skip,
      take,
      sort,
      order as 'asc' | 'desc',
      search,
      role,
    );

    res.setHeader('x-total-count', result.total.toString());
    return res.json(result.data);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN, Role.HR)
  @Get(':id')
  findOne(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    return this.userService.findOne(id, req.user.orgId);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Patch(':id')
  update(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { orgId, id: userId } = req.user;
    return this.userService.update(id, updateUserDto, orgId, userId);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Delete(':id')
  remove(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    return this.userService.remove(id, req.user.orgId);
  }
}
