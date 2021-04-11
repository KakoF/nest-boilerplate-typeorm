import { Inject } from "@nestjs/common";
import { Item } from "../../../../../domain/entities/item.entity";
import { Repository } from "typeorm";
import { IDeleteItemRepository } from "../delete-item.repository.interface";

export class DeleteItemRepository implements IDeleteItemRepository {
    constructor(
        @Inject('ITENS_REPOSITORY') private _repository: Repository<Item>,
    ) { }
    async delete(id: string): Promise<boolean> {
        const data = await this._repository.delete(id)
        if (data.affected)
            return true;
        return false;
    }
}