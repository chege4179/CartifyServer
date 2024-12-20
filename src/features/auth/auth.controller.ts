import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {LoginUserDto} from "../../shared/dto/auth/loginUser-dto";
import {AuthService} from "./auth.service";
import {SignUpUserDto} from "../../shared/dto/auth/signUpUser-dto";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    loginUser(@Body() payload: LoginUserDto) {
        return this.authService.loginUser(payload);
    }

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    signUpUser(@Body() payload: SignUpUserDto) {
        return this.authService.signUpUser(payload)
    }

}
