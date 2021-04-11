export const USER_REPOSITORY = 'USER REPOSITORY';

export interface IUserRepository {
    user(id: string): Promise<any>

}