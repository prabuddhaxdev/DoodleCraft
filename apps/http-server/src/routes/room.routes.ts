import { Router } from "express";
import { auth } from "../middlewares/auth.middlewares";
import { createRoom } from "../controllers/createRoom.controllers";


const roomRouter = Router();

roomRouter.post("/room", auth, createRoom);
