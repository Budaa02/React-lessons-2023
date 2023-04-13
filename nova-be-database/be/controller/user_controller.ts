import {Request, Response } from "express" ;
import UserModels from "../models/user_models";
export const postUser = async (req:Request, res:Response) => {
    try{
        const user = new UserModels(req.body);
        const result = await user.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({data:error})
    }
}