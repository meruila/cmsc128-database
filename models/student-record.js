/*******************************
 * 
 * STUDENT RECORD SCHEMA
 * Attributes:
 *      Name (first, last)
 *      Degree Program (reference to Degree model)
 *      Student Number (Unique Identifier)
 * 
********************************/

const mongoose = require("mongoose");       

//schema
const SR_Schema = new mongoose.Schema({
    name: {
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        }
    },
    degree: {
        type: mongoose.ObjectId,
        required: true,
        ref: 'Degree'
    },
    studentNumber : {
        type: Number,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model("Student-Record", SR_Schema);