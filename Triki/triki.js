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
        verificar()
    })
}

for (const index in TodasLasCasillas){
    console.log("Creando evento para la casilla: "+index);
    let Elemento = TodasLasCasillas[index];
    Elemento.addEventListener("dblclick",()=>{
        let img = Elemento.querySelector("img");
        img.src= "#";
    })
}

var botonReiniciar= document.getElementById("botonReiniciar");

botonReiniciar.addEventListener("click" ,()=>{
    for (const index in TodasLasCasillas){
        let img =TodasLasCasillas[index].querySelector("img");
        img.src = "#";
    }
    turno= "estrella"
})
function verificar() {
    let A = document.querySelector("#A img");
    let B = document.querySelector("#B img");
    let C = document.querySelector("#C img");
    let D = document.querySelector("#D img");
    let E = document.querySelector("#E img");
    let F = document.querySelector("#F img");
    let G = document.querySelector("#G img");
    let H = document.querySelector("#H img");
    let I = document.querySelector("#I img");
    
    let letrerito = document.getElementById ("letrerito");

    if(A.src == B.src  && C.src ==B.src && !A.src.endsWith("#")){
       letrerito.innerHTML="GANO FILA 1"
    }
    
    if(D.src == E.src  && F.src ==E.src && !D.src.endsWith("#")){
        letrerito.innerHTML="GANO FILA 2" 
    }

    if(G.src == H.src  && I.src ==H.src && !G.src.endsWith("#")){
        letrerito.innerHTML="GANO FILA 3"
    }

    if(A.src == E.src  && I.src ==E.src && !A.src.endsWith("#")){
        letrerito.innerHTML="GANO DIAGONAL 1"
    }

    if(C.src == E.src  && G.src ==E.src && !C.src.endsWith("#")){
        letrerito.innerHTML="GANO DIAGONAL 2"
    }

    if(A.src == D.src  && G.src ==D.src && !A.src.endsWith("#")){
        letrerito.innerHTML="GANO COLUMNA 1"
    }

    if(B.src == E.src  && H.src ==E.src && !B.src.endsWith("#")){
        letrerito.innerHTML="GANO COLUMNA 2"
    }

    if(C.src == E.src  && I.src ==E.src && !C.src.endsWith("#")){
        letrerito.innerHTML="GANO FILA 1"
    }

}