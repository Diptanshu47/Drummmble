//function for detecting key/clicks
function dhun(sound){
    switch(sound){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();   
        break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();   
        break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();   
        break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();   
        break;
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();   
        break;
        case "k":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();   
        break;
        case "i":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();   
        break;
        default:
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();   
        
    }
}



//detecting clicks


for(var i=0; i<=6; i++){
    document.querySelectorAll("button")[i].addEventListener("click",cluck);
}

function cluck(){

    var butt=this.textContent;
    dhun(butt);

    anime(butt);

}



//detecting keyboard press

for(var i=0;i<6;i++){
    document.addEventListener("keydown",press);
}

function press(event){

    be=event.key;
    dhun(event.key);

    anime(event.key);

}

//animation

function anime(cekc){

    var kee=document.querySelector("."+cekc);

    kee.classList.add("pressed");

    setTimeout(function(){
        kee.classList.remove("pressed");
    },100)
}