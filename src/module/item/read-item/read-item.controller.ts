import { Controller, Get, Inject } from '@nestjs/common';
import { ReadItemDto } from './dtos/read-item.dto';
import { IReadItemInterface, READ_ITEM } from './use-cases/read-item.interface';

@Controller('api/item')
export class ReadItemController {
    constructor(
        @Inject(READ_ITEM)
        private readonly _service: IReadItemInterface
    ) { }
    @Get()
    public async read(): Promise<ReadItemDto[]> {
        const data = await this._service.handle()
        return data;
    }
}
