import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DevelopersService {
  constructor(private prismaService: PrismaService) {}

  create(createDeveloperDto: CreateDeveloperDto) {
    return this.prismaService.developer.create({ data: createDeveloperDto });
  }

  findAll() {
    return this.prismaService.developer.findMany({
      include: { projects: true, tasks: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.developer.findUnique({
      where: { id },
      include: { projects: true, tasks: true },
    });
  }

  update(id: number, updateDeveloperDto: UpdateDeveloperDto) {
    return this.prismaService.developer.update({
      where: { id },
      data: updateDeveloperDto,
    });
  }

  remove(id: number) {
    return this.prismaService.developer.delete({ where: { id } });
  }
}
