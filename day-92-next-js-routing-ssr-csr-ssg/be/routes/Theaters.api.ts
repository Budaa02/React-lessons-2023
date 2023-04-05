import { Router } from "express";
import { getMovies } from "../controllers/movies.controller";
import {getTheaters,getTheaterById,searchTheaters,getComments} from "../controllers/theater.controller";
const theaterRouter = Router();

theaterRouter.get("/list", getTheaters);

theaterRouter.get("/byId/:id", getTheaterById)

theaterRouter.get("/search",searchTheaters)
theaterRouter.get("/test", getComments)
theaterRouter.get("/moviestest", getMovies)

export default theaterRouter