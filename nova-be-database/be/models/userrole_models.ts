import mongoose,{Schema} from "mongoose";

interface Iuserrole{
    userRole_id:{
        type:string,
        
    },
    userRole_name:string
}

const UserRoleSchema: Schema = new Schema({
    userRole_id:{
        type: String,
        
    },
    userRole_name:String
});


const UserRoleModels = mongoose.model<Iuserrole>("UserRole", UserRoleSchema);
export default UserRoleModels