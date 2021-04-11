export const READ_ITEM_REPOSITORY = 'READ ITEM REPOSITORY';

export interface IReadItemRepository {
    find(): Promise<any[]>
}