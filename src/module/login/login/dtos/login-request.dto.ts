import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../../domain/entities/user.entity';
import { LoginResponseDto } from './login-response.dto';
//import { v4 as uuidv4 } from 'uuid'

export class LoginRequestDto implements Readonly<LoginRequestDto> {

    @ApiProperty({ description: 'Email do usuário' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Senha do usuário' })
    @IsString()
    password: string;

    public static from(entity: User): LoginResponseDto {
        const response = new LoginResponseDto();
        response.id = entity.id
        response.name = entity.name
        response.role = entity.role
        return response
    }

    /*public static from(dto: Partial<CreateItemRequestDto>) {
        const it = new CreateItemRequestDto();
        it.id = uuidv4();
        it.name = dto.name;
        it.description = dto.description;
        return it;
    }

    public static fromEntity(entity: Item) {
        return this.from({
            id: entity.id,
            name: entity.name,
            description: entity.description
        });
    }*/

}