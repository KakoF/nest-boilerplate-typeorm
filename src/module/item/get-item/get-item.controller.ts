import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetItemDto } from './dtos/get-item.dto';
import { GET_ITEM, IGetItemInterface } from './use-cases/get-item.interface';

@Controller('api/item')
export class GetItemController {
    constructor(
        @Inject(GET_ITEM)
        private readonly _service: IGetItemInterface
    ) { }
    @Get(':id')
    public async get(@Param() params): Promise<GetItemDto> {
        const data = await this._service.handle(params.id)
        return data;
    }
}
