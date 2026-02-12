import mongoose from "mongoose";

const connectDB = async () => {
    // Check if we are already connected to avoid multiple requests
    if (mongoose.connection.readyState >= 1) {
        console.log("connection allready stablished with db");
        return;
    };
    console.log(process.env.MONGODB_URL!);

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL!);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("Connection failed", err);
        process.exit(1);
    }
};

export default connectDB;
