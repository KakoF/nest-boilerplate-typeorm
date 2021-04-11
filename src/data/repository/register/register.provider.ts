
import { User } from '../../../domain/entities/user.entity';
import { Connection } from 'typeorm';

export const registerProviders = [
    {
        provide: 'USERS_REGISTER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    },
];