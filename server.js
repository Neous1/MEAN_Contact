var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactList", ["contactList"]);

//.static tell express to look for static files in a public folder


app.use(express.static(__dirname + "/public"));

app.get("/contactList", function(req, res){
    console.log("I received a GET request");

    var contactList=[
        {
            name: "Tim",
            email: "tim@email.com",
            number: "(111) 111-1111"
        },
        {
            name: "Emily",
            email: "emily@email.com",
            number: "(222) 222-2222"
        },
        {
            name: "John",
            email: "john@email.com",
            number: "(333) 333-3333"
        }
    ]

    res.json(contactList);
});


app.listen(3000);
console.log("Server running on port 3000")