import {IsDefined, IsEmail} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class LoginUserDto {
    @ApiProperty({description: 'Email'})
    @IsEmail()
    @IsDefined({message: 'Email is required'})
    email: string;

    @IsDefined({message: 'Password is required'})
    password: string;

}