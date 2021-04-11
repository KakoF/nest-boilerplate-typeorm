import { Module } from '@nestjs/common';
import { ReadItemController } from './read-item/read-item.controller';
import { CreateItemController } from './create-item/create-item.controller';
import { UpdateItemController } from './update-item/update-item.controller';
import { DeleteItemController } from './delete-item/delete-item.controller';
import { CreateItemService } from './create-item/use-cases/implementation/create-item.service';
import { CREATE_ITEM } from './create-item/use-cases/create-item.interface';
import { DeleteItemService } from './delete-item/use-cases/implementation/delete-item.service';
import { DELETE_ITEM } from './delete-item/use-cases/delete-item.interface';
import { ReadItemService } from './read-item/use-cases/implementation/read-item.service';
import { READ_ITEM } from './read-item/use-cases/read-item.interface';
import { UPDATE_ITEM } from './update-item/use-cases/update-item.interface';
import { UpdateItemService } from './update-item/use-cases/implementation/update-item.service';
import { GetItemService } from './get-item/use-cases/implementation/get-item.service';
import { GET_ITEM } from './get-item/use-cases/get-item.interface';
import { GetItemController } from './get-item/get-item.controller';
import { ItemRepositoryModule } from '../../data/repository/item/item.repository.module';

@Module({
    imports: [ItemRepositoryModule],
    providers: [
        { useClass: GetItemService, provide: GET_ITEM },
        { useClass: CreateItemService, provide: CREATE_ITEM },
        { useClass: DeleteItemService, provide: DELETE_ITEM },
        { useClass: ReadItemService, provide: READ_ITEM },
        { useClass: UpdateItemService, provide: UPDATE_ITEM }
    ],
    controllers: [ReadItemController, CreateItemController, UpdateItemController, DeleteItemController, GetItemController],
    exports: []
})
export class ItemModule { }
