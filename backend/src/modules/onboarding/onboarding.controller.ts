// import {
//   Body,
//   Controller,
//   Post,
//   UseGuards,
//   ForbiddenException,
// } from '@nestjs/common';
// import { OnboardingService } from './onboarding.service';
// import { ProvisionAdminDto } from './dto/provision-admin.dto';
// import { AuthGuard } from '@nestjs/passport';
// import { Roles } from '../../common/decorators/roles.decorator';
// import { Role } from '../../../generated/prisma';

// @Controller('onboarding')
// @UseGuards(AuthGuard('jwt'))
// export class OnboardingController {
//   constructor(private readonly onboardingService: OnboardingService) {}

//   @Roles(Role.SUPER_ADMIN) // 🔐 restrict this route
//   @Post('provision')
//   async provisionOrg(@Body() dto: ProvisionAdminDto) {
//     return this.onboardingService.provisionAdmin(dto);
//   }
// }
