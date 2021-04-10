
import { Inject, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { LoginResponseDto } from '../../dtos/login-response.dto'
import { AUTHENTICATE, IAuthenticate } from '../authenticate.interface'

export interface AccessTokenPayload {
    sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor(@Inject(AUTHENTICATE) private readonly _service: IAuthenticate) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET,
            signOptions: {
                expiresIn: process.env.TOKEN_TIME,
            },
        })
    }

    async validate(payload: AccessTokenPayload): Promise<LoginResponseDto> {
        const { sub: id } = payload
        const user = await this._service.user(id)
        if (!user) {
            return null
        }
        return user
    }
}