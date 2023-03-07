import express from "express";
import { getUserRole } from "../services/budaadb-services.js";

const user_role_router = express.Router();

user_role_router.get("/user_role", async (request, response) => {
  const result = await getUserRole();
  response.status(200).send(result);
});
export default user_role_router;
