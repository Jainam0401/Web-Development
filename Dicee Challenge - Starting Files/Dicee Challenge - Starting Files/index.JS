var randomNumber1 = Math.floor(Math.random() * 6 )+1;
var randomNumber2 = Math.floor(Math.random() * 6 )+1;

var randomImage1 =  "dice"+randomNumber1+".png";
var randomImage2 =  "dice"+randomNumber2+".png";

var randomImageSource1 = "images/" + randomImage1;
var randomImageSource2 = "images/" + randomImage2;

var Image1 = document.querySelectorAll("img")[0];
var randValues1 = Image1.setAttribute("src",randomImageSource1);

var Image2 = document.querySelectorAll("img")[1];
var randValues2 = Image2.setAttribute("src",randomImageSource2);


var heading = document.querySelector("h1");

if (randomNumber1>randomNumber2){
    heading.innerHTML = "Player1 won!!"
}

if (randomNumber2>randomNumber1){
    heading.innerHTML = "Player2 won!!"
}
if (randomNumber1 == randomNumber2){
   heading.innerHTML = "Draw!"
}