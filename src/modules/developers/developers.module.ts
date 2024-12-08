// src/modules/developers/developers.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from 'src/modules/uploads/upload.service';
import { EnsureUploadDevelopersPathExistsMiddleware } from 'src/middlewares/uploadpath.middleware';

@Module({
  imports: [
    PrismaModule,
    MulterModule.registerAsync({
      useClass: UploadService,
    }),
  ],
  controllers: [DevelopersController],
  providers: [DevelopersService, UploadService],
})
export class DevelopersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureUploadDevelopersPathExistsMiddleware)
      .forRoutes({ path: 'developers/:id/upload-profile-picture', method: RequestMethod.POST });
  }
}