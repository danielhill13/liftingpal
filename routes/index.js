var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Workout = require('../models/workout');
var middleware = require('../middleware/index');

router.get("/register", function(req, res){
    res.render("user/register");
})

router.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash('error', err.message);
            return res.render('user/register');
        }
        passport.authenticate('local')(req, res, function(){
            req.flash('success', 'Welcome to the Lifting Pal app ' + user.username);
            res.redirect('/workouts');
        })
    })
})

//show login form
router.get("/login", function (req, res){
    res.render("user/login");
})
//login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function (req, res){
})
//logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/");
})

module.exports = router;