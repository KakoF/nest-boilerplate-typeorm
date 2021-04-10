import { Module } from '@nestjs/common';
import { ItemModule } from './module/item/item.module';
import { LoginModule } from './module/login/login.module';
import { RegisterModule } from './module/register/register.module';

@Module({
  imports: [ItemModule, LoginModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
