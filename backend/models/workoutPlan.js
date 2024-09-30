const mongoose = require('mongoose');

// Define workout schema
const workoutSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: true,
        min: 1,
        max: 31, // Assuming day corresponds to days of the month
    },
    exercises: [
        {
            name: {
                type: String,
                required: true,
                trim: true
            }, // Trim to avoid leading/trailing whitespaces
            sets: {
                type: Number,
                required: true,
                min: 1, // Ensuring sets are at least 1
            },
            reps: {
                type: Number,
                required: true,
                min: 1, // Ensuring reps are at least 1
            },
        },
    ],
});

// Define workout plan schema
const workoutPlanSchema = new mongoose.Schema({
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12, // Month should be between 1 (Jan) and 12 (Dec)
    },
    year: {
        type: Number,
        required: true,
        min: 2000, // Set a lower limit for valid years (e.g., 2000+)
        max: new Date().getFullYear() + 10, // Limit to reasonable future years (current year + 10)
    },
    workouts: {
        type: [workoutSchema], // Embedding workoutSchema
        validate: [arrayLimit, '{PATH} exceeds the limit of 31'], // Custom validator to limit workout days
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// Custom validator function to limit the number of workouts to 31
function arrayLimit(val) {
    return val.length <= 31;
}

// Creating and exporting the model
const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

module.exports = WorkoutPlan;
