import { Inject } from "@nestjs/common";
import { Item } from "../../../../../domain/entities/item.entity";
import { Repository } from "typeorm";
import { IGetItemRepository } from "../get-item.repository.interface";

export class GetItemRepository implements IGetItemRepository {
    constructor(
        @Inject('ITENS_REPOSITORY') private _repository: Repository<Item>,
    ) { }
    async get(id: string): Promise<any> {
        const data = await this._repository.findOne(id)
        return data
    }

}