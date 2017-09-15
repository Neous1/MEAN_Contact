var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactList", ["contactList"]);
var bodyParser = require("body-parser");

//.static tell express to look for static files in a public folder


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json())

app.get("/contactList", function(req, res){
    console.log("I received a GET request");

    db.contactList.find(function(err, docs){
      console.log(docs);
      res.json(docs);
    });
});

app.post("/contactList", function(req, res){
    console.log(req.body);
    //insert the item (doc) we parse and received to mongodb
    db.contactList.insert(req.body, function(err, doc){
        res.json(doc) // send back the data to our controller
    })
});
app.delete("/contactlist/:id", function(req, res){
    var id = req.params.id;
    console.log(id);
    //remove contact from db
    db.contactList.remove({_id:mongojs.ObjectId(id)},function(err, doc){
        res.json(doc);//send item to be remove back to controller
    });
});
app.get("/contactlist/:id", function(req, res){
    var id = req.params.id;
    console.log(id);
    //remove contact from db
    db.contactList.findOne({_id:mongojs.ObjectId(id)},function(err, doc){
        res.json(doc);//send item to be remove back to controller
    });

    app.put("/contactList/:id", function(req, res){
        var id=req.params.id;
        console.log(req.body.name);
    })
});
app.listen(3000);
console.log("Server running on port 3000")