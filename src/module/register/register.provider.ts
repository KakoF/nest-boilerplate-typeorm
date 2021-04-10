
import { Connection } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

export const registerProviders = [
    {
        provide: 'USERS_REGISTER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    },
];