//All MIDDLEWARE goes here
var middlewareObj = {};
var Workout = require("../models/workout");

middlewareObj.checkWorkoutOwnership = function (req, res, next){
    if(req.isAuthenticated()){
    Workout.findById(req.params.id, function(err, foundWorkout){
        if(err){
            req.flash("error", "Issue finding workout in database")
            res.redirect("/workouts");
        } else{
            if(foundWorkout.author.id.equals(req.user._id) || req.user._id.equals(LOCALADMIN)) {
                next();
            } else{
                req.flash("error", "You can only edit your own workouts")
                res.redirect("/workouts");
            }
        }
    });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("/login");
    }
}

// middlewareObj.checkCommentOwnership = function(req, res, next){
//     if(req.isAuthenticated()){
//     Comment.findById(req.params.comment_id, function(err, foundComment){
//         if(err){
//             req.flash("error", "Issue finding comment in database");
//             res.redirect("back");
//         } else{
//             if(foundComment.author.id.equals(req.user._id) || req.user._id.equals(LOCALADMIN)) {
//                 next();
//             } else{
//                 req.flash("error", "You can only edit your own comments");
//                 res.redirect("back");
//             }
//         }
//     });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("back");
//     }
// }

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;