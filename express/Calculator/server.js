const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res) {
    res.sendFile(__dirname+"/new.html");
});

app.post("/bmicalculator",function(req,res){
    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)
    var n = num1/(num2*num2)
    res.send("Your BMI is " + n)
    
})











app.listen(1010,function(){
    console.log("server started at port 1010")
});