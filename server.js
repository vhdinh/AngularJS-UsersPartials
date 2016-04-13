var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res){
	res.render("index")
})


port = 8000
app.listen(port, function(){
	console.log("PORTTTTTTTTTT ",port)
})