import { UpdateItemRequestDto } from "../dtos/update-item-request.dto";
import { UpdateItemResponseDto } from "../dtos/update-item-response.dto";

export const UPDATE_ITEM = 'UPDATE ITEM';

export interface IUpdateItemInterface {
    handle(id: string, item: UpdateItemRequestDto): Promise<UpdateItemResponseDto>
}