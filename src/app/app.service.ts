import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    constructor() {
    }

    ping() {
        return 'pong';
    }
    helloWord(){
        const env = process.env.NODE_ENV
        return `Cartify App Server Environment: ${env}`
    }
}
