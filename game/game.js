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
  
    const casaClicada = document.getElementById(casa)
    

        if (casaClicada != ``){
           
            casaClicada.innerHTML = `<img src="../img/marinha.png" alt="">`
       
          
        }else{

        }
   }




 
  