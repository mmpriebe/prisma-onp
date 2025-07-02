import { Request, Response } from "express";

import UserService from "../services/UserService";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import UserPrismaRepository from "../repositories/prisma/UserPrismaRepository";

const userService = new UserService(new InMemoryUserRepository())

class UserController {

    async getAll(Req: Request, Res: Response){
        try {
        
            const userData = await userService.getAll();
            Res.json(userData);

        } catch (err: any) {
            Res.status(400).json({error: err.message})    
        }
    }

    
    async getById(Req: Request, Res: Response){
        try {
        
            if(!Req.params.id) {
                throw new Error('O ID é obrigatório!')
            }

            const dataUser = await userService.getById(Req.params.id);

            Res.json(dataUser).status(200);

        } catch (err: any) {
            Res.status(400).json({error: err.message})    
        }
    }


    async create(Req: Request, Res: Response){
        try {

            const data = Req.body;

            if(!data.name || !data.email || !data.password) {
                throw new Error('Por favor, envie todos os dados obrigatórios!');
            }

            const userCreatedData = await userService.create(data);

            Res.json(userCreatedData).status(201);
        
        } catch (err: any) {
            Res.status(400).json({error: err.message})    
        }
    }


    async update(Req: Request, Res: Response){
        try {
        
        } catch (err: any) {
            Res.status(400).json({error: err.message})    
        }
    }


    async delete(Req: Request, Res: Response){
        try {
        
        } catch (err: any) {
            Res.status(400).json({error: err.message})    
        }
    }
    

}


export default UserController;