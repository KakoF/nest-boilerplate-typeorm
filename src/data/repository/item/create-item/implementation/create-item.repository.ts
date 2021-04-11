import { Inject } from "@nestjs/common";
import { Item } from "../../../../../domain/entities/item.entity";
import { Repository } from "typeorm";
import { ICreateItemRepository } from "../create-item.repository.interface";
import { CreateItemRequestDto } from "../../../../../module/item/create-item/dtos/create-item-request.dto";
import { MongHelper } from "../../../../../providers/mongo-helper/mongo-helpers";

export class CreateItemRepository implements ICreateItemRepository {
    constructor(
        @Inject('ITENS_REPOSITORY') private _repository: Repository<Item>,
    ) { }
    async create(item: CreateItemRequestDto): Promise<any> {
        const data = process.env.BASE == 'MONGODB' ? MongHelper.map(item) : item
        return await this._repository.save(data)
    }
}