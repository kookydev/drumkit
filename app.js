// Play drum by keyboard press
window.addEventListener("keydown", checkKeyPressed);
  
let sounds = {
  56:"/sounds/openhat.wav", 
  66:"/sounds/kick.wav",
  73:"/sounds/tink.wav",
  70:"/sounds/hihat.wav",
  71:"/sounds/snare.wav",
  72:"/sounds/tom.wav",
  75:"/sounds/clap.wav",
  77:"/sounds/boom.wav",
  84:"/sounds/ride.wav",
  86:"/sounds/openhat.wav"
 };


function checkKeyPressed (e) {
    let keyCode = e.which;
    let sound = new Audio(sounds[keyCode]);
    sound.play();
};
// Play music by mouse click



