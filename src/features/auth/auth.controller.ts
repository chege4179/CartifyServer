import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {LoginUserDto} from "../../shared/dto/auth/LoginUser.dto";
import {AuthService} from "./auth.service";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}


    @Post('login')
    @HttpCode(HttpStatus.OK)
    loginUser(@Body() payload: LoginUserDto) {
        return this.authService.loginUser(payload);
    }


    // @Post('signup')
    // @HttpCode(HttpStatus.CREATED)
    // signUpUser(@Body() payload: SignUpUserDto) {
    //     return this.authService.signUpUser(payload)
    // }
    //
    // @UseGuards(AuthGuard)
    // @Put('updateDeviceToken')
    // @HttpCode(HttpStatus.CREATED)
    // updateDeviceToken(@Body() payload: UpdateDeviceTokenDto) {
    //     return this.authService.updateUserToken(payload)
    // }
    //
    //
    // @UseGuards(AuthGuard)
    // @Post('logout')
    // @HttpCode(HttpStatus.OK)
    // logOutUser(@Body() payload: LogOutDto) {
    //     return this.authService.logOutUser(payload)
    // }
}
