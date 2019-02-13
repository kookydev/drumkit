// Play drum by keyboard press
window.addEventListener("keydown", checkKeyPressed);

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

const drumAnimation = (el) => {
    el.style.transform = "scale(1.05)";
    setTimeout(function(){el.style.transform = "scale(.95)";}, 100);
    setTimeout(function(){el.style.transform = "scale(1.05)";}, 200);
    setTimeout(function(){el.style.transform = "scale(1)";}, 300);
}

const cymbalAnimation = (el) => {
    el.style.transform = "rotateX(-45deg)";
    setTimeout(function(){el.style.transform = "rotateX(45deg)";}, 200);
    setTimeout(function(){el.style.transform = "rotateX(-25eg)";}, 400);
    setTimeout(function(){el.style.transform = "rotateX(0deg)";}, 500);
}

 let actions = {
    66: function kick() {
            let pic = document.getElementById("kickPic");
            drumAnimation(pic);
        },
    73: function tink() {
            let pic = document.getElementById("tinkPic")
            pic.src="/images/tink2.png"
            setTimeout(function(){pic.src="/images/tink1.png"}, 100)
        },
    70: function openHat() {
            let pic = document.getElementById("hihatPic");
            cymbalAnimation(pic);
        },
    71: function snare() {
            let pic = document.getElementById("snarePic");
            drumAnimation(pic)
        },
    72: function tom() {
            let pic = document.getElementById("tomPic");
            drumAnimation(pic)
    },
    75: function clap() {
            let pic = document.getElementById("clapPic");
            pic.src="/images/clap2.png";
            setTimeout(function(){pic.src="/images/clap1.png"}, 100);
        },
    77: function boom() {
            let pic = document.getElementById("boomPic");
            pic.style.transform = "rotate(-20deg) scale(1.3)";
            setTimeout(function(){pic.style.transform = "rotate(0deg) scale(1)"}, 200)
        },
    84: function ride() {
            let pic = document.getElementById("ridePic");
            cymbalAnimation(pic);
        },
    86: function closedHat() {
            let pic = document.getElementById("closehatPic");
            pic.style.transform = "rotateX(20deg)";
            document.getElementById("hihatPic").src = "/images/hihat2.png";
            setTimeout(function(){
                pic.style.transform = "rotateX(0deg)";
                document.getElementById("hihatPic").src="/images/hihat1.png";}, 100)
            
        },
   };

function checkKeyPressed(e) {
    e.preventDefault;
    let keyCode = e.which;
    let sound = new Audio(sounds[keyCode]);
    sound.play();
    actions[keyCode]();
};


// Play music by mouse click



