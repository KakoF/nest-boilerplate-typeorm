import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/domain/entities/item.entity';
//import { v4 as uuidv4 } from 'uuid'

export class UpdateItemRequestDto implements Readonly<UpdateItemRequestDto> {

    id: string;

    @ApiProperty({ description: 'Nome do item' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'Descrição do item' })
    @IsString()
    description: string;

    createAt: Date;
    updateAt: Date;

    public static from(entity: Item): UpdateItemRequestDto {
        const response = new UpdateItemRequestDto();
        response.id = entity.id
        response.name = entity.name
        response.description = entity.description
        response.createAt = entity.createAt
        response.updateAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
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