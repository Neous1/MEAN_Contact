var express = require("express");

var app = express();

//.static tell express to look for static files in a public folder
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000")