import {ProductService} from "./product.service";
import {Body, Controller, Get, HttpCode, HttpStatus, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {FilesInterceptor} from "@nestjs/platform-express";
import {ProductsImageValidator} from "../../shared/pipes/productImageValidator.pipe";
import {CreateProductDto} from "../../shared/dto/product/createProduct-dto";

@Controller("product")
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Get("all")
    @HttpCode(HttpStatus.OK)
    async getAllProducts(): Promise<any> {
        return await this.productService.getAllProducts();
    }


    @Post('create')
    @UseInterceptors(FilesInterceptor('images'))
    @HttpCode(HttpStatus.CREATED)
    async createProduct(
        @UploadedFiles(new ProductsImageValidator()) files: Array<Express.Multer.File>,
        @Body() payload: CreateProductDto
    ) {
        return await this.productService.createProduct(payload, files)
    }
}