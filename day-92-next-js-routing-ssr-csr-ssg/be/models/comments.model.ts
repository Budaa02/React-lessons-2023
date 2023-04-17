import mongoose,{Schema} from "mongoose";
interface IComments {
   _id:{type:mongoose.Schema.Types.ObjectId, ref:"_id"},
   name:string,
   email:string,
   movie_id:{type: mongoose.Schema.Types.ObjectId, ref: "Movies"},
   text:string,
   date:Date
}

const CommentsSchema: Schema = new Schema({});

const CommentsModel = mongoose.model<IComments>("Comments", CommentsSchema)

export default CommentsModel