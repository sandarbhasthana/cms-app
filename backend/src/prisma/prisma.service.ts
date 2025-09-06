import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@cms-app/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    // Connect to the database when the module initializes
    await this.$connect();
  }

  async onModuleDestroy() {
    // Disconnect when the module is torn down
    await this.$disconnect();
  }
}
