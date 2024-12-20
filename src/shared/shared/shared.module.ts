import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../entity/user.entity";
import {ConfigModule} from "@nestjs/config";
import {ProductEntity} from "../entity/product.entity";
import {AdminEntity} from "../entity/admin.entity";
import {CommonFunction} from "../util/commonFunction";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forFeature([UserEntity, ProductEntity, AdminEntity]),
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