
var numOfDrumBtn = $(".drum").length;

for(var i = 0; i < numOfDrumBtn ;i++){

$(".drum")[i].addEventListener("click",function(){
    
    var btnpress = this.innerHTML;
    makesound(btnpress);
    pressAnimation(btnpress);
    
});

}
    
document.addEventListener("keypress",function(event){
    makesound(event.key);
    pressAnimation(event.key);
})



function pressAnimation(curKey){

    var active = document.querySelector("." + curKey);

    active.classList.add("pressed");

    setTimeout(function() {

        active.classList.remove("pressed");
    },100);
    
}



function makesound(key){
    switch (key) {

        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
                
                break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            
            break;

        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            
            break;

        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            
            break;

        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            
            break;
        default:
            break;
    }
}


