import { RegisterRequestDto } from "../../../../module/register/register/dtos/register-request.dto";

export const REGISTER_USER_REPOSITORY = 'REGISTER USER REPOSITORY';

export interface IRegisterUserRepository {
    register(register: RegisterRequestDto): Promise<any>
}