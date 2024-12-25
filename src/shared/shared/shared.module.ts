import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../entity/user.entity";
import {ConfigModule} from "@nestjs/config";
import {ProductEntity} from "../entity/product.entity";
import {AdminEntity} from "../entity/admin.entity";
import {CommonFunction} from "../util/commonFunction";
import {OrderEntity} from "../entity/order.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forFeature([UserEntity, ProductEntity, AdminEntity, OrderEntity]),
    ],
    providers: [
        CommonFunction,
    ],
    exports: [
        TypeOrmModule,
        ConfigModule,
        CommonFunction,
    ],

})
export class SharedModule {
}