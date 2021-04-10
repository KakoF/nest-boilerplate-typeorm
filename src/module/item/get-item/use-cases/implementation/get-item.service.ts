import { Inject } from "@nestjs/common";
import { Item } from "src/domain/entities/item.entity";
import { ReadItemDto } from "src/module/item/read-item/dtos/read-item.dto";
import { Repository } from "typeorm";
import { IGetItemInterface } from "../get-item.interface";

export class GetItemService implements IGetItemInterface {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }
    async handle(id: string): Promise<ReadItemDto> {
        const data = await this._repository.findOne(id)
        return data;
    }

}