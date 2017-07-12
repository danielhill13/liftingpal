var express = require("express"),
    router  = express.Router(),
    Workout = require("../models/workout");

//WORKOUT ROUTES
//INDEX
router.get("/", function(req, res){
    Workout.find({}, function(err, workouts){
        if(err){
            console.log(err);
        } else {
            res.render("workouts/index", {workouts: workouts});
        }
    });
});

//NEW
router.get("/new", function(req, res){
    res.render("workouts/new");
});
// CREATE
router.post("/", function(req, res){
    var exercise = req.sanitize(req.body.workout.exercise);
    var weight = req.sanitize(req.body.workout.weight);
    var reps = req.sanitize(req.body.workout.reps);
    var sets = req.sanitize(req.body.workout.sets);
    var exercisedate = req.sanitize(req.body.workout.exercisedate);
    var newWorkout = {exercise: exercise, weight: weight, reps: reps, sets: sets, exercisedate: exercisedate}
    Workout.create(newWorkout, function(err, newWorkout){
        if(err){
            console.log(err);
        } else {
            console.log(newWorkout);
            res.redirect("/workouts/new");
        }
    })
})
//SHOW
// router.get("/:id", function(req, res){
//     Destination.findById(req.params.id).populate("comments").exec(function(err, foundDestination){
//         if(err){
//             console.log(err);
//             res.redirect("/destinations");
//         }else {
//             res.render("destinations/show", {destination: foundDestination});
//         }
//     })
// });
//EDIT - takes me to edit destinations page
// router.get("/:id/edit", middleware.checkDestinationOwnership, function(req, res){
//     Destination.findById(req.params.id, function(err, foundDestination){
//         res.render("destinations/edit", {destination: foundDestination});
//         });
//     });
//UPDATE
// router.put("/:id", middleware.checkDestinationOwnership, function(req, res){
//     Destination.findByIdAndUpdate(req.params.id, req.body.destination, function(err, updatedDestination){
//         if(err){
//             res.redirect("/destinations");
//         } else {
//             res.redirect("/destinations/" + req.params.id);
//         }
//     });
// });
//DESTROY
// router.delete("/:id", middleware.checkDestinationOwnership, function(req, res){
//     Destination.findByIdAndRemove(req.params.id, function(err){
//         if(err){
//             console.log("Issue deleting object");
//             res.redirect("/destinations");
//         } else{
//             res.redirect("/destinations");
//         }
//     })
// });

module.exports = router;