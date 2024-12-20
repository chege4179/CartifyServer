import {Controller, Get, HttpCode, HttpStatus} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Get('all')
    @HttpCode(HttpStatus.OK)
    getAllUsers() {
        return this.userService.getAllUsers()
    }


}
