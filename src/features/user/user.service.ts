import {Repository} from "typeorm";
import {UserEntity} from "../../shared/entity/user.entity";
import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {GetProductbyIdDto} from "../../shared/dto/product/getProductbyId-dto";
import {ObjectId} from "mongodb";
import {ErrorMapping} from "../../shared/config/errorMapping";
import {GetUserByIdDto} from "../../shared/dto/user/getUserById-dto";
import {CommonFunction} from "../../shared/util/commonFunction";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly commonFunction: CommonFunction,
    ) {
    }

    async getAllUsers(): Promise<any> {
        try {
            const users = await this.userRepository.find();
            return {
                users: users
            }
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async getUserById(payload: GetUserByIdDto): Promise<any> {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    _id: new ObjectId(payload.userId)
                }
            })
            if (!user) {
                return this.commonFunction.errorResponse(ErrorMapping.PRODUCT_NOT_FOUND)
            }
            return {user: user}
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("Failed to get the user")
        }
    }
}