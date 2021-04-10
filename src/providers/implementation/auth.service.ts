import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignOptions } from "jsonwebtoken";
import { AuthenticationPayload, IAuth } from "../auth.interface";

const BASE_OPTIONS: SignOptions = {
    issuer: 'https://my-app.com',
    audience: 'https://my-app.com',
}

export interface RefreshTokenPayload {
    jti: number;
    sub: number
}

@Injectable()
export class AuthService implements IAuth {
    private readonly jwt: JwtService

    public constructor(jwt: JwtService) {
        this.jwt = jwt
    }

    buildResponsePayload(user: any, accessToken: string): AuthenticationPayload {
        return {
            user: user,
            payload: {
                type: 'bearer',
                token: accessToken,
                role: user.role
            }
        }
    }
    authenticate(user: any): Promise<any> {
        const opts: SignOptions = {
            ...BASE_OPTIONS,
            subject: String(user.id),
        }

        return this.jwt.signAsync({}, opts)
    }

}