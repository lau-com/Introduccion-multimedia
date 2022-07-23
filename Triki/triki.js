var turno = "boton"

var TodasLasCasillas=document.getElementsByClassName("casilla")
TodasLasCasillas= Array.from(TodasLasCasillas);

for (const index in TodasLasCasillas){
    console.log("Creando evento para la casilla: "+index);
    let Elemento = TodasLasCasillas[index];
    Elemento.addEventListener("click",()=>{
        let img = Elemento.querySelector("img");
        if (turno == "cuadrado") {
            img.src = "cuadrado.svg";
            turno = "circulo"
        } else{
            img.src = "circulo.svg";
            turno = "cuadrado";
        }
    })
}

