import { Inject } from "@nestjs/common";
import { GET_ITEM_REPOSITORY, IGetItemRepository } from "../../../../../data/repository/item/get-item/get-item.repository.interface";
import { UPDATE_ITEM_REPOSITORY, IUpdateItemRepository } from "../../../../../data/repository/item/update-item/update-item.repository.interface";
import { UpdateItemRequestDto } from "../../dtos/update-item-request.dto";
import { UpdateItemResponseDto } from "../../dtos/update-item-response.dto";
import { IUpdateItemInterface } from "../update-item.interface";

export class UpdateItemService implements IUpdateItemInterface {
    constructor(
        @Inject(GET_ITEM_REPOSITORY) private readonly _get: IGetItemRepository,
        @Inject(UPDATE_ITEM_REPOSITORY) private readonly _repository: IUpdateItemRepository,
    ) { }
    async handle(id: string, item: UpdateItemRequestDto): Promise<UpdateItemResponseDto> {
        
        //const data = CreateItemRequestDto.from(item)
        //return CreateItemResponseDto.from(await this._repository.create(data))



        const pastItem = await this._get.get(id);
        const updateItem = { ...pastItem, ...item };
        const data = UpdateItemRequestDto.from(updateItem)
        return UpdateItemResponseDto.from(await this._repository.update(data))
        return data;
    }

}