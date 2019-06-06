var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name:"salmon creek", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
    {name:"dawsons creek", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
    {name:"silly creek", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
    {name:"salmon creek", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
    {name:"dawsons creek", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
    {name:"silly creek", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"}
];

var PORT = process.env.PORT || 3000;




app.get("/",function(req,res){
    res.render("landing");
});


app.get("/campgrounds",function(req,res){
   

    res.render("campgrounds",{campgrounds:campgrounds});
});


app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name , image:image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});





app.listen(PORT, function () {
    console.log("yelpcamp running on port " + PORT + "!");
  });