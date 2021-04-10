import { Inject } from "@nestjs/common";
import { User } from "../../../../../domain/entities/user.entity";
import { Repository } from "typeorm";
import { LoginResponseDto } from "../../dtos/login-response.dto";
import { LoginRequestDto } from "../../dtos/login-request.dto";
import { ILogin } from "../login.interface";
import { CRYPT_SERVICE, IBcrypt } from "../../../../../providers/bcrypt.interface";

export class LoginService implements ILogin {

    constructor(
        @Inject(CRYPT_SERVICE) private _crypt: IBcrypt,
        @Inject('USERS_LOGIN_REPOSITORY') private _repository: Repository<User>,
    ) { }
    async login(login: LoginRequestDto): Promise<LoginResponseDto> {
        const user = await this._repository.findOne({ where: { email: login.email } });
        const isVaslid = await this._crypt.compare(user.password, login.password)
        if (!isVaslid) throw new Error("Senha Inválida")
        const data = LoginRequestDto.from(user);
        return data
    }
}