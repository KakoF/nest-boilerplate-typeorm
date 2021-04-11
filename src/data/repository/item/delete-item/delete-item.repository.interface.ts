export const DELETE_ITEM_REPOSITORY = 'DELETE ITEM REPOSITORY';

export interface IDeleteItemRepository {
    delete(id: string): Promise<boolean>
}