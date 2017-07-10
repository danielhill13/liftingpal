var express         = require('express'),
    app             = express();


app.get('/', function(req, res){
    res.send("welcome to the weightlifting logger");
})





















app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Lifting App Started");
});