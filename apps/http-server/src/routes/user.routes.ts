import { Router } from "express";
import { signin, signup } from "../controllers/user.controllers";


const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
