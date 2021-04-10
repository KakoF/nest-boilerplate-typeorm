import { Inject } from "@nestjs/common";
import { Item } from "src/domain/entities/item.entity";
import { Repository } from "typeorm";
import { ReadItemDto } from "../../dtos/read-item.dto";
import { IReadItemInterface } from "../read-item.interface";

export class ReadItemService implements IReadItemInterface {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }
    async handle(): Promise<ReadItemDto[]> {
        const data = await this._repository.find()
        return data;
    }

}