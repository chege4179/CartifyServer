import {BadRequestException, Injectable, Logger} from "@nestjs/common";
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
        try {
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
                delete findUser.password
                return {
                    msg: 'Login successful',
                    success: true,
                    user: findUser,
                }
            } else {
                return this.commonFunction.errorResponse(ErrorMapping.INVALID_CREDENTIALS)
            }
        }catch (error) {
            Logger.error(error)
            throw new BadRequestException(error)
        }
    }


    async signUpUser(payload: SignUpUserDto) {
        try {
            const existingUser = await this.userRepository.findOne({where: {email: payload.email}});
            if (existingUser) {
                return this.commonFunction.errorResponse(ErrorMapping.EXISTING_USER)

            } else {
                const newUser = new UserEntity()
                newUser.email = payload.email;
                newUser.password = payload.password;
                newUser.address = payload.address
                newUser.isVerified = false
                newUser.phoneNumber = payload.phoneNumber
                newUser.fullname = payload.fullname

                const savedUser = await this.userRepository.save(newUser);

                return {
                    msg: 'New User created successfully',
                    success: true,
                    user: savedUser,
                }
            }
        } catch (e) {
            Logger.error(e)
            return this.commonFunction.errorResponse(e)
        }
    }
}
