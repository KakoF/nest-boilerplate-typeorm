import { CreateItemRequestDto } from "../dtos/create-item-request.dto";
import { CreateItemResponseDto } from "../dtos/create-item-response.dto";
export const CREATE_ITEM = 'CREATE ITEM';

export interface ICreateItemInterface {
    handle(item: CreateItemRequestDto): Promise<CreateItemResponseDto>
}