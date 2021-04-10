import { Body, Controller, HttpException, Inject, Post } from '@nestjs/common';
import { LoginRequestDto } from './dtos/login-request.dto';
import { LoginResponseDto } from './dtos/login-response.dto';
import { ILogin, LOGIN_USER } from './use-cases/login.interface';


@Controller('api/login')
export class LoginController {
    constructor(
        @Inject(LOGIN_USER) private readonly _service: ILogin,

    ) { }

    @Post()
    public async login(@Body() user: LoginRequestDto): Promise<any> {
        try {
            const data = await this._service.login(user)
            /*const token = await this._auth.authenticate(user)
            const payload = this.buildResponsePayload(data, token)*/
            return data
        } catch (error) {
            throw new HttpException(error.message, 400)
        }

    }

}
