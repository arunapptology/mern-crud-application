import mongoose from "mongoose";


const postModels = mongoose.Schema({
   title:{
    type: String,
    require:true
   },
   description:{
    type: String,
    require:true
   }

},{timestamps:true})


export default mongoose.model('post' ,postModels);