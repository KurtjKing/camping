var mongoose = require ("mongoose");
var Campground = require("./models/campground")
var Comment = require("./models/comment");


var data =[
    {name:"clounds rest",
    image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quia enim adipisci, eum vitae saepe sunt pariatur consequatur ab culpa!"
},
{name:" bummer mtn",
image:"https://images.unsplash.com/photo-1513603354154-93eebb9e03b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quia enim adipisci, eum vitae saepe sunt pariatur consequatur ab culpa!"
},
{name:"seed mtn",
image:"https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quia enim adipisci, eum vitae saepe sunt pariatur consequatur ab culpa!"
}
]

function seedDB(){
    Campground.deleteMany({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed camps");
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    Comment.create(
                        {text:"this place is great",
                        author:"Homer"

                    },function(err,comment){
                        if(err){
                            console.log(err)
                        }else{
                            campground.comments.push(comment,);
                            campground.save();
                            console.log("created new comment");
                        }
                        
                      
                    })
                }
            });
        });
    });
   
   

}


module.exports = seedDB;