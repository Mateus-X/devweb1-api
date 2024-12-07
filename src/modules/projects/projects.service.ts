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
    return this.prismaService.project.findMany({ include: { creator: true } });
  }

  findOne(id: number) {
    return this.prismaService.project.findUnique({
      where: { id },
      include: { creator: true },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prismaService.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: number) {
    return this.prismaService.project.delete({
      where: { id },
    });
  }
}
