import {Request, Response } from "express";
import UserRoleModels from "../models/userrole_models";
export const postUserRoles = async (req:Request, res:Response) => {
    console.log(req.body)
    try{
        const userRole = new UserRoleModels(req.body);
        console.log(userRole)
        const result = await userRole.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({data:[]})
    }
}