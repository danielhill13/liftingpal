
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    birthdate: Date,
    bodyweight: Number,
    goalweight: Number,

});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);