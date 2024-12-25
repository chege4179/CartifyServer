import {OrderService} from "./order.service";
import {Controller, Get, HttpCode, HttpStatus} from "@nestjs/common";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {
    }


    @Get("all")
    @HttpCode(HttpStatus.OK)
    getAllOrders(){
        return this.orderService.getAllOrders();
    }

}