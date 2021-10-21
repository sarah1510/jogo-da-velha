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

var vencedor = ""

function casasIguais(casaA, casaB, casaC){

    if( (casaA == casaB) && (casaB == casaC) && (casaA != "none" && casaA != "")){
        if(casaA.innerHTML = '<img src="../img/Pirata.png" alt="">'){
            vencedor = "Pirata"
        }else if (casaA.innerHTML = '<img src="../img/Marinha.png" alt="">'){
            vencedor = "Marinha"
        }
        return true
    }
    else{
        return false;
    }
 
   
}

function verificarFimDeJogo(){
    if( casasIguais(casa1, casa2, casa3) || casasIguais(casa4, casa5, casa6) || casasIguais(casa7, casa8, casa9) ||
        casasIguais(casa1, casa4, casa7) || casasIguais(casa2, casa5, casa8) || casasIguais(casa3, casa6, casa9) ||
        casasIguais(casa1, casa5, casa9) || casasIguais(casa3, casa5, casa7)
        ){
    alert("some")
    }
}



  

    let casaClicada
    const campoEstaVazio = (casaClicada) => casaClicada.children.length == 0

    const quemComeca = document.getElementById("QuemComeca").value
    var ePirata = true

    function joga(casa){
  
    const casaClicada = document.getElementById(casa)
    const vezDe = document.getElementById("vezDe")


    let jogador  

    let adversario

   

    if (campoEstaVazio(casaClicada)) {

      
        if (ePirata) {
            jogador = 'Pirata'
            adversario = 'Marinha'
            ePirata = false
            verificarFimDeJogo()
        } else if (!ePirata) {
            jogador = 'Marinha'
            adversario = 'Pirata'
            ePirata = true
            verificarFimDeJogo()
        }

        if (casaClicada != ``){ 
            casaClicada.innerHTML = `<img src="../img/${jogador}.png" alt="">`
            verificarFimDeJogo()
        }

        vezDe.innerHTML = `Vez de ${adversario}`
        verificarFimDeJogo()
    }

    verificarFimDeJogo()
}

// const tipoDeJogo = document.getElementById("tipoDeJogo").value

// if (tipoDeJogo = 'playerVSplayer'){
//     quemComeca.style.disa
// }

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
