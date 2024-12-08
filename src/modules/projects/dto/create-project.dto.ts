import { Status } from "@prisma/client";

export class CreateProjectDto {
    title: string;
    description: string;
    imageSrc?: string;
    startDate: Date;
    endDate: Date;
    status: Status;
    developers: number[];
}