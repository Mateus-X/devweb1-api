import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from 'src/modules/uploads/upload.service';
import { EnsureUploadUsersPathExistsMiddleware } from 'src/middlewares/uploadpath.middleware';

@Module({
  imports: [
    PrismaModule,
    MulterModule.registerAsync({
      useClass: UploadService,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
