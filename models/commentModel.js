import mongoose from "mongoose";

const cummentSchema = mongoose.Schema({
   comment:{
    type:String,
    require:true
   }
},{timestamps:true})

export default mongoose.model('comment' , cummentSchema);