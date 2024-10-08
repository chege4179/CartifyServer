import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    constructor() {
    }

    async ping() {
        return 'pong';
    }

    async helloWord(){
        const env = process.env.NODE_ENV
        return `Blogger App Server Environment: ${env}`
    }
}
