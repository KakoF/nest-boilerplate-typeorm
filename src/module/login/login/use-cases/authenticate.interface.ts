import { LoginResponseDto } from "../dtos/login-response.dto";
export const AUTHENTICATE = 'AUTHENTICATE';

export interface IAuthenticate {
    user(id: string): Promise<LoginResponseDto>
}