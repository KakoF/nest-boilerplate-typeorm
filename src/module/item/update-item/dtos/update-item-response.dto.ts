//import { IsString, IsUUID, } from 'class-validator';
//import { ApiProperty } from '@nestjs/swagger';
//import { v4 as uuidv4 } from 'uuid'

export class UpdateItemResponseDto implements Readonly<UpdateItemResponseDto> {
    id: string;
    name: string;
    description: string
    createAt: Date;
    updateAt: Date;

    /*public static from(dto: Partial<CreatItemDto>) {
        const it = new CreatItemDto();
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