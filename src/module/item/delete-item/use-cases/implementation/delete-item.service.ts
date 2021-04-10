import { Inject } from "@nestjs/common";
import { Item } from "src/domain/entities/item.entity";
import { Repository } from "typeorm";
import { IDeleteItemInterface } from "../delete-item.interface";

export class DeleteItemService implements IDeleteItemInterface {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }
    async handle(id: string): Promise<boolean> {
        const data = await this._repository.delete(id)
        if (data.affected)
            return true;
        return false;
    }

}