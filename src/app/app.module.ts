import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from 'src/modules/projects/projects.module';
import { DevelopersModule } from 'src/modules/developers/developers.module';
import { TasksModule } from 'src/modules/tasks/tasks.module';
import { CommentsModule } from 'src/modules/comments/comments.module';

@Module({
  imports: [DevelopersModule, ProjectsModule, TasksModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
