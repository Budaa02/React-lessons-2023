import {Router} from "express";
import { postUser } from "../controller/user_controller";

const userRouter = Router();

userRouter.post("/users",postUser)
export default userRouter