import {OrderService} from "./order.service";
import {Body, Controller, Get, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {GetProductbyIdDto} from "../../shared/dto/product/getProductbyId-dto";
import {GetOrderByIdDto} from "../../shared/dto/order/getOrderById-dto";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {
    }


    @Get("all")
    @HttpCode(HttpStatus.OK)
    getAllOrders(){
        return this.orderService.getAllOrders();
    }

    @Post("getOrderById")
    @HttpCode(HttpStatus.OK)
    async getOrderById(@Body() payload: GetOrderByIdDto): Promise<any> {
        return await this.orderService.getOrderById(payload);
    }


    @Post("deleteOrderById")
    @HttpCode(HttpStatus.OK)
    async deleteOrderById(@Body() payload: GetOrderByIdDto): Promise<any> {
        return await this.orderService.deleteOrderById(payload);
    }

}