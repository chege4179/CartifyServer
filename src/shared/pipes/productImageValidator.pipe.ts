import {Injectable, PipeTransform} from "@nestjs/common";
import {CommonFunction} from "../util/commonFunction";
import {ErrorMapping} from "../config/errorMapping";


@Injectable()
export class ProductsImageValidator implements PipeTransform<Array<Express.Multer.File>, Array<Express.Multer.File>> {

    private readonly commonFunction: CommonFunction = new CommonFunction()

    transform(values: Array<Express.Multer.File>): Array<Express.Multer.File> {
        if (values.length === 0) {
            this.commonFunction.errorResponse(ErrorMapping.MISSING_IMAGES)
        } else {
            return values
        }

    }
}