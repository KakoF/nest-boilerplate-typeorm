import { Inject } from "@nestjs/common";
//import { LoginResponseDto } from "../../dtos/login-response.dto";
import { LoginRequestDto } from "../../dtos/login-request.dto";
import { ILogin } from "../login.interface";
import { CRYPT_SERVICE, IBcrypt } from "../../../../../providers/bcrypt.interface";
import { AUTH, IAuth } from "../../../../../providers/auth.interface";
import { ILoginUserRepository, LOGIN_USER_REPOSITORY } from "../../../../../data/repository/login/login-user/login-user.repository.interface";

export class LoginService implements ILogin {
    constructor(
        @Inject(AUTH) private readonly _auth: IAuth,
        @Inject(CRYPT_SERVICE) private _crypt: IBcrypt,
        @Inject(LOGIN_USER_REPOSITORY) private readonly _repository: ILoginUserRepository
    ) { }
    async login(login: LoginRequestDto): Promise<any> {
        const user = await this._repository.login(login);
        const isVaslid = await this._crypt.compare(user.password, login.password)
        if (!isVaslid) throw new Error("Senha Inválida")
        const data = LoginRequestDto.from(user);
        const token = await this._auth.authenticate(user)
        const payload = this._auth.buildResponsePayload(data, token)
        return payload
    }
}