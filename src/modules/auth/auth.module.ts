import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [], 
  providers: [AuthService],
  controllers: [AuthController],
})

export class AuthModule {}