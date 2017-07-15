
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

app.use('/workouts', workoutRoutes);




app.listen(process.env.PORT || 3000, process.env.IP, function(req, res){
    console.log("Lifting App Started");
});