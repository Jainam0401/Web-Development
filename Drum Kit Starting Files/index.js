var count = document.querySelectorAll("button").length;
for (var i = 0; i<count;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var buttonInnerHTML = this.innerHTML;
   ;
    buttonAnimation(buttonInnerHTML);

        this.style.color = "black" 
function  makeSound(buttonInnerHTML){
    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;
    
        default: alert(this.innerHTML)
            break;
    }
}
});


document.addEventListener("keypress",function(event){
  
    switch (event.key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;
    
    }




});
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    var change = activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
    
};

