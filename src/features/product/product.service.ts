import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Image, ProductEntity} from "../../shared/entity/product.entity";
import {Repository} from "typeorm";
import {CreateProductDto} from "../../shared/dto/product/createProduct-dto";
import {CloudinaryService} from "nestjs-cloudinary";
import {GetProductbyIdDto} from "../../shared/dto/product/getProductbyId-dto";
import {ObjectId} from "mongodb";
import {CommonFunction} from "../../shared/util/commonFunction";
import {ErrorMapping} from "../../shared/config/errorMapping";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        private readonly cloudinaryService: CloudinaryService,
        private readonly commonFunction: CommonFunction,
    ) {
    }


    async getAllProducts(): Promise<any> {
        try {
            const products = await this.productRepository.find();
            return {products: products};
        } catch (e) {
            Logger.error(e);
            throw new BadRequestException(e);
        }
    }


    async createProduct(payload: CreateProductDto, files: Array<Express.Multer.File>) {
        try {
            const uploadedResult = await Promise.all(
                files.map(async (file) => {
                    return await this.cloudinaryService.uploadFile(file, {
                        resource_type: "image",
                        public_id: `cartify/${file.originalname}`,
                        chunk_size: 6000000,
                        eager_async: true,
                    })
                })
            )
            const images = uploadedResult.map((file) => {
                const newImage = new Image()
                newImage.id = file.public_id || ""
                newImage.url = file.secure_url || ""
                return newImage
            })

            const newProduct = new ProductEntity()

            newProduct.category = payload.category
            newProduct.name = payload.name
            newProduct.description = payload.description
            newProduct.onOffer = false
            newProduct.offerPrice = 0
            newProduct.price = payload.price
            newProduct.images = images
            newProduct.offerDuration = 0
            newProduct.rating = 0

            const savedProduct = await this.productRepository.save(newProduct)

            return {
                msg: "Product added successfully",
                success: true,
                product: savedProduct
            }
        } catch (e) {
            Logger.error(e.message)
            throw new BadRequestException(e)
        }
    }

    async getProductById(payload: GetProductbyIdDto): Promise<any> {
        try {
            const product = await this.productRepository.findOne({
                where: {
                    _id: new ObjectId(payload.productId)
                }
            })
            if (!product) {
                return this.commonFunction.errorResponse(ErrorMapping.PRODUCT_NOT_FOUND)
            }
            return {product: product}
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("Failed to get the product")
        }
    }


    async deleteProductById(payload: GetProductbyIdDto): Promise<any> {
        try {
            const product = await this.productRepository.findOne({
                where: {
                    _id: new ObjectId(payload.productId)
                }
            })
            if (!product) {
                return this.commonFunction.errorResponse(ErrorMapping.PRODUCT_NOT_FOUND)
            }
            const result = await this.productRepository.delete(payload.productId)
            return {
                result
            }
        } catch (error) {
            Logger.error(error)
            throw new BadRequestException("Failed to delete product")

        }
    }
}