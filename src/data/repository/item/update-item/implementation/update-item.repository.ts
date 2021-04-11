import { Inject } from "@nestjs/common";
import { Item } from "../../../../../domain/entities/item.entity";
import { Repository } from "typeorm";
import { IUpdateItemRepository } from "../update-item.repository.interface";
import { UpdateItemRequestDto } from "../../../../../module/item/update-item/dtos/update-item-request.dto";

export class UpdateItemRepository implements IUpdateItemRepository {
    constructor(
        @Inject('ITENS_REPOSITORY') private _repository: Repository<Item>,
    ) { }
    async update(item: UpdateItemRequestDto): Promise<any> {
        return await this._repository.save(item)
    }
}