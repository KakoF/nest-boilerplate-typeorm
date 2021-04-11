import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { RegisterRequestDto } from "../../../../../module/register/register/dtos/register-request.dto";
import { User } from "../../../../../domain/entities/user.entity";
import { IRegisterUserRepository } from "../register-user.repository.interface";

export class RegisterUserRepository implements IRegisterUserRepository {
    constructor(
        @Inject('USERS_REGISTER_REPOSITORY') private _repository: Repository<User>,
    ) { }
    async register(register: RegisterRequestDto): Promise<any> {
        return await this._repository.save(register)
    }
}