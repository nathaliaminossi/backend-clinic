import { prisma } from '../database/prismaClient'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

    async login(email: string, password: string) {
        const emailExist = await prisma.user.findUnique({
            where: {email: email}
        })
          if (!emailExist) {
            throw new Error('Email not exists');
        }

        const passwordCompare = await bcrypt.compare( password, emailExist.password );
          
              if (!passwordCompare) {
                throw new Error('incorrect password')
        }

        const token = jwt.sign(
            {id: emailExist.id},
            process.env.JWT_SECRET!,
            {expiresIn: '1d'}
        )
        return token;
    }
}