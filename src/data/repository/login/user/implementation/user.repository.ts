import { Inject } from "@nestjs/common";
import { User } from "../../../../../domain/entities/user.entity";
import { Repository } from "typeorm";
import { IUserRepository } from "../user.repository.interface";

export class UserRepository implements IUserRepository {
    constructor(
        @Inject('USERS_LOGIN_REPOSITORY') private _repository: Repository<User>,
    ) { }
    async user(id: string): Promise<any> {
        const user = await this._repository.findOne(id);
        return user
    }
}