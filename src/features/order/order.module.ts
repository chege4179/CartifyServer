import {Module} from "@nestjs/common";
import {OrderService} from "./order.service";
import {OrderController} from "./order.controller";
import {SharedModule} from "../../shared/shared/shared.module";


@Module({
    imports: [SharedModule],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {}