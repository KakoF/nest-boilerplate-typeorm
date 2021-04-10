import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateItemRequestDto } from './dtos/update-item-request.dto';
import { IUpdateItemInterface, UPDATE_ITEM } from './use-cases/update-item.interface';

@Controller('api/item')
export class UpdateItemController {
    constructor(
        @Inject(UPDATE_ITEM)
        private readonly _service: IUpdateItemInterface
    ) { }

    @Put(':id')
    public async update(@Param() params, @Body() item: UpdateItemRequestDto): Promise<any> {
        const data = await this._service.handle(params.id, item)
        return data
    }
}
