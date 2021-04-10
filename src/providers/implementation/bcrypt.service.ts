import { IBcrypt } from "../bcrypt.interface";
import { compare, hashSync } from "bcryptjs";
export class BcryptService implements IBcrypt {
    private readonly salt = 12
    crypt(value: string): string {
        return hashSync(value, this.salt)
    }
    async compare(hash: string, password: string): Promise<boolean> {
        return await compare(password, hash)
    }

}