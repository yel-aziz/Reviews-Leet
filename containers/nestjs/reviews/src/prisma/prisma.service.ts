import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
// const prisma = new PrismaClient()

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super()
  }
}

