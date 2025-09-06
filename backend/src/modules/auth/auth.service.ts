import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { Role } from '@cms-app/prisma';

// Authenticated user shape for JWT payload
interface AuthenticatedUser {
  id: string;
  email: string;
  role: Role;
  orgId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // Validate credentials and return sanitized user
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      console.warn(
        `[AuthService] Login failed: No user found with email ${email}`,
      );
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      console.warn(
        `[AuthService] Login failed: Incorrect password for ${email}`,
      );
      throw new UnauthorizedException('Invalid credentials');
    }

    // Optionally check if user is soft-deleted (if soft delete is implemented)
    // if (user.deletedAt) {
    //   throw new UnauthorizedException('User account is deactivated');
    // }

    // Exclude password from returned object
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }

  // Sign and return access token
  login(user: AuthenticatedUser) {
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      orgId: user.orgId,
    };

    const signOptions = {
      algorithm: (process.env.JWT_ALGORITHM as 'HS256' | 'RS256') || 'HS256',
      expiresIn: '1h',
      ...(process.env.JWT_ISSUER && { issuer: process.env.JWT_ISSUER }),
      ...(process.env.JWT_AUDIENCE && { audience: process.env.JWT_AUDIENCE }),
    };

    const token = this.jwtService.sign(payload, signOptions);

    return {
      access_token: token,
    };
  }
}
