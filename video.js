
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

var botonReiniciar= document.getElementById("botonReiniciar")

botonReiniciar.addEventListener("click" ,()=>{
    sunset.currentTime= 0
})

sunset.addEventListener("click" ,()=>{
    sunset.play();
})

sunset.addEventListener("dblclick" ,()=>{
    sunset.pause();
})
