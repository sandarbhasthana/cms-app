import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // By default passport-local expects 'username' & 'password'.
    // We tell it to use 'email' instead of 'username'.
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    console.log('[LocalStrategy] Login attempt for:', email);
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Passport will attach this object to req.user
    return user;
  }
}
