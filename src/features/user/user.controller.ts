import {Body, Controller, Get, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {GetProductbyIdDto} from "../../shared/dto/product/getProductbyId-dto";
import {GetUserByIdDto} from "../../shared/dto/user/getUserById-dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('all')
    @HttpCode(HttpStatus.OK)
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Post("getUserById")
    @HttpCode(HttpStatus.OK)
    async getProductById(@Body() payload: GetUserByIdDto): Promise<any> {
        return await this.userService.getUserById(payload);
    }
}
