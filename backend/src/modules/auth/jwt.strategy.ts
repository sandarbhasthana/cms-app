import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from '@cms-app/prisma';
import * as jwksRsa from 'jwks-rsa';
import { PrismaService } from '../../prisma/prisma.service';

// JWT Payload structure
export interface JwtPayload {
  sub: string;
  email: string;
  name?: string;
  role: Role;
  orgId: string;
  iat?: number;
  exp?: number;
  iss?: string;
  aud?: string;
}

// Determine algorithm from env or fallback
const getJwtAlgorithm = (): 'HS256' | 'RS256' => {
  const allowedAlgs: readonly ('HS256' | 'RS256')[] = ['HS256', 'RS256'];
  const envAlg = process.env.JWT_ALGORITHM;
  return envAlg && allowedAlgs.includes(envAlg as 'HS256' | 'RS256')
    ? (envAlg as 'HS256' | 'RS256')
    : 'HS256';
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    const strategyOptions = process.env.JWKS_URI
      ? {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKeyProvider: jwksRsa.passportJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 10,
            jwksUri: process.env.JWKS_URI,
          }),
          algorithms: [getJwtAlgorithm()],
          issuer: process.env.JWT_ISSUER,
          audience: process.env.JWT_AUDIENCE,
        }
      : {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.JWT_SECRET!,
          algorithms: [getJwtAlgorithm()],
          ...(process.env.JWT_ISSUER && { issuer: process.env.JWT_ISSUER }),
          ...(process.env.JWT_AUDIENCE && {
            audience: process.env.JWT_AUDIENCE,
          }),
        };

    super(strategyOptions);

    // console.log(
    //   `[JWT] Strategy initialized with ${process.env.JWKS_URI ? 'JWKS' : 'static secret'} mode.`,
    // );
  }

  async validate(payload: JwtPayload) {
    if (!payload.sub || !payload.email || !payload.role || !payload.orgId) {
      throw new UnauthorizedException('Invalid JWT payload');
    }

    try {
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: {
          id: true,
          email: true,
          role: true,
          orgId: true,
          name: true,
        },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      if (user.orgId !== payload.orgId) {
        throw new UnauthorizedException('Organization mismatch');
      }

      console.log(
        `[Auth] ✅ Authenticated ${user.email} (Role: ${user.role}) in org ${user.orgId}`,
      );

      console.log('✅ JWT payload decoded:', payload);

      return {
        id: user.id,
        email: user.email,
        role: user.role,
        orgId: user.orgId,
        name: user.name ?? payload.name ?? user.email.split('@')[0],
      };
    } catch {
      throw new UnauthorizedException(`User not found or unauthorized`);
    }
  }
}
