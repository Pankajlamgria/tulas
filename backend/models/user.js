import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure email is unique
        trim: true,    // To remove extra spaces
        lowercase: true // Store email in lowercase
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0 // Optional: Ensure age is non-negative
    },
    height: {
        type: Number,
        required: true,
        min: 0 // Optional: Ensure height is non-negative
    },
    weight: {
        type: Number,
        required: true,
        min: 0 // Optional: Ensure weight is non-negative
    }
});

export default mongoose.model('User', userSchema);
