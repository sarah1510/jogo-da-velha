"use strict"

function MenuOpcoes(){
    document.querySelector(".optionsBack").style.display = "flex"
}
function FecharOpcoes(){
    document.querySelector(".optionsBack").style.display = "none"
}

document.getElementById("options").addEventListener("click", MenuOpcoes)
document.getElementById("close").addEventListener("click", FecharOpcoes)


function reiniciar() { window.location.reload(); }
document.getElementById('reiniciar').addEventListener("click" , reiniciar)


const casa1 = document.getElementById("casa1")
const casa2 = document.getElementById("casa2")
const casa3 = document.getElementById("casa3")
const casa4 = document.getElementById("casa4")
const casa5 = document.getElementById("casa5")
const casa6 = document.getElementById("casa6")
const casa7 = document.getElementById("casa7")
const casa8 = document.getElementById("casa8")
const casa9 = document.getElementById("casa9")


function joga(casa){
    const container = document.querySelector(".casa")
    const letra = ``
    const casaClicada = document.getElementById(casa)
    
   if (casaClicada == `<img src="../img/pirata.png" alt="">` || casaClicada == `<img src="../img/marinha.png" alt="">`){
   }else{
        casaClicada === letra
        if (letra.innerHTML == `<img src="../img/pirata.png" alt="">`){

            letra.innerHTML = `<img src="../img/marinha.png" alt="">`
            container.appendChild(letra);

        }else if(letra.innerHTML == `<img src="../img/marinha.png" alt="">`){

            letra.innerHTML = `<img src="../img/pirata.png" alt="">`
            container.appendChild(letra)
        }
   }


}

function verifica(){
    if (((casa1 != '') && (casa2 != '') && (casa3 != '') && (casa1 == casa2) && (casa2 == casa3)) || ((casa1 != '') && (casa5 != '') && (casa9 != '') && (casa1 == casa5) && (casa5 == casa9)) || ((casa1 != '') && (casa4 != '') && (casa7 != '') && (casa1 == casa4) && (casa4 == casa7)) || ((casa4 != '') && (casa5 != '') && (casa6 != '') && (casa4 == casa5) && (casa5 == casa6)) || ((casa7 != '') && (casa8 != '') && (casa9 != '') && (casa7 == casa8) && (casa8 == casa9)) || ((casa2 != '') && (casa5 != '') && (casa8 != '') && (casa2 == casa5) && (casa5 == casa8)) || ((casa3 != '') && (casa6 != '') && (casa9 != '') && (casa3 == casa6) && (casa6 == casa9)) || ((casa7 != '') && (casa5 != '') && (casa3 != '') && (casa7 == casa5) && (casa5 == casa3))){
        alert('Você ganhou! Parabéns campeão!')
    }
 }
  
 
  