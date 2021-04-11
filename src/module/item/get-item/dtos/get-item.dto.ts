import { Item } from "src/domain/entities/item.entity";

export class GetItemDto implements Readonly<GetItemDto> {
    id: string;
    name: string;
    description: string
    createAt: Date;
    updateAt: Date;

    public static from(entity: Item): GetItemDto {
        const response = new GetItemDto();
        response.id = entity.id
        response.name = entity.name
        response.description = entity.description
        response.createAt = entity.createAt
        response.updateAt = entity.updateAt
        return response
    }

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