import {IsDefined, IsEmail, IsNotEmpty} from "class-validator";


export class LoginUserDto {
    @IsEmail()
    @IsDefined({message: 'Email is required'})
    email: string;

    @IsNotEmpty()
    @IsDefined({message: 'Password is required'})
    password: string;

}