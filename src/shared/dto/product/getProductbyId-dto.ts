import {IsDefined, IsNotEmpty} from "@nestjs/class-validator";


export class GetProductbyIdDto {

    @IsNotEmpty()
    @IsDefined()
    productId: string;

}