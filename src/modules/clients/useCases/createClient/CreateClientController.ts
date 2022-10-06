import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async control(req: Request, res: Response): Promise<Response> {
        const { password, username } = req.body;

        const createClientUseCase = new CreateClientUseCase();

        const createClient = await createClientUseCase.execute({ username, password });

        return res.status(200).json(createClient)
    }
}

