const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,

    },
    password : {
        type : String,
        required : true,

    },
    Age : {
        type : Number,
        required : true,
    },

    height : {
        type : Number,
        required : true,

    },
    weight : {
        type : Number,
        required: true,
    }
    
})
module.exports = userSchema;