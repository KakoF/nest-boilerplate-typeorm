import { Inject } from "@nestjs/common";
import { CRYPT_SERVICE, IBcrypt } from "../../../../../providers/bcrypt.interface";
import { RegisterRequestDto } from "../../dtos/register-request.dto";
import { RegisterResponseDto } from "../../dtos/register-response.dto";
import { IRegister } from "../register.interface";
import { IRegisterUserRepository, REGISTER_USER_REPOSITORY } from "../../../../../data/repository/register/register-user/register-user.repository.interface";

export class RegisterService implements IRegister {
    constructor(
        @Inject(CRYPT_SERVICE) private _crypt: IBcrypt,
        @Inject(REGISTER_USER_REPOSITORY) private readonly _repository: IRegisterUserRepository
    ) { }
    async register(register: RegisterRequestDto): Promise<RegisterResponseDto> {
        register.password = this._crypt.crypt(register.password)
        const data = await this._repository.register(RegisterRequestDto.from(register)).then(e => RegisterResponseDto.from(e));
        return data
    }

}