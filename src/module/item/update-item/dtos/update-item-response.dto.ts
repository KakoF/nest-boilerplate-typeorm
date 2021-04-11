//import { IsString, IsUUID, } from 'class-validator';
//import { ApiProperty } from '@nestjs/swagger';
//import { v4 as uuidv4 } from 'uuid'

export class UpdateItemResponseDto implements Readonly<UpdateItemResponseDto> {
    id: string;
    name: string;
    description: string
    createAt: Date;
    updateAt: Date;

    public static from(dto: Partial<UpdateItemResponseDto>) {
        const it = new UpdateItemResponseDto();
        it.id = dto.id
        it.name = dto.name;
        it.description = dto.description;
        it.createAt = dto.createAt;
        it.updateAt = dto.updateAt
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