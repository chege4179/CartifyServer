import {Repository} from "typeorm";
import {UserEntity} from "../../shared/entity/user.entity";
import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async getAllUsers(): Promise<any> {
        try {
            const users = await this.userRepository.find();
            return {
                users:users
            }
        } catch (error) {
            throw new BadRequestException(error);
        }

    }


}