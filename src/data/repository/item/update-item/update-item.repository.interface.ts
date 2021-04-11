import { UpdateItemRequestDto } from "../../../../module/item/update-item/dtos/update-item-request.dto";

export const UPDATE_ITEM_REPOSITORY = 'UPDATE ITEM REPOSITORY';

export interface IUpdateItemRepository {
    update(item: UpdateItemRequestDto): Promise<any>
}