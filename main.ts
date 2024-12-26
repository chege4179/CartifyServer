import {NestFactory} from '@nestjs/core';
import {AppModule} from './src/app/app.module';
import {Logger, ValidationPipe} from '@nestjs/common';
import {LoggingInterceptor} from "./src/shared/interceptor/logging.interceptor";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {LoggerTags} from "./src/shared/util/appConfig";
import * as process from "node:process";
import {NestExpressApplication} from "@nestjs/platform-express";

const Port = process.env.PORT

async function bootstrap() {

    process.env.TZ = 'Africa/Nairobi';
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.startAllMicroservices();
    app.enableCors();
    app.useGlobalInterceptors(new LoggingInterceptor());
    app.useGlobalPipes(new ValidationPipe());
    app.useBodyParser('json', {limit: '10mb'})

    const config = new DocumentBuilder()
        .setTitle('Cartify API')
        .setDescription('Cartify API description')
        .setVersion('1.0')
        .addTag('blogger')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    await app.listen(Port);
}


bootstrap()
    .then(() => {
        Logger.log(`🚀 🚀🚀🚀 Cartify API Service running at port ${Port}`, LoggerTags.BOOT_STRAPPING);
    })
    .catch((error) => {
        Logger.error(error)
        Logger.error(`Failed to start Cartify API Service`, LoggerTags.BOOT_STRAPPING);
    })