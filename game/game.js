"use strict"

const casa1 = document.getElementById("casa1")
const casa2 = document.getElementById("casa2")
const casa3 = document.getElementById("casa3")
const casa4 = document.getElementById("casa4")
const casa5 = document.getElementById("casa5")
const casa6 = document.getElementById("casa6")
const casa7 = document.getElementById("casa7")
const casa8 = document.getElementById("casa8")
const casa9 = document.getElementById("casa9")

    let casaClicada
    const campoEstaVazio = (casaClicada) => casaClicada.children.length == 0

    const quemComeca = document.getElementById("QuemComeca").value
    var ePirata = true

    function joga(casa, indice){
  
    const casaClicada = document.getElementById(casa)
    const vezDe = document.getElementById("vezDe")


    let jogador  

    let adversario

   

    if (campoEstaVazio(casaClicada)) {

      
        if (ePirata) {
            jogador = 'Pirata'
            adversario = 'Marinha'
            ePirata = false
        
        } else if (!ePirata) {
            jogador = 'Marinha'
            adversario = 'Pirata'
            ePirata = true
        
        }

        if (casaClicada != ``){ 
            casaClicada.innerHTML = `<img src="../img/${jogador}.png" alt="">`
        }

        vezDe.innerHTML = `Vez de ${adversario}`


    }


}

const tipoDeJogo = document.getElementById("tipoDeJogo").value

if (tipoDeJogo = 'playerVSplayer'){
    quemComeca.style.
}

function MenuOpcoes(){
    document.querySelector(".optionsBack").style.display = "flex"
}

function FecharOpcoes(){
    document.querySelector(".optionsBack").style.display = "none"
}

function reiniciar() { 
    window.location.reload();
}

document.getElementById("options").addEventListener("click", MenuOpcoes)
document.getElementById("close").addEventListener("click", FecharOpcoes)
document.getElementById('reiniciar').addEventListener("click" , reiniciar)
