import { Request, Response } from "express"
import { LoginClientUseCase } from "./LoginClientUseCase";

export class LoginClientController {
    async control(req: Request, res: Response) {
        const { username, password } = req.body;

        const loginClientUseCase = new LoginClientUseCase();

        const login = await loginClientUseCase.execute({
            password, username
        })

        return res.status(200).json(login)
    }
}