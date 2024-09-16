import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name :{
        type: String,
        require : true
    }, 
    email : {
        type: String,
        require : true,
        lowercase: true,
        trim: true,
        unique:true
    },
    password :  {
        type: String,
        require : true
    }
},{timestamps:true})
  
export default mongoose.model('user' ,userSchema);

