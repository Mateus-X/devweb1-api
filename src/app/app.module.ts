import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from 'src/modules/projects/projects.module';
import { DevelopersModule } from 'src/modules/developers/developers.module';

@Module({
  imports: [DevelopersModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
