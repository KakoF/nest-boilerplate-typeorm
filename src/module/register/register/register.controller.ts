import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { RegisterResponseDto } from './dtos/register-response.dto';
import { IRegister, REGISTER_USER } from './use-cases/register.interface';

@Controller('api/register')
export class RegisterController {

    constructor(
        @Inject(REGISTER_USER)
        private readonly _service: IRegister
    ) { }

    @Post()
    public async register(@Body() user: RegisterRequestDto): Promise<RegisterResponseDto> {
        const data = this._service.register(user)
        return data
    }
}
