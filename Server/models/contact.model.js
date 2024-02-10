import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

// This Code all about Model
export const Contact = mongoose.model("Contact", contactSchema);