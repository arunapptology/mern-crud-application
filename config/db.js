import mongoose from "mongoose";

const connectDB = async () =>{

try {
   const conn = await mongoose.connect('mongodb://localhost:27017/nodecrud') 

   console.log(`successfull ${conn}`)
} catch (error) {
    console.log(`connection error ${error}`)
}

}

export default connectDB

