import { Module } from '@nestjs/common';
import { BcryptService } from '../../providers/implementation/bcrypt.service';
import { DatabaseModule } from '../../database/database.module';
import { loginProviders } from './login.provider';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/use-cases/implementation/login.service';
import { LOGIN_USER } from './login/use-cases/login.interface';
import { CRYPT_SERVICE } from '../../providers/bcrypt.interface';
import { AuthService } from '../../providers/implementation/auth.service';
import { AUTH } from '../../providers/auth.interface';
import { JwtModule } from '@nestjs/jwt';
import { JWTGuard } from '../../providers/guards/jwt.guard';
import { JwtStrategy } from './login/use-cases/implementation/jwt.strategy';
import { AUTHENTICATE } from './login/use-cases/authenticate.interface';
import { AuthenticateService } from './login/use-cases/implementation/authenticate.service';

@Module({
    imports: [DatabaseModule,
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: process.env.TOKEN_TIME,
            }
        })],
    providers: [...loginProviders,
    { useClass: LoginService, provide: LOGIN_USER },
    { useClass: BcryptService, provide: CRYPT_SERVICE },
    { useClass: AuthService, provide: AUTH },
    { useClass: AuthenticateService, provide: AUTHENTICATE },
        JWTGuard, JwtStrategy],
    controllers: [LoginController],
    exports: []

})
export class LoginModule { }
