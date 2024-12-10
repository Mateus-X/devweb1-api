import { IsString, IsOptional, IsEnum, IsISO8601, IsInt, IsArray } from 'class-validator';
import { TaskStatus } from '@prisma/client';

export class CreateTaskDto {
    @IsString()
    name: string;
  
    @IsString()
    description: string;
  
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
  
    @IsOptional()
    @IsISO8601()
    dueDate?: string;
  
    @IsInt()
    projectId: number; // Relaciona a task a um projeto
  
    @IsArray()
    @IsInt({ each: true })
    developers: number[]; // IDs dos desenvolvedores atribuídos
  }
  