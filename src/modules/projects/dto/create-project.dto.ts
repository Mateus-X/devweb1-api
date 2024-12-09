import { Status } from "@prisma/client";

export class CreateProjectDto {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    status: Status;
}