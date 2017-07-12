var mongoose = require("mongoose");

var workoutSchema = new mongoose.Schema({
    exercise: String,
    weight: Number,
    reps: Number,
    sets: Number,
    created: {type: Date, default: Date.now},
    exercisedate: Date
    // ,
    // author: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectID,
    //         ref: "User"
    //     },
        // username: String
    // }
});


module.exports = mongoose.model("Workout", workoutSchema);