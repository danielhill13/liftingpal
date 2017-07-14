
var express             = require('express'),
    app                 = express(),
    mongoose            = require("mongoose")
    bodyParser          = require('body-parser'),
    passport            = require('passport'),
    LocalStrategy       = require('passport-local'),
    methodOverride      = require('method-override'),
    expressSanitizer    = require('express-sanitizer'),
    Workout             = require('./models/workout'),
    ejsLint             = require('ejs-lint'),
    moment              = require('moment');

//ROUTES Requires
var workoutRoutes       = require('./routes/workout');
var indexRoutes       = require('./routes/index');
//DB Connection Config - avoids deprecation warning/issue
var dbUrl = process.env.DATABASEURL || 'mongodb://localhost/liftingpal';
mongoose.Promise = require('bluebird');
mongoose.connect(dbUrl);
mongoose.set('debug', true);

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


app.get('/', function(req, res){
    res.render('index');
})

app.get('/signup', function(req, res){
    res.render('signup');
})

app.get('/about', function(req, res){
    res.send("About");
})

//SHOW BY Date
app.get("/date", function(req, res){
    Workout.find({
        exercisedate: {
            $gte: Date("2017-06-09T00:00:00Z"),
            $lt:  Date("2017-07-13T00:00:00Z") 
        }
    }, function(err, workouts){
        if(err){
            console.log(err);
        } else {
            res.render('workouts/showdate', {workouts: workouts}) ;
        }
    });
});

app.use('/workouts', workoutRoutes);




app.listen(process.env.PORT || 3000, process.env.IP, function(req, res){
    console.log("Lifting App Started");
});