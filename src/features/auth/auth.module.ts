import {Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../../shared/entity/user.entity";
import {SharedModule} from "../../shared/shared/shared.module";


@Module({
    imports: [SharedModule],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}