import {IsNotEmpty} from 'class-validator';

export class UpdatePasswordDto {

    @IsNotEmpty()
    old_password: string;
    
    @IsNotEmpty()
    new_password: string;

}