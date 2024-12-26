import {IsDefined, IsNotEmpty} from "class-validator";


export class GetOrderByIdDto{

    @IsNotEmpty()
    @IsDefined()
    orderId: string;
}