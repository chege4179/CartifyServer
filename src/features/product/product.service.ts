import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductEntity} from "../../shared/entity/product.entity";
import {Repository} from "typeorm";
import {CreateProductDto} from "../../shared/dto/product/createProduct-dto";
import {CloudinaryService} from "nestjs-cloudinary";


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        private readonly cloudinaryService: CloudinaryService,
    ) {
    }


    async getAllProducts(): Promise<any> {
        try {
            const products = await this.productRepository.find();
            return {
                products
            }
        }catch (e){

        }
    }


    async createProduct(payload:CreateProductDto,files: Array<Express.Multer.File>) {
        try {
            const uploadedResult = await Promise.all(
                files.map(async (file) => {
                    return await this.cloudinaryService.uploadFile(file,{
                        resource_type: "image",
                        public_id: `cartify/${file.originalname}`,
                        chunk_size: 6000000,
                        eager_async: true,
                    })
                })
            )


            // return {
            //     msg: "Product added successfully",
            //     success: true,
            //     product: newProduct
            // }
        }catch (e){
            Logger.error(e.message)
            throw new BadRequestException(e.message)
        }
    }
}