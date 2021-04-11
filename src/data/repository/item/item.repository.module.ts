import { Module } from '@nestjs/common';
import { itemProviders } from './item.provider';
import { DatabaseModule } from '../../../database/database.module';
import { GET_ITEM_REPOSITORY } from './get-item/get-item.repository.interface';
import { READ_ITEM_REPOSITORY } from './read-item/read-item.repository.interface';
import { UPDATE_ITEM_REPOSITORY } from './update-item/update-item.repository.interface';
import { DELETE_ITEM_REPOSITORY } from './delete-item/delete-item.repository.interface';
import { CREATE_ITEM_REPOSITORY } from './create-item/create-item.repository.interface';
import { CreateItemRepository } from './create-item/implementation/create-item.repository';
import { DeleteItemRepository } from './delete-item/implementation/delete-item.repository';
import { UpdateItemRepository } from './update-item/implementation/update-item.repository';
import { ReadItemRepository } from './read-item/implementation/read-item.repository';
import { GetItemRepository } from './get-item/implementation/get-item.repository';


@Module({
    imports: [DatabaseModule],
    providers: [...itemProviders,
    { useClass: GetItemRepository, provide: GET_ITEM_REPOSITORY },
    { useClass: CreateItemRepository, provide: CREATE_ITEM_REPOSITORY },
    { useClass: DeleteItemRepository, provide: DELETE_ITEM_REPOSITORY },
    { useClass: UpdateItemRepository, provide: UPDATE_ITEM_REPOSITORY },
    { useClass: ReadItemRepository, provide: READ_ITEM_REPOSITORY }],
    exports: [
        { useClass: GetItemRepository, provide: GET_ITEM_REPOSITORY },
        { useClass: CreateItemRepository, provide: CREATE_ITEM_REPOSITORY },
        { useClass: DeleteItemRepository, provide: DELETE_ITEM_REPOSITORY },
        { useClass: UpdateItemRepository, provide: UPDATE_ITEM_REPOSITORY },
        { useClass: ReadItemRepository, provide: READ_ITEM_REPOSITORY }],
})
export class ItemRepositoryModule { }