import { LoginRequestDto } from "../../../../module/login/login/dtos/login-request.dto";

export const LOGIN_USER_REPOSITORY = 'LOGIN USER REPOSITORY';

export interface ILoginUserRepository {
    login(login: LoginRequestDto): Promise<any>

}