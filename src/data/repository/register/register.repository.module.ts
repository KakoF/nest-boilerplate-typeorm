import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../database/database.module';
import { RegisterUserRepository } from './register-user/implementation/register-user.repository';
import { REGISTER_USER_REPOSITORY } from './register-user/register-user.repository.interface';
import { registerProviders } from './register.provider';

@Module({
    imports: [DatabaseModule],
    providers: [...registerProviders,
    { useClass: RegisterUserRepository, provide: REGISTER_USER_REPOSITORY }],
    exports: [{ useClass: RegisterUserRepository, provide: REGISTER_USER_REPOSITORY }],
})
export class RegisterRepositoryModule { }