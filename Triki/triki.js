var turno = "estrella"

var TodasLasCasillas=document.getElementsByClassName("casilla")
TodasLasCasillas= Array.from(TodasLasCasillas);

for (const index in TodasLasCasillas){
    console.log("Creando evento para la casilla: "+index);
    let Elemento = TodasLasCasillas[index];
    Elemento.addEventListener("click",()=>{
        let img = Elemento.querySelector("img");
        if (turno == "estrella") {
            img.src = "estrella.svg";
            turno = "circulo"
        } else{
            img.src = "circulo.svg";
            turno = "estrella";
        }
    })
}

for (const index in TodasLasCasillas){
    console.log("Creando evento para la casilla: "+index);
    let Elemento = TodasLasCasillas[index];
    Elemento.addEventListener("dblclick",()=>{
        let img = Elemento.querySelector("img");
        img.src= "";
    })
}

var botonReiniciar= document.getElementById("botonReiniciar");

botonReiniciar.addEventListener("click" ,()=>{
    for (const index in TodasLasCasillas){
        let img =TodasLasCasillas[index].querySelector("img");
        img.src = "";
    }
    turno= "estrella"
})