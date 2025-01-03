import {Module} from "@nestjs/common";
import {ProductService} from "./product.service";
import {ProductController} from "./product.controller";
import {SharedModule} from "../../shared/shared/shared.module";


@Module({
    imports: [SharedModule],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}