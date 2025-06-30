import mongoose from "mongoose";

const connectDB = async() => {
    await mongoose.connect(`${process.env.MONGODB_URL}/Yummy`)
            .then(()=>console.log("Connected"));
}

export default connectDB