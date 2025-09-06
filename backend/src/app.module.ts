import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CrewModule } from './modules/crew/crew.module';
import { VesselModule } from './modules/vessel/vessel.module';
import { AssignmentsModule } from './modules/assignments/assignments.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';
//import { OnboardingModule } from './modules/onboarding/onboarding.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
      envFilePath: '.env', // Path to your .env file
    }),
    PrismaModule,
    UserModule,
    CrewModule,
    VesselModule,
    AuthModule,
    AssignmentsModule,
  ], //, OnboardingModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
