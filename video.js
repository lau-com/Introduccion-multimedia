
var sunset = document.getElementById("sunset");

sunset.play();
sunset.pause();
sunset.currentTime= 0

var botonPlay= document.getElementById("botonPlay")

botonPlay.addEventListener("click" ,()=>{
    sunset.play();
})

var botonPause= document.getElementById("botonPause")

botonPause.addEventListener("click" ,()=>{
    sunset.pause();
})

var botonReiniciar= document.getElementById("botonReiniciar");

botonReiniciar.addEventListener("click" ,()=>{
    sunset.currentTime= 0
})

sunset.addEventListener("click" ,()=>{
    if(sunset.paused==true) {
    sunset.play();
    }
    else if (sunset.paused==false) {
    sunset.pause();
    }         
})

var audioPrueba= document.getElementById("audioPrueba");

var btnPlayAudio= document.getElementById("btnPlayAudio");

btnPlayAudio.addEventListener("click" ,()=>{
    if(audioPrueba.paused == true) {
        audioPrueba.play();
    }
    else if(audioPrueba.paused == false) {
        audioPrueba.pause();
    }
})

var before= document.getElementById("before");
var after= document.getElementById("after");

before.addEventListener("click" ,()=>{
    before.currentTime= 5;
})

after.addEventListener("click" ,()=>{
    after.currentTime= 15;
})

var volumenm= document.getElementById("volumenm");

var volumena= document.getElementById("volumena");

volumenm.addEventListener("click" ,()=>{
    volumenm.volume = 0.1;
})

volumena.addEventListener("click" ,()=>{
    volumena.volume = 0.5;
})