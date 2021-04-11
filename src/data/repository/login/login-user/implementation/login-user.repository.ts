import { Inject } from "@nestjs/common";
import { User } from "../../../../../domain/entities/user.entity";
import { Repository } from "typeorm";
import { LoginRequestDto } from "src/module/login/login/dtos/login-request.dto";
import { ILoginUserRepository } from "../login-user.repository.interface";

export class LoginUserRepository implements ILoginUserRepository {
    constructor(
        @Inject('USERS_LOGIN_REPOSITORY') private _repository: Repository<User>,
    ) { }
    async login(login: LoginRequestDto): Promise<any> {
        const user = await this._repository.findOne({ where: { email: login.email } });
        return user
    }
}