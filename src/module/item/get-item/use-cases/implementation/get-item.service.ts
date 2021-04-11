import { Inject } from "@nestjs/common";
import { IGetItemRepository, GET_ITEM_REPOSITORY } from "../../../../../data/repository/item/get-item/get-item.repository.interface";
import { GetItemDto } from "../../dtos/get-item.dto";
import { IGetItemInterface } from "../get-item.interface";

export class GetItemService implements IGetItemInterface {
    constructor(
        @Inject(GET_ITEM_REPOSITORY)
        private readonly _repository: IGetItemRepository
    ) { }
    async handle(id: string): Promise<GetItemDto> {
        return GetItemDto.from(await this._repository.get(id))
    }
}