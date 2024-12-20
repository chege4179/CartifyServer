import {Injectable, Logger} from "@nestjs/common";
import {LoginUserDto} from "../../shared/dto/auth/loginUser-dto";
import bcrypt from "bcryptjs";
import {Repository} from "typeorm";
import {UserEntity} from "../../shared/entity/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {SignUpUserDto} from "../../shared/dto/auth/signUpUser-dto";
import {CommonFunction} from "../../shared/util/commonFunction";
import {ErrorMapping} from "../../shared/config/errorMapping";


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly commonFunction:CommonFunction,
    ) {
    }

    async loginUser(payload: LoginUserDto) {
        const findUser = await this.userRepository.findOne({
            where: {
                email: payload.email,
            }
        })

        if (findUser === null) {
            return this.commonFunction.errorResponse(ErrorMapping.INVALID_CREDENTIALS)
        }
        const hashPassword = findUser.password

        if (bcrypt.compareSync(payload.password, hashPassword)) {
            return {
                msg: 'Login successful',
                success: true,
                user: findUser,
            }
        } else {
            return this.commonFunction.errorResponse(ErrorMapping.INVALID_CREDENTIALS)
        }
    }


    async signUpUser(payload: SignUpUserDto) {
        try {
            const existingUser = await this.userRepository.findOne({where: {email: payload.email}});
            if (existingUser) {
                return {
                    msg: 'A user with the similar email address already exists',
                    success: false
                }
            } else {
                const newUser = new UserEntity()
                newUser.email = payload.email;
                newUser.password = payload.password;
                newUser.address = payload.address
                newUser.isVerified = false
                newUser.phoneNumber = payload.phoneNumber
                newUser.fullname = payload.fullname

                await this.userRepository.save(newUser);

                return {
                    msg: 'New User created successfully',
                    success: true
                }
            }
        } catch (e) {

        }
    }
}
