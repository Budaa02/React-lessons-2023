import {Router} from "express";
import { postUserRoles } from "../controller/userrole_controller";

const userRoleRouter = Router();

userRoleRouter.post("/userrole", postUserRoles)
export default userRoleRouter