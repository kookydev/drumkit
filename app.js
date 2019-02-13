// Play drum by keyboard press
window.addEventListener("keydown", checkKeyPressed);
window,addEventListener("keyup", checkKeyUp);  

let picNo = 0;

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
    66: function kick() {
            let pic = document.getElementById("kickPic");

        },
    73: function tink() {
            let pic = document.getElementById("tinkPic");
            if (picNo == 2){
                pic.src="/images/tink2.png"}
            else {
                pic.src="/images/tink1.png"
            }
        },
    70: function openHat() {
            let pic = document.getElementById("hihatPic");

        },
    71: function snare() {
            let pic = document.getElementById("snarePic");

        },
    72: function tom() {
            let pic = document.getElementById("tomPic");

    },
    75: function clap() {
            let pic = document.getElementById("clapPic");
            if (picNo == 2){
                pic.src="/images/clap2.png"}
            else {
                pic.src="/images/clap1.png"
            }
        },
    77: function boom() {
            let pic = document.getElementById("boomPic");

        },
    84: function ride() {
            let pic = document.getElementById("ridePic");

        },
    86: function closedHat() {
            let pic = document.getElementById("closehatPic");
            if (picNo == 2){
                pic.style.transform = "rotateX(20deg)";
                document.getElementById("hihatPic").src = "/images/hihat2.png";}
            else {
                pic.style.transform = "rotateX(0deg)";
                document.getElementById("hihatPic").src="/images/hihat1.png";
            }
        },
   };

function checkKeyPressed(e) {
    let keyCode = e.which;
    let sound = new Audio(sounds[keyCode]);
    sound.play();
    picNo = 2;
    actions[keyCode]();
};

function checkKeyUp(e) {
    let keyCode = e.which;
    picNo = 1;
    actions[keyCode]();
};

// Play music by mouse click



