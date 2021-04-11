import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../database/database.module';
import { LoginUserRepository } from './login-user/implementation/login-user.repository';
import { LOGIN_USER_REPOSITORY } from './login-user/login-user.repository.interface';
import { loginProviders } from './login.provider';
import { UserRepository } from './user/implementation/user.repository';
import { USER_REPOSITORY } from './user/user.repository.interface';


@Module({
    imports: [DatabaseModule],
    providers: [...loginProviders,
    { useClass: LoginUserRepository, provide: LOGIN_USER_REPOSITORY },
    { useClass: UserRepository, provide: USER_REPOSITORY }],
    exports: [{ useClass: LoginUserRepository, provide: LOGIN_USER_REPOSITORY },
    { useClass: UserRepository, provide: USER_REPOSITORY }]
})
export class LoginRepositoryModule { }