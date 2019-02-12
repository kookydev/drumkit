// Play drum by keyboard press

// Play music by mouse click

window.addEventListener("keydown", checkKeyPressed);
  
let sounds = {
  56:"openhat", 
  66:"kick",
  73:"boom",
  70:"hihat",
  71:"snare",
  72:"tom",
  75:"clap",
  84:"ride"
 };

const main = document.getElementById("main");
function checkKeyPressed (e) {
  
  let keyCode = e.which;
  console.log(keyCode);
  let sound = document.getElementById(sounds[keyCode])
  console.log(sound);
  sound.play();
  
}