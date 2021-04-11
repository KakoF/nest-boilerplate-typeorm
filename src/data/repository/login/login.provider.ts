
import { Connection } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';

export const loginProviders = [
    {
        provide: 'USERS_LOGIN_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    },
];