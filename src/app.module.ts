import { Module } from '@nestjs/common';
import { ItemModule } from './module/item/item.module';

@Module({
  imports: [ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
