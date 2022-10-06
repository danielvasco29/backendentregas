import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../../prisma/PrismaClient";

interface ILoginClient {
    username: string;
    password: string;
}

export class LoginClientUseCase {
    async execute({ password, username }: ILoginClient) {
        //receber username, password

        //verificar se username cadastrado
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if(!client) {
            throw new Error('Username or Password invalid!')
        }

        //verificar se senha corresponde ao username
        const verify = compare(password, client.password)
        if(!verify) {
            throw new Error('Username or Password invalid!')
        }

         //gerar o token
         const token = sign({username}, "SECRET", {
            subject: client.id,
            expiresIn: '1d',
         });

         return {
            token,
         }
    }
    
}