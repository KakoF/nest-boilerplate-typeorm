import { GetItemDto } from "../dtos/get-item.dto";

export const GET_ITEM = 'GET ITEM';

export interface IGetItemInterface {
    handle(id: string): Promise<GetItemDto>
}