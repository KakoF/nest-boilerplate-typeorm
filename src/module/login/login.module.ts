import { Module } from '@nestjs/common';
import { BcryptService } from '../../providers/implementation/bcrypt.service';
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
import { LoginRepositoryModule } from '../../data/repository/login/login.repository.module';

@Module({
    imports: [LoginRepositoryModule,
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: process.env.TOKEN_TIME,
            }
        })],
    providers: [
        { useClass: LoginService, provide: LOGIN_USER },
        { useClass: BcryptService, provide: CRYPT_SERVICE },
        { useClass: AuthService, provide: AUTH },
        { useClass: AuthenticateService, provide: AUTHENTICATE },
        JWTGuard, JwtStrategy],
    controllers: [LoginController],
    exports: []

})
export class LoginModule { }
