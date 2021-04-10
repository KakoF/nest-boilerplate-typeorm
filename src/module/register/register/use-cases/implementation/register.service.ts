import { Inject } from "@nestjs/common";
import { User } from "../../../../../domain/entities/user.entity";
import { CRYPT_SERVICE, IBcrypt } from "../../../../../providers/bcrypt.interface";
import { Repository } from "typeorm";
import { RegisterRequestDto } from "../../dtos/register-request.dto";
import { RegisterResponseDto } from "../../dtos/register-response.dto";
import { IRegister } from "../register.interface";

export class RegisterService implements IRegister {
    constructor(
        @Inject(CRYPT_SERVICE) private _crypt: IBcrypt,
        @Inject('USERS_REGISTER_REPOSITORY')
        private _repository: Repository<User>,
    ) { }
    async register(register: RegisterRequestDto): Promise<RegisterResponseDto> {
        register.password = this._crypt.crypt(register.password)
        const data = await this._repository.save(RegisterRequestDto.from(register)).then(e => RegisterResponseDto.from(e));
        return data
    }

}