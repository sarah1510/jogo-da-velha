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

const MatrizDoJogo = (indice, casaClicada) => {
    matrizJogo[indice] = casaClicada

    possibilidadesVitoria = [
        [matrizJogo[0], matrizJogo[1], matrizJogo[2]],
        [matrizJogo[3], matrizJogo[4], matrizJogo[5]],
        [matrizJogo[6], matrizJogo[7], matrizJogo[8]],
        [matrizJogo[0], matrizJogo[3], matrizJogo[6]],
        [matrizJogo[1], matrizJogo[4], matrizJogo[7]],
        [matrizJogo[2], matrizJogo[5], matrizJogo[8]],
        [matrizJogo[0], matrizJogo[4], matrizJogo[8]],
        [matrizJogo[2], matrizJogo[4], matrizJogo[6]]
    ]
}


let casaClicada
const campoEstaVazio = (casaClicada) => casaClicada.children.length == 0

     var ePirata = true

function joga(casa){
  
    const casaClicada = document.getElementById(casa)
     let jogador

    if (campoEstaVazio(casaClicada)) {
     
        if (ePirata) {
            jogador = 'Pirata'
            ePirata = false

        } else if (!ePirata) {
            jogador = 'Marinha'
            ePirata = true
        }

        if (casaClicada != ``){ 
            casaClicada.innerHTML = `<img src="../img/${jogador}.png" alt="">`
        }
   
    }

    aplicarJogada(casaClicada, jogador, indice)


 
}