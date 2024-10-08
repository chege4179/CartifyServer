import {Injectable} from "@nestjs/common";
import {LoginUserDto} from "../../shared/dto/auth/LoginUser.dto";
import {JwtService} from "@nestjs/jwt";

import UserModel from "../../old/Models/UserModel";
import bcrypt from "bcryptjs";


@Injectable()
export class AuthService {
    constructor(

        private jwtService: JwtService,

    ) {
    }


    async loginUser(payload: LoginUserDto) {

        try{
            const findUser = await UserModel.findOne({ email:payload.email })
            if (findUser === null){
                return {
                    msg:'No user with this email address exists',
                    success:false
                }
            }
            const hashpassword = ""
            if (bcrypt.compareSync(payload.password,hashpassword)){
                return {
                    msg:'Login successful',
                    success:true,
                    user:findUser,
                }
            }else {
                return {
                    msg:'Wrong credentials',
                    success:false
                }
            }

        }catch (e){
            console.log(e)
            return {
                msg:"An error ocurred",
                success:false
            }
        }

    }


}
