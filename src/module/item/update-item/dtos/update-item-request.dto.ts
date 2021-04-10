import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/domain/entities/item.entity';
import { UpdateItemResponseDto } from './update-item-response.dto';
//import { v4 as uuidv4 } from 'uuid'

export class UpdateItemRequestDto implements Readonly<UpdateItemRequestDto> {

    @ApiProperty({ description: 'Nome do item' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'Descrição do item' })
    @IsString()
    description: string;

    public static from(entity: Item): UpdateItemResponseDto {
        const response = new UpdateItemResponseDto();
        response.id = entity.id
        response.name = entity.name
        response.description = entity.description
        response.createAt = entity.createAt
        response.updateAt = entity.updateAt
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