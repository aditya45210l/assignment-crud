import mongoose from "mongoose";
import { nanoid } from "nanoid";

const WhatsAppSchema = new mongoose.Schema(
    {
        customId: {
            type: String,
            default: () => nanoid(10),
            unique: false,
        },
        mobileNumber: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.WhatsApp ||
    mongoose.model("WhatsApp", WhatsAppSchema);
