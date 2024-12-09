import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/modules/users/users.module';
import { ProjectsModule } from 'src/modules/projects/projects.module';
import { TasksModule } from 'src/modules/tasks/tasks.module';
import { AuthModule } from 'src/modules/auth/auth.module';


@Module({
  imports: [AuthModule, UsersModule, ProjectsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
