import { Module } from '@nestjs/common';
import { BcryptService } from '../../providers/implementation/bcrypt.service';
import { DatabaseModule } from '../../database/database.module';
import { loginProviders } from './login.provider';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/use-cases/implementation/login.service';
import { LOGIN_USER } from './login/use-cases/login.interface';
import { CRYPT_SERVICE } from '../../providers/bcrypt.interface';

@Module({
    imports: [DatabaseModule],
    providers: [...loginProviders, { useClass: LoginService, provide: LOGIN_USER }, { useClass: BcryptService, provide: CRYPT_SERVICE }],
    controllers: [LoginController],
    exports: []

})
export class LoginModule { }
