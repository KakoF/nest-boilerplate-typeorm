import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateItemRequestDto } from './dtos/create-item-request.dto';
import { CREATE_ITEM, ICreateItemInterface } from './use-cases/create-item.interface';

@Controller('api/item')
export class CreateItemController {

    constructor(
        @Inject(CREATE_ITEM)
        private readonly _service: ICreateItemInterface
    ) { }

    @Post()
    public async create(@Body() item: CreateItemRequestDto): Promise<any> {
        const data = await this._service.handle(item)
        return data
    }
}
