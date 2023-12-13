import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return true
        }

        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB ga muvaffaqiyatli bo`glandi")
        return true;
    }

    catch (error) {
        console.log(error)
    }
}

export default connectDB