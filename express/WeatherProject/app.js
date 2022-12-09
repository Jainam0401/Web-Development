const https = require("node:https");

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); 
    
    

   
});
app.post("/",function(req,res){

    console.log();
    
    const query = req.body.cityname;
    const appid = "6a023c9fbcd1eaa7df6539d3a652622e"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid;
   
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
           const weatherData = JSON.parse(data);
           const weatherDesription = weatherData.weather[0].description
           const icon = weatherData.weather[0].icon

           const iconURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
           
           res.write("<p>Hello EveryOne</p>");
           res.write("<h1>Today's climate at "+query+" will be "+ weatherDesription+"</h1>");
           res.write("<img src ="+ iconURL+">");
           res.send();
           console.log(weatherDesription)

 });


    });
    
})


app.listen(5090,function(){
    console.log("Server is started at 5090");
});