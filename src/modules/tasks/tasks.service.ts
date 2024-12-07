import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateTaskDto) {
    return this.prismaService.task.create({
      data: {
        ...data,
        developers: {
          connect: data.developers.map((developerId) => ({ id: developerId })),
        },
      },
      include: {
        project: true,
        developers: true,
      },
    });
  }

  async findAll() {
    return this.prismaService.task.findMany({
      include: {
        project: true,
        developers: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prismaService.task.findUnique({
      where: { id },
      include: {
        project: true,
        developers: true,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { developers, ...rest } = updateTaskDto;
    return this.prismaService.task.update({
      where: { id },
      data: {
        ...rest,
        developers: developers ? {
          set: developers.map((developerId) => ({ id: developerId })),
        } : undefined, 
      },
      include: {
        project: true,
        developers: true,
      },
    });
  }

  async remove(id: number) {
    return this.prismaService.task.delete({
      where: { id },
    });
  }
}
