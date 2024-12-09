import { IsString, IsNotEmpty, IsEmail, IsBoolean, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsBoolean()
    isAdmin: boolean;

    @IsString()
    imageSrc: string;
}