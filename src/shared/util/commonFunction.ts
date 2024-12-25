import {BadRequestException, Injectable} from "@nestjs/common";
import {ErrorsCheckDto} from "../dto/auth/errorsCheck-dto";


@Injectable()
export class CommonFunction {

    errorResponse(payload: ErrorsCheckDto) {
        throw new BadRequestException(payload.message, {
            cause: new Error(),
            description: payload.code,
        });
    }

}