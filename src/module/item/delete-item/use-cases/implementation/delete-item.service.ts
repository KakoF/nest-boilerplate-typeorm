import { Inject } from "@nestjs/common";
import { DELETE_ITEM_REPOSITORY, IDeleteItemRepository } from "../../../../../data/repository/item/delete-item/delete-item.repository.interface";
import { IDeleteItemInterface } from "../delete-item.interface";

export class DeleteItemService implements IDeleteItemInterface {
    constructor(
        @Inject(DELETE_ITEM_REPOSITORY)
        private readonly _repository: IDeleteItemRepository
    ) { }
    async handle(id: string): Promise<boolean> {
        const data = await this._repository.delete(id)
        return data;
    }

}