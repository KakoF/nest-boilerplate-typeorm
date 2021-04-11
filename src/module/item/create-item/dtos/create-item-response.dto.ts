//import { IsString, IsUUID, } from 'class-validator';
//import { ApiProperty } from '@nestjs/swagger';
//import { v4 as uuidv4 } from 'uuid'

export class CreateItemResponseDto implements Readonly<CreateItemResponseDto> {
    id: string;
    name: string;
    description: string
    createAt: Date;
    updateAt: Date;

    public static from(dto: Partial<CreateItemResponseDto>) {
        const it = new CreateItemResponseDto();
        it.id = dto.id;
        it.name = dto.name;
        it.description = dto.description;
        it.createAt = dto.createAt;
        return it;
    }

    /*public static fromEntity(entity: Item) {
        return this.from({
            id: entity.id,
            name: entity.name,
            description: entity.description
        });
    }*/

}