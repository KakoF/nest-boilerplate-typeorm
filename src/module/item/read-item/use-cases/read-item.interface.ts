import { ReadItemDto } from "../dtos/read-item.dto";
export const READ_ITEM = 'READ ITEM';

export interface IReadItemInterface {
    handle(): Promise<ReadItemDto[]>
}