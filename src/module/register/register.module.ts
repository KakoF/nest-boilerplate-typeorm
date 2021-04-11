import { Module } from '@nestjs/common';
import { CRYPT_SERVICE } from '../../providers/bcrypt.interface';
import { BcryptService } from '../../providers/implementation/bcrypt.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/use-cases/implementation/register.service';
import { REGISTER_USER } from './register/use-cases/register.interface';
import { RegisterRepositoryModule } from '../../data/repository/register/register.repository.module';

@Module({
    imports: [RegisterRepositoryModule],
    providers: [{ useClass: RegisterService, provide: REGISTER_USER }, { useClass: BcryptService, provide: CRYPT_SERVICE }],
    controllers: [RegisterController],
    exports: []
})
export class RegisterModule { }
