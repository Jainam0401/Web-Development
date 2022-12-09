const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
   
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var results = num1+ num2
    res.send("the result of the sum is "+results);
});

app.listen(3000,function(){
    console.log("sever has started working at port 3000");
}); 