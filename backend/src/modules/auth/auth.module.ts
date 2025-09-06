import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from '../../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        console.log(
          '[JwtModule] JWT_SECRET from ConfigService:',
          secret ? 'LOADED' : 'MISSING',
        );

        if (!secret) {
          throw new Error('JWT_SECRET is not defined in environment variables');
        }

        return {
          secret,
          signOptions: {
            expiresIn: '60m',
            algorithm:
              (configService.get<string>('JWT_ALGORITHM') as
                | 'HS256'
                | 'RS256') ?? 'HS256',
            ...(configService.get<string>('JWT_ISSUER') && {
              issuer: configService.get<string>('JWT_ISSUER'),
            }),
            ...(configService.get<string>('JWT_AUDIENCE') && {
              audience: configService.get<string>('JWT_AUDIENCE'),
            }),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {
  constructor() {
    console.log(
      '[AuthModule] JWT_SECRET:',
      process.env.JWT_SECRET ? 'LOADED' : 'MISSING',
    );
    console.log('[AuthModule] JWT_ALGORITHM:', process.env.JWT_ALGORITHM);
  }
}
