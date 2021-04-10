import { RegisterRequestDto } from "../dtos/register-request.dto";
import { RegisterResponseDto } from "../dtos/register-response.dto";
export const REGISTER_USER = 'REGISTER USER';

export interface IRegister {
    register(register: RegisterRequestDto): Promise<RegisterResponseDto>
}