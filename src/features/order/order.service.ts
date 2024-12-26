import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {OrderEntity} from "../../shared/entity/order.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {GetOrderByIdDto} from "../../shared/dto/order/getOrderById-dto";
import {ObjectId} from "mongodb";
import {ErrorMapping} from "../../shared/config/errorMapping";
import {CommonFunction} from "../../shared/util/commonFunction";


@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
        private readonly commonFunction: CommonFunction
    ) {
    }

    async getAllOrders(): Promise<any> {
        try {
            const orders = await this.orderRepository.find();
            return {orders}
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("Failed to get all orders");
        }
    }

    async getOrderById(payload: GetOrderByIdDto): Promise<any> {
        try {
            const order = await this.orderRepository.findOne({
                where: {
                    _id: new ObjectId(payload.orderId)
                }
            })
            if (!order) {
                return this.commonFunction.errorResponse(ErrorMapping.PRODUCT_NOT_FOUND)
            }
            return {order}
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("Failed to get the order")
        }
    }

    async deleteOrderById(payload: GetOrderByIdDto): Promise<any> {
        try {
            const product = await this.orderRepository.findOne({
                where: {
                    _id: new ObjectId(payload.orderId)
                }
            })
            if (!product) {
                return this.commonFunction.errorResponse(ErrorMapping.PRODUCT_NOT_FOUND)
            }
            const result = await this.orderRepository.delete(payload.orderId)
            return {
                result
            }
        } catch (error) {
            Logger.error(error)
            throw new BadRequestException("Failed to delete order")

        }
    }
}