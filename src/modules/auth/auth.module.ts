import { Module } from '@nestjs/common';
import { PrismaService } from '@db';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [], 
  providers: [AuthService],
  controllers: [AuthController],
})

export class AuthModule {}