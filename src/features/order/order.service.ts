import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {OrderEntity} from "../../shared/entity/order.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
    ) {
    }

    async getAllOrders(): Promise<any> {
        try {
            const orders = await this.orderRepository.find();
            return { orders }
        }catch (error) {
            Logger.error(error);
            throw new BadRequestException("Failed to get all orders");
        }

    }
}