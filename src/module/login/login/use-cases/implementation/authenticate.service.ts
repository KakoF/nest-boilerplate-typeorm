import { Inject } from "@nestjs/common";
import { IUserRepository, USER_REPOSITORY } from "../../../../../data/repository/login/user/user.repository.interface";
import { LoginRequestDto } from "../../dtos/login-request.dto";
import { LoginResponseDto } from "../../dtos/login-response.dto";
import { IAuthenticate } from "../authenticate.interface";

export class AuthenticateService implements IAuthenticate {
    constructor(
        @Inject(USER_REPOSITORY) private readonly _repository: IUserRepository
    ) { }
    async user(id: string): Promise<LoginResponseDto> {
        const user = await this._repository.user(id);
        const data = LoginRequestDto.from(user);
        return data
    }
}