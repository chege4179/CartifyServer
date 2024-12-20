import {OrderService} from "./order.service";
import {Controller} from "@nestjs/common";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {
    }

}