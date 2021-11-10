"use strict"

const casas = document.getElementsByClassName('casa');
const casa1 = document.getElementById("casa1")
const casa2 = document.getElementById("casa2")
const casa3 = document.getElementById("casa3")
const casa4 = document.getElementById("casa4")
const casa5 = document.getElementById("casa5")
const casa6 = document.getElementById("casa6")
const casa7 = document.getElementById("casa7")
const casa8 = document.getElementById("casa8")
const casa9 = document.getElementById("casa9")



const campoEstaVazio = (casaClicada) => casaClicada.children.length == 0

const winMessage = document.getElementById("winMessage")

const tipoDeJogo = document.getElementById("tipoDeJogo")

const quemComeca = document.getElementById("QuemComeca")

var temVencedor = false
var ePirata = true
let botVez
let primeiraJogada = true
let casaClicada
  

   let jogador  
   let adversario

function joga(casa){

    const casaClicada = document.getElementById(casa)
    const vezDe = document.getElementById("vezDe")


    if (campoEstaVazio(casaClicada) && !temVencedor) {
      
        verificaPirata()

        if (casaClicada != ``){ 
            casaClicada.innerHTML = `<img src="../img/${jogador}.png">`
            
        } 

        verificaVitoria()
        if (temVencedor == false){
        aplicarJogadaMaquina()  
       
        } else {
        verificaVitoria()
        }
        verificaVitoria()
        // vezDe.innerHTML = `Vez de ${adversario}`
        
    } 

    

} 




function MenuOpcoes(){
    document.querySelector(".optionsBack").style.display = "flex"
}

function FecharOpcoes(){
    document.querySelector(".optionsBack").style.display = "none"
}

function reiniciarJogo() { 
    document.querySelector(".win").style.display = "none"   
    temVencedor = false
    quemVaiComecar()
    vezDe.innerHTML = `Vez de ${quemComeca.value}`
    limparCasas()
    primeiraJogada = true
}

function limparCasas(){
    casa1.innerHTML = `` 
    casa2.innerHTML = ``
    casa3.innerHTML = ``
    casa4.innerHTML = ``
    casa5.innerHTML = ``
    casa6.innerHTML = ``
    casa7.innerHTML = ``
    casa8.innerHTML = ``
    casa9.innerHTML = ``
}






 