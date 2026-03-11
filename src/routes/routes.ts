import { Router } from "express";
import { UserController } from "../controllers/userController";
import { validateCreateUser } from "../middlewares/validateCreateUser";
import { validateLogin } from "../middlewares/validateLogin";

const router= Router();

const userController = new UserController();

router.post("/users", validateCreateUser, userController.create);

router.post("/login", validateLogin, userController.login)

export {router};