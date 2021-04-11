import { Item } from "src/domain/entities/item.entity";

export class ReadItemDto implements Readonly<ReadItemDto> {
    id: string;
    name: string;
    description: string
    createAt: Date;
    updateAt: Date;

    public static from(entity: Item[]): ReadItemDto[] {
        const entityList = entity.map(e => {
            const response = new ReadItemDto();
            response.id = e.id
            response.name = e.name
            response.description = e.description
            response.createAt = e.createAt
            response.updateAt = e.updateAt
            return response
        })
        return entityList
    }


    /*public static fromEntity(entity: Item) {
        return this.from({
            id: entity.id,
            name: entity.name,
            description: entity.description
        });
    }*/

}