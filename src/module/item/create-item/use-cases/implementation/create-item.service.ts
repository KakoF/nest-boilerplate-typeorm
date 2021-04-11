import { Inject } from "@nestjs/common";
import { CREATE_ITEM_REPOSITORY, ICreateItemRepository } from "../../../../../data/repository/item/create-item/create-item.repository.interface";
import { CreateItemRequestDto } from "../../dtos/create-item-request.dto";
import { CreateItemResponseDto } from "../../dtos/create-item-response.dto";
import { ICreateItemInterface } from "../create-item.interface";

export class CreateItemService implements ICreateItemInterface {
    constructor(
        @Inject(CREATE_ITEM_REPOSITORY)
        private readonly _repository: ICreateItemRepository
    ) { }
    async handle(item: CreateItemRequestDto): Promise<CreateItemResponseDto> {
        const data = CreateItemRequestDto.from(await this._repository.create(item))
        return data;
    }

}