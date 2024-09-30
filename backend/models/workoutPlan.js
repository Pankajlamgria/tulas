const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
    day : {
        type : Number,
        required : true,

    },
    exercises : [
        {
            name : {type : String, required : true},
            sets : {
                type : Number,
                required : true,
            },
            reps : {
                type : Number,
                required : true,
            }
        }
    ]
});

const workoutPlan = new mongoose.Schema({
    month : {
        type : Number,
        required : true,
        },
    year : {
        type : Number,
        required : true,

    },
    workouts: [workoutSchema],
    createdAt: { type: Date, default: Date.now },
})