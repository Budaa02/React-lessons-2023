import { Request, Response} from "express"
import moviesModel from "../models/movies.models";
export const getComments = async (req:Request, res:Response) => {
    const page: number = Number (req.query.page);
    const moviesPerPage: number = Number (req.query.moviesPerPage);
    try{
        const comments = await moviesModel.find({})
        .limit(moviesPerPage)
        .skip(moviesPerPage * page);
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({data:[]});
    }
}