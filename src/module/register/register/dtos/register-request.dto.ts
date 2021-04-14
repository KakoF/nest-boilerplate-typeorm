import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid'


//import { v4 as uuidv4 } from 'uuid'

export class RegisterRequestDto implements Readonly<RegisterRequestDto> {


    id: string;

    @ApiProperty({ description: 'Email do usuário' })
    @IsEmail({}, { message: "E-mail deve ser válido" })
    email: string;

    @ApiProperty({ description: 'Nome do usuário' })
    @IsNotEmpty({ message: "Nome é campo obrigatório" })
    name: string;

    role: string;

    @ApiProperty({ description: 'Senha do usuário' })
    @IsNotEmpty({ message: "Senha é campo obrigatório" })
    password: string;

    public static from(dto: Partial<RegisterRequestDto>) {
        const it = new RegisterRequestDto();
        it.id = uuidv4();
        it.name = dto.name;
        it.role = "Guest"
        it.email = dto.email;
        it.password = dto.password;
        return it;
    }

}