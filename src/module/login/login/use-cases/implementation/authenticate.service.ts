import { Inject } from "@nestjs/common";
import { User } from "../../../../../domain/entities/user.entity";
import { Repository } from "typeorm";
import { LoginRequestDto } from "../../dtos/login-request.dto";
import { LoginResponseDto } from "../../dtos/login-response.dto";
import { IAuthenticate } from "../authenticate.interface";

export class AuthenticateService implements IAuthenticate {
    constructor(
        @Inject('USERS_LOGIN_REPOSITORY') private _repository: Repository<User>,
    ) { }
    async user(id: string): Promise<LoginResponseDto> {
        const user = await this._repository.findOne(id);
        const data = LoginRequestDto.from(user);
        return data
    }
}