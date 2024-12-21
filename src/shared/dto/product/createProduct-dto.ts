import {IsDefined, IsNotEmpty} from "@nestjs/class-validator";


export class CreateProductDto {

    @IsDefined()
    @IsNotEmpty()
    name:string

    @IsDefined()
    @IsNotEmpty()
    description:string

    @IsDefined()
    @IsNotEmpty()
    price:number


    @IsDefined()
    @IsNotEmpty()
    category:string


}