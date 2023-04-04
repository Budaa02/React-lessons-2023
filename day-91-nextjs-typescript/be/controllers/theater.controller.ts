import TheaterModel from "../models/theaters.model";
import { Request, Response} from "express"
import CommentsModel from "../models/comments.model";

export const getComments = async (req:Request, res:Response) => {
    const page: number = Number (req.query.page);
    const moviesPerPage: number = Number (req.query.moviesPerPage);
    try{
        const comments = await CommentsModel.find({})
        .limit(moviesPerPage)
        .skip(moviesPerPage * page);
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({data:[]});
    }
}
export const getTheaters = async (req:Request,res:Response) => {
    const page: number = Number (req.query.page);
    const moviesPerPage: number = Number (req.query.moviesPerPage);
    try{
        const theaters = await TheaterModel.find({})
        .limit(moviesPerPage)
        .skip(moviesPerPage * page);
        res.status(200).json(theaters);
    } catch (error) {
        res.status(404).json({data:[]});
    }
}
export const getTheaterById = async (req:Request,res:Response) => {
    try{
        const theaters = await TheaterModel.find({theaterId: Number(req.params.id)});
        res.status(200).json(theaters);
    } catch (error) {
        res.status(404).json({data:[]});
    }
}

export const searchTheaters = async (req:Request, res:Response) => {
    const keyword: string = String(req.query.keyword);
    try {
        console.log(req.query.keyword)
        const theaters = await TheaterModel.find({$or:[
            {"location.address.city":keyword},
            {"location.address.street1":keyword},
            {"location.address.state":keyword},
            {"location.address.zipcode":keyword}]});
        res.status(200).json(theaters);
    } catch (error) {
        res.status(404).json({data:[]})
    }
}