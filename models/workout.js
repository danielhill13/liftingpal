var mongoose = require("mongoose");

var workoutSchema = new mongoose.Schema({
    exercise: String,
    weight: {
        units: String,  //Pounds or Kilos
        weight: Number
    },
    reps: Number,
    sets: Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User"
        },
        // username: String
    }
});


module.exports = mongoose.model("Workout", workoutSchema);