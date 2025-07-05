import { User } from "../../models/User";
import UserPrismaRepository from "../prisma/UserPrismaRepository";
import { v4 as uuidv4 } from 'uuid';

class InMemoryUserRepository  implements UserPrismaRepository {

    private user: User[] = [];

    constructor() {
        this.user = [
            {
                id: '8a7404ac-5c4a-4bf5-b7b8-d4f7488df10b',
                name: 'user',
                email: 'user@gmail.com',
                password: '12345648'
            }
        ]
    }

    

    async getAll(): Promise<User[]>  {
        return this.user;
    }


    async getById(id: string): Promise<User | null> {
        const dataUser = this.user.find((item) => item.id === id);

        if(!dataUser) {
            return null;
        }

        return dataUser;
    }


    async getByEmail(email: string): Promise<User | null> {
        const dataUser = this.user.find((item) => item.email === email);

        if(!dataUser) {
            return null;
        }

        return dataUser;
    }
    async create(data: User): Promise<User> {
        data.id = uuidv4();
        this.user.push(data);
        return data;
    
    }
    

    async update(id: string, data: User): Promise<User> {
        const index = this.user.findIndex((item) => item.id === id);
        this.user[index] = data;
        return data;
    }

    async delete(id: string): Promise<string> {
        const index = this.user.findIndex((item) => item.id === id);

        delete this.user[index];

        return id;
    }

}

export default InMemoryUserRepository;

