import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully ✅ ${conn.connection.host}`);

    } catch (error) {
        console.log(`Connection failed: `, error.message);
        process.exit(1)
    }
}

export default dbConnect