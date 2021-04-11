import { CreateItemRequestDto } from "../../../../module/item/create-item/dtos/create-item-request.dto";

export const CREATE_ITEM_REPOSITORY = 'CREATE ITEM REPOSITORY';

export interface ICreateItemRepository {
    create(item: CreateItemRequestDto): any
}