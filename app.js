var express         = require('express'),
    app             = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('index');
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