import { User } from "../models/User";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import UserPrismaRepository from "../repositories/prisma/UserPrismaRepository";

class UserService {

    constructor( private userRepository: InMemoryUserRepository | UserPrismaRepository){

    }

    async getAll(): Promise<{data: User[]}> {
        const userData = await this.userRepository.getAll();
        return { data: userData };
    }

    async getById(id: string): Promise<{data: User}> {

        const userData = await this.userRepository.getById(id);

        if(!userData) {
            throw new Error('Este usuário nao existe!');
            
        }

        return { data: userData};

    }

    async create(data: User): Promise<{data: User}>{
        const userData = await this.userRepository.getByEmail(data.email);

        if(userData) {
            throw new Error('Já existe um usuario com este E-mail');
        }

        const addUserData = await this.userRepository.create(data)

        return  { data: addUserData }
    }
}


export default UserService;