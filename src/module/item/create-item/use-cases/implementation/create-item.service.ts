import { Inject } from "@nestjs/common";
import { Item } from "src/domain/entities/item.entity";
import { Repository } from "typeorm";
import { CreateItemRequestDto } from "../../dtos/create-item-request.dto";
import { CreateItemResponseDto } from "../../dtos/create-item-response.dto";
import { ICreateItemInterface } from "../create-item.interface";

export class CreateItemService implements ICreateItemInterface {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }
    async handle(item: CreateItemRequestDto): Promise<CreateItemResponseDto> {
        const data = CreateItemRequestDto.from(await this._repository.save(item))
        return data;
    }

}