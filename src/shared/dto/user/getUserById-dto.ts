import {IsDefined,IsNotEmpty} from "@nestjs/class-validator";


export class GetUserByIdDto {

    @IsNotEmpty()
    @IsDefined()
    userId: string;
}