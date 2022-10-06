import { Router } from "express";
import { LoginClientController } from "../../modules/account/useCases/loginClient/LoginClientController";

import { CreateClientController } from "../../modules/clients/useCases/createClient/CreateClientController";


const router = Router();

const createClientController = new CreateClientController();
const loginClientController = new LoginClientController()

router.post("/clients", createClientController.control);
router.post("/logins", loginClientController.control);

export { router };