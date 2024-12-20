import {IsDefined, IsNotEmpty} from "class-validator";


export class SignUpUserDto {

    @IsNotEmpty()
    @IsDefined()
    fullname: string;

    @IsNotEmpty()
    @IsDefined()
    email: string;

    @IsNotEmpty()
    @IsDefined()
    phoneNumber: string;

    @IsNotEmpty()
    @IsDefined()
    password: string;

    @IsNotEmpty()
    @IsDefined()
    address: string;
}