import { User } from "src/domain/entities/user.entity";

export class RegisterResponseDto implements Readonly<RegisterResponseDto> {
    id: string;
    name: string;
    role: string;

    public static from(entity: User): RegisterResponseDto {
        const response = new RegisterResponseDto();
        response.id = entity.id
        response.name = entity.name
        response.role = entity.role
        return response
    }
}