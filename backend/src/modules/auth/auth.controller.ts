import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../../common/types/authenticated-request';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req: AuthenticatedRequest) {
    const user = req.user;
    return this.authService.login(user);
  }
}
