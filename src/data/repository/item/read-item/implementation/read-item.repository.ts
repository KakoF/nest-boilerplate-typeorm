import { Inject } from "@nestjs/common";
import { Item } from "../../../../../domain/entities/item.entity";
import { Repository } from "typeorm";
import { IReadItemRepository } from "../read-item.repository.interface";

export class ReadItemRepository implements IReadItemRepository {
    constructor(
        @Inject('ITENS_REPOSITORY') private _repository: Repository<Item>,
    ) { }
    async find(): Promise<any[]> {
        return await this._repository.find()
    }
}