import { Inject } from "@nestjs/common";
import { Item } from "src/domain/entities/item.entity";
import { Repository } from "typeorm";
import { UpdateItemRequestDto } from "../../dtos/update-item-request.dto";
import { UpdateItemResponseDto } from "../../dtos/update-item-response.dto";
import { IUpdateItemInterface } from "../update-item.interface";

export class UpdateItemService implements IUpdateItemInterface {
    constructor(
        @Inject('ITENS_REPOSITORY')
        private _repository: Repository<Item>,
    ) { }
    async handle(id: string, item: UpdateItemRequestDto): Promise<UpdateItemResponseDto> {
        const pastItem = await this._repository.findOne(id);
        const updateItem = { ...pastItem, ...item };
        const data = UpdateItemRequestDto.from(await this._repository.save(updateItem))
        return data;
    }

}