import { prisma } from '../database/prismaClient'
import bcrypt from 'bcrypt'

interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export class UserService {
    async create(data: CreateUserDTO) {

        //aqui estou procurando um unico email, se ele existe, lança um erro se nao continua a criação do usuario
        const userExists = await prisma.user.findUnique({
            where: { email: data.email }
        });
        if (userExists) {
            throw new Error('User already exists');
        }

        // criptografando a senha 
        const hashedPassword = await bcrypt.hash(data.password, 10)


        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true
            }

        });
        return user;
    }
}