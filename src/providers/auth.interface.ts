export const AUTH = 'AUTH';
export interface AuthenticationPayload {
    user: any
    payload: {
        type: string
        token: string
        role: string
    }
}
export interface IAuth {

    authenticate(user: any): Promise<any>
    buildResponsePayload(user: any, accessToken: string): AuthenticationPayload
}