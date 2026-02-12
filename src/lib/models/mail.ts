import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    customId: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.email ||
    mongoose.model("email", emailSchema);
