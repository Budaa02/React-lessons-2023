import mongoose,{Schema} from "mongoose";

interface Iuser {
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref:"user_id",
    },
    first_name:{
        type:String,
        required:[true, "Enter the First Name"],
    },
    last_name:{
        type:String,
        required:[true, "Enter the Last Name"],
    },
    email:{
        type:String,
        required:[true, "Please provide an Email!"],
        unique:[true, "Email Exist"]
    },
    password:{
        type:String,
        required:[true, "Please provide a password!"],
        unique:false
    },
    phone:{
        type:Number,
        munimun:0,
    },
    address:{
        type:String,
        required: [true, "Enter the address"],
    },
    user_role_id:{
        category: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"UserRole"
        }
    }
  
}


const UserSchema : Schema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref:"user_id",
    },
    first_name:{
        type:String,
        required:[true, "Enter the First Name"],
    },
    last_name:{
        type:String,
        required:[true, "Enter the Last Name"],
    },
    email:{
        type:String,
        required:[true, "Please provide an Email!"],
        unique:[true, "Email Exist"]
    },
    password:{
        type:String,
        required:[true, "Please provide a password!"],
        unique:false
    },
    phone:{
        type:Number,
        munimun:0,
    },
    address:{
        type:String,
        required: [true, "Enter the address"],
    },
    user_role_id:{
        category: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"UserRole"
        }
    },
    gender: {
        type:String,
        enum:["Point"],
        required:true,
    }
});
const UserModels = mongoose.model<Iuser>("User", UserSchema)

export default UserModels