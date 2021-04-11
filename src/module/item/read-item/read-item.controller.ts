import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { JWTGuard } from '../../../providers/guards/jwt.guard';
import { ReadItemDto } from './dtos/read-item.dto';
import { IReadItemInterface, READ_ITEM } from './use-cases/read-item.interface';

@Controller('api/item')
export class ReadItemController {
    constructor(
        @Inject(READ_ITEM)
        private readonly _service: IReadItemInterface
    ) { }
    @Get()
    @UseGuards(JWTGuard)
    public async read(): Promise<ReadItemDto[]> {
        const data = await this._service.handle()
        return data;
    }
}
