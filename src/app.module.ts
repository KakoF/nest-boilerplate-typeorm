import { Module } from '@nestjs/common';
import { ItemModule } from './module/item/item.module';
//import { LoginModule } from './module/login/login.module';
//import { RegisterModule } from './module/register/register.module';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  //imports: [ItemModule, LoginModule, RegisterModule],
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'baseapirealm',
      clientId: 'baseapi',
      secret: 'secret',
      // optional if you want to retrieve JWT from cookie
      cookieKey: 'KEYCLOAK_JWT',
      logLevels: ['warn']
    }),
    ItemModule],
  controllers: [],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: ResourceGuard },
    { provide: APP_GUARD, useClass: RoleGuard }
  ],
})
export class AppModule { }
