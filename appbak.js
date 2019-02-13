// Play drum by keyboard press
window.addEventListener("keydown", checkKeyPressed);
window,addEventListener("keyup", checkKeyUp);  
let sounds = {
  66:"/sounds/kick.wav",
  73:"/sounds/tink.wav",
  70:"/sounds/openhat.wav",
  71:"/sounds/snare.wav",
  72:"/sounds/tom.wav",
  75:"/sounds/clap.wav",
  77:"/sounds/boom.wav",
  84:"/sounds/ride.wav",
  86:"/sounds/hihat.wav"
 };

 let actions = {
    66:"kick()",
    73:"tink",
    70:"openHat()",
    71:"snare()",
    72:"tom()",
    75:"clap()",
    77:"boom()",
    84:"ride()",
    86:"closeHat()"
   };

   let picNo = 0;

function checkKeyPressed(e) {
    let keyCode = e.which;
    let sound = new Audio(sounds[keyCode]);
    sound.play();
    picNo = 2;
    let funct = actions[keyCode];
    funct.loadFunction();
};

function checkKeyUp(e) {
    let keyCode = e.which;
    picNo = 1;
    actions[keyCode].loadFunction();
};

const ride = () => {
    
}

const openHat = () => {
    
}

const snare = () => {
    
}

const tom = () => {
    
}

const clap = () => {
    
}

const closeHat = () => {
    
}

const kick = () => {
    
}

const tink = () => {
    let pic = document.getElementById("tinkPic");
    if (picNo = 2){
        pic.src="/images/tink2.png"}
    else {
        pic.src="/images/tink1.png"
    }
}

const boom = () => {
    
}


// Play music by mouse click



