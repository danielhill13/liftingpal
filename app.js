
var express             = require('express'),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require('body-parser'),
    flash               = require('connect-flash'),
    passport            = require('passport'),
    LocalStrategy       = require('passport-local'),
    methodOverride      = require('method-override'),
    expressSanitizer    = require('express-sanitizer'),
    Workout             = require('./models/workout'),
    User                = require('./models/user'),
    ejsLint             = require('ejs-lint'),
    moment              = require('moment');


    //ROUTES Requires
var workoutRoutes       = require('./routes/workout');
var indexRoutes         = require('./routes/index');



//DB Connection Config - avoids deprecation warning/issue
var dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/liftingpal';
mongoose.Promise = require('bluebird');
mongoose.connect(dbUrl);
mongoose.set('debug', true);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
app.use(flash());

//PASSPORT
app.use(require('express-session')({
    secret: 'this is a test secret for local development',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// //PASS LOGGED IN USER TO ALL ROUTES - KEEP BELOW PASSPORT CONFIG
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});


app.get('/', function(req, res){
    res.render('index');
})

app.get('/about', function(req, res){
    res.send("About");
});

app.get('/lotto', function(req, res){
    res.render('lotto');
});


app.use(indexRoutes);
app.use('/workouts', workoutRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(req, res){
    console.log("Lifting App Started");
});
