import { Body, Controller, HttpCode, HttpException, Inject, Post } from '@nestjs/common';
import { LoginRequestDto } from './dtos/login-request.dto';
import { ILogin, LOGIN_USER } from './use-cases/login.interface';


@Controller('api/login')
export class LoginController {
    constructor(
        @Inject(LOGIN_USER) private readonly _service: ILogin,

    ) { }

    @Post()
    @HttpCode(200)
    public async login(@Body() user: LoginRequestDto): Promise<any> {
        try {
            const data = await this._service.login(user)
            return data
        } catch (error) {
            throw new HttpException(error.message, 400)
        }

    }

}
