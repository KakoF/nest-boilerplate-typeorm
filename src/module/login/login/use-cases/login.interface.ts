import { LoginRequestDto } from "../dtos/login-request.dto";
import { LoginResponseDto } from "../dtos/login-response.dto";
export const LOGIN_USER = 'LOGIN USER';

export interface ILogin {
    login(login: LoginRequestDto): Promise<LoginResponseDto>
}