import { Inject } from "@nestjs/common";
import { Item } from "../../../../../domain/entities/item.entity";
import { Repository } from "typeorm";
import { ICreateItemRepository } from "../create-item.repository.interface";
import { CreateItemRequestDto } from "../../../../../module/item/create-item/dtos/create-item-request.dto";

export class CreateItemRepository implements ICreateItemRepository {
    constructor(
        @Inject('ITENS_REPOSITORY') private _repository: Repository<Item>,
    ) { }
    async create(item: CreateItemRequestDto): Promise<any> {
        return await this._repository.save(item)
    }
}