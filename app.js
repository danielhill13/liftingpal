
var express             = require('express'),
    app                 = express(),
    mongoose            = require("mongoose")
    bodyParser          = require('body-parser'),
    passport            = require('passport'),
    LocalStrategy       = require('passport-local'),
    methodOverride      = require('method-override'),
    expressSanitizer    = require('express-sanitizer');


//DB Connection Config - avoids deprecation warning/issue
mongoose.Promise = global.Promise;
var promise = mongoose.connect('process.env.DATABASEURL' || 'mongodb://localhost/liftingpal', {
   useMongoClient: true
});


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('index');
})

app.get('/signup', function(req, res){
    res.render('signup');
})


//Workouts Routes
//INDEX
app.get('/workouts', function(req, res){
    res.render('workouts/index')
})

//NEW
app.get('/workouts/new', function(req, res){
    res.render('workouts/new');
})


















app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Lifting App Started");
});