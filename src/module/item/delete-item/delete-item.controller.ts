import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { DELETE_ITEM, IDeleteItemInterface } from './use-cases/delete-item.interface';

@Controller('api/item')
export class DeleteItemController {
    constructor(
        @Inject(DELETE_ITEM)
        private readonly _service: IDeleteItemInterface
    ) { }
    @Delete(':id')
    public async delete(@Param() params): Promise<any> {
        return await this._service.handle(params.id)
    }
}
