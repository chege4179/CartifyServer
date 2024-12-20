import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
    ) {
    }

    @Get('ping')
    async getHello(): Promise<any> {
        return await this.appService.ping();
    }

    @Get("")
    async helloWorld() {
        return await this.appService.helloWord()
    }

}
