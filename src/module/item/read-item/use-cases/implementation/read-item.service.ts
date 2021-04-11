import { Inject } from "@nestjs/common";
import { IReadItemRepository, READ_ITEM_REPOSITORY } from "../../../../../data/repository/item/read-item/read-item.repository.interface";
import { ReadItemDto } from "../../dtos/read-item.dto";
import { IReadItemInterface } from "../read-item.interface";

export class ReadItemService implements IReadItemInterface {
    constructor(
        @Inject(READ_ITEM_REPOSITORY)
        private readonly _repository: IReadItemRepository
    ) { }
    async handle(): Promise<ReadItemDto[]> {
        const data = ReadItemDto.from(await this._repository.find())
        return data;
    }

}