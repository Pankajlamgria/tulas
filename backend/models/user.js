import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    workoutPlans: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkoutPlan',
        default: null 
    },
    dietPlans: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DietPlan',
        default: null 
    }
});

const User = mongoose.model('User', userSchema);

export default User;
