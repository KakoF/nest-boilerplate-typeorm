// base.entity.ts

import { PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ObjectIdColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @ObjectIdColumn()
    id: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;

}