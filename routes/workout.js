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
            res.redirect("/workouts");
        }
    })
})
//SHOW
router.get("/:id", function(req, res){
    Workout.findById(req.params.id).exec(function(err, foundWorkout){
        if(err){
            console.log(err);
            res.redirect("/workouts");
        }else {
            res.render("workouts/show", {workout: foundWorkout});
        }
    })
});
//SHOW BY Date

// EDIT - takes me to edit workout page
router.get("/:id/edit", function(req, res){
    Workout.findById(req.params.id, function(err, foundWorkout){
        res.render("workouts/edit", {workout: foundWorkout});
        });
    });
//UPDATE
router.put("/:id", function(req, res){
    Workout.findByIdAndUpdate(req.params.id, req.body.workout, function(err, updatedWorkout){
        if(err){
            console.log(err);
            res.redirect("/workouts");
        } else {
            res.redirect("/workouts/");
        }
    });
});
//DESTROY
router.delete("/:id", function(req, res){
    Workout.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("Issue deleting workout");
            res.redirect("/workouts");
        } else{
            res.redirect("/workouts");
        }
    })
});

module.exports = router;