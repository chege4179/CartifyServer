import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigService} from "@nestjs/config";
import {MulterModule} from "@nestjs/platform-express";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "../features/user/user.module";
import {AuthModule} from "../features/auth/auth.module";
import {ProductModule} from "../features/product/product.module";
import {SharedModule} from "../shared/shared/shared.module";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "../shared/filter/http.filter";
import {OrderModule} from "../features/order/order.module";
import {CloudinaryModule} from "nestjs-cloudinary";


@Module({
    imports: [
        SharedModule,
        UserModule,
        AuthModule,
        ProductModule,
        OrderModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    type: 'mongodb',
                    url: configService.get<string>('DATABASE_URL'),
                    synchronize: false,
                    entities: ['dist/src/shared/entity/*.entity.{js,ts}'],
                    logging: ["error"],
                }
            },
        }),
        CloudinaryModule.forRootAsync({
            imports: [SharedModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    isGlobal: true,
                    cloud_name: configService.get('CLOUD_NAME'),
                    api_key: configService.get('CLOUDINARY_API_KEY'),
                    api_secret: configService.get('CLOUDINARY_API_SECRET'),
                }
            },
        }),
        MulterModule.register({
            dest: "./tmp/"
        })
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ],
})
export class AppModule {
}
