import { PrismaClient } from "../../generated/prisma";
import { User } from "../../models/User";

const prisma = new PrismaClient();

class UserPrismaRepository {

    async getAll(): Promise<User[]>{
        const users = await prisma.user.findMany({
            include: {
                posts: true
            }
        });

        return users;
    }

    async create(data: User): Promise<User> {
        const { name, email, password } = data;
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
                
            }
        })

        return newUser;
    }

    async update(id: string, data: User): Promise<User> {
        const updateUser = await prisma.user.update({
            data,
            where: {
                id
            }
        })
    
        return updateUser;
    }

    async getById(id: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })

        return user;
    }

    async getByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        return user;
    }

    async delete(id: string): Promise<string> {
        const deletedUser = await prisma.user.delete({
            where: {
                id: '86a377cd-27b5-41e2-8403-8ba4d2b74d5f'
            }
        })

        console.log(deletedUser);
        return id;
    }

}

export default UserPrismaRepository;