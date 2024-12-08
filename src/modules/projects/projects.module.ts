import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from 'src/modules/uploads/upload.service';
import { EnsureUploadProjectsPathExistsMiddleware } from 'src/middlewares/uploadpath.middleware';

@Module({
  imports: [
    PrismaModule,
    MulterModule.registerAsync({
      useClass: UploadService,
    }),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService, UploadService],
})
export class ProjectsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureUploadProjectsPathExistsMiddleware)
      .forRoutes({ path: 'projects/:id/upload-project-file', method: RequestMethod.POST });
  }
}