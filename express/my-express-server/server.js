// jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(request,response){
    response.send("<h1>Namaste Sheth</h1>");
})
app.get("/contact", function(request,response){
    response.send("<em><b>Contact me at: jainammithalaljain@gmail.com<em/><b><br><hr>My phone number is : 8452*****0 ");
})
app.get("/about", function(request,response){
    response.send("<em>This website is owned by <strong><b>Jainam Mithalal Jain<em/><b></strong>");
})

app.listen(3005,function(){
    console.log("server has started working");
})
