import { IsString, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  content: string;

  @IsInt()
  taskId: number;

  @IsInt()
  developerId: number;
}
