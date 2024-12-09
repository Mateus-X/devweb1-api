import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prismaService: PrismaService) {}

  

  create(createProjectDto: CreateProjectDto) {
    return this.prismaService.project.create({
      data: createProjectDto,
    });
  }

  findAll() {
    return this.prismaService.project.findMany();
  }

  findOne(id: number) {
    return this.prismaService.project.findUnique({
      where: { id },
      include: { projectUsers: true },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prismaService.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  updateProjectFile(id: number, filename: string) {
    return this.prismaService.project.update({
      where: { id },
      data: { imageSrc: `/uploads/projects/${filename}` },
    });
  }

  remove(id: number) {
    return this.prismaService.project.delete({
      where: { id },
    });
  }
}