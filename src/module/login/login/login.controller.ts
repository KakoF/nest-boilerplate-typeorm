import { Body, Controller, HttpException, Inject, Post } from '@nestjs/common';
import { LoginRequestDto } from './dtos/login-request.dto';
import { LoginResponseDto } from './dtos/login-response.dto';
import { ILogin, LOGIN_USER } from './use-cases/login.interface';

@Controller('api/login')
export class LoginController {
    constructor(
        @Inject(LOGIN_USER)
        private readonly _service: ILogin
    ) { }

    @Post()
    public async login(@Body() user: LoginRequestDto): Promise<LoginResponseDto> {
        try {
            const data = await this._service.login(user)
            return data
        } catch (error) {
            throw new HttpException(error.message, 400)
        }

    }
}
