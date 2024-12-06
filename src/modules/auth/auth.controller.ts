import { Controller } from '@nestjs/common';
import { PrismaService } from '@db';

@Controller('auth')
export class AuthController {
    constructor(private readonly prisma: PrismaService) {}
} 