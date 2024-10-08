import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MulterModule} from "@nestjs/platform-express";



@Module({
    imports: [

        // FirebaseModule.forRoot({
        //     googleApplicationCredential: {
        //         projectId: serviceAccount.project_id,
        //         privateKey: serviceAccount.private_key,
        //         clientEmail: serviceAccount.client_email,
        //     },
        // }),
        // CloudinaryModule.forRootAsync({
        //     imports: [SharedModule],
        //     useFactory: (configService: ConfigService) => ({
        //         isGlobal: true,
        //         cloud_name: configService.get('CLOUD_NAME'),
        //         api_key: configService.get('CLOUDINARY_API_KEY'),
        //         api_secret: configService.get('CLOUDINARY_API_SECRET'),
        //     }),
        //     inject: [ConfigService],
        // }),
        MulterModule.register({
            dest: "./tmp/"
        })
    ],
    controllers: [AppController],
    providers: [
        AppService,

    ],
})
export class AppModule {
}
