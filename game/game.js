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
  
const campoEstaVazio = (casaClicada) => casaClicada.children.length == 0

const winMessage = document.getElementById("winMessage")

const tipoDeJogo = document.getElementById("tipoDeJogo")
const quemComeca = document.getElementById("QuemComeca")

var temVencedor = false
var ePirata = true

let casaClicada
  

    function quemVaiComecar(){
        if(quemComeca.value == 'Pirata'){
            ePirata = true
            console.log(quemComeca.value)
        } else if(quemComeca.value == 'Marinha') {
            ePirata = false
            console.log(quemComeca.value)
        }
    }


    function joga(casa){

    const casaClicada = document.getElementById(casa)
    const vezDe = document.getElementById("vezDe")

    let jogador  
    let adversario

    if (campoEstaVazio(casaClicada) && !temVencedor) {

      
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
            casaClicada.innerHTML = `<img src="../img/${jogador}.png">`
            casasIguais(casa1.innerHTML, casa2.innerHTML, casa3.innerHTML) || casasIguais(casa4.innerHTML, casa5.innerHTML, casa6.innerHTML) || casasIguais(casa7.innerHTML, casa8.innerHTML, casa9.innerHTML) ||
            casasIguais(casa1.innerHTML, casa4.innerHTML, casa7.innerHTML) || casasIguais(casa2.innerHTML, casa5.innerHTML, casa8.innerHTML) || casasIguais(casa3.innerHTML, casa6.innerHTML, casa9.innerHTML) ||
            casasIguais(casa1.innerHTML, casa5.innerHTML, casa9.innerHTML) || casasIguais(casa3.innerHTML, casa5.innerHTML, casa7.innerHTML)
            
        }

        vezDe.innerHTML = `Vez de ${adversario}`

     
  
    } 

} 

function verificaTipoJogo(){
    if (tipoDeJogo.value = 'playerVSplayer'){
        
    }
}
function MenuOpcoes(){
    document.querySelector(".optionsBack").style.display = "flex"
}

function FecharOpcoes(){
    document.querySelector(".optionsBack").style.display = "none"
}

function reiniciarJogo() { 
    casa1.innerHTML = `` 
    casa2.innerHTML = ``
    casa3.innerHTML = ``
    casa4.innerHTML = ``
    casa5.innerHTML = ``
    casa6.innerHTML = ``
    casa7.innerHTML = ``
    casa8.innerHTML = ``
    casa9.innerHTML = ``
    document.querySelector(".win").style.display = "none"   
    temVencedor = false
    quemVaiComecar()
    vezDe.innerHTML = `Vez de ${quemComeca.value}`
}

function casasIguais(casaA, casaB, casaC){

    if( (casaA == casaB) && (casaB == casaC) ){
        
    if(casaA == `<img src="../img/Pirata.png">`){
        temVencedor = true
        document.querySelector(".win").style.display = "flex";
        winMessage.innerHTML = `<h1>Pirata venceu</h1>
                                <button onclick="reiniciarJogo()">Reiniciar Jogo</button>`
    }else if (casaA == `<img src="../img/Marinha.png">`){
     
        temVencedor = true
        document.querySelector(".win").style.display = "flex";
        winMessage.innerHTML = `<h1>Marinha venceu</h1>
                                <button onclick="reiniciarJogo()">Reiniciar Jogo</button>`
    } 

    }else if((casa1.innerHTML != ``)  && (casa2.innerHTML != ``) && (casa3.innerHTML != ``) && (casa4.innerHTML != ``) && (casa5.innerHTML != ``) && (casa6.innerHTML != ``) && (casa7.innerHTML != ``) && (casa8.innerHTML != ``) && (casa9.innerHTML != ``)    ){
        temVencedor = true    
        document.querySelector(".win").style.display = "flex";
        winMessage.innerHTML = `<h1>Empate</h1>
                                <button onclick="reiniciarJogo()">Reiniciar Jogo</button>`
    }   
}


