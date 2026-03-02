import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const userService = new UserService();

            const user = await userService.create({
                name, email, password
            });
            
            return res.status(201).json(user);

        } catch (e: any) {
            return res.status(400).json({
                message: e.message
            });
        }
    }
}