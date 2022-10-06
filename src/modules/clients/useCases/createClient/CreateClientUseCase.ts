import { prisma } from "../../../../../prisma/PrismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ password, username }: ICreateClient) {
        
        // validar se o usuário existe
        const userExists = await prisma.clients.findFirst({
            where: {
                username
            },
        })

        if(userExists) {
            throw new Error('Client already existss')
        }
        // criptografar a senha

        const hashPassword = await hash(password, 10);

        // salvar o client
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
            }
        })
        return client;

    }
}