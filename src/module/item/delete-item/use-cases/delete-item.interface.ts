export const DELETE_ITEM = 'DELETE ITEM';

export interface IDeleteItemInterface {
    handle(id: string): Promise<boolean>
}