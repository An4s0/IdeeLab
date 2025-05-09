import mongoose from "mongoose";

async function connect(){
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        .then(() => {
            console.log("MongoDB connected successfully")
        })
    } catch (error) {
        console.log("MongoDB connection error: ", error)
    }
}

export default connect