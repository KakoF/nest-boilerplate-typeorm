export const GET_ITEM_REPOSITORY = 'GET ITEM REPOSITORY';

export interface IGetItemRepository {
    get(id: string): Promise<any>
}