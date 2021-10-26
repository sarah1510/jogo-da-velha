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
        } else if(quemComeca.value == 'Marinha') {
            ePirata = false
        }
}

   let jogador  
   let adversario
function joga(casa){

    const casaClicada = document.getElementById(casa)
    const vezDe = document.getElementById("vezDe")


    if (campoEstaVazio(casaClicada) && !temVencedor) {
      
        verificaPirata()

        if (casaClicada != ``){ 
            casaClicada.innerHTML = `<img src="../img/${jogador}.png">`
            casasIguais(casa1.innerHTML, casa2.innerHTML, casa3.innerHTML) || casasIguais(casa4.innerHTML, casa5.innerHTML, casa6.innerHTML) || casasIguais(casa7.innerHTML, casa8.innerHTML, casa9.innerHTML) ||
            casasIguais(casa1.innerHTML, casa4.innerHTML, casa7.innerHTML) || casasIguais(casa2.innerHTML, casa5.innerHTML, casa8.innerHTML) || casasIguais(casa3.innerHTML, casa6.innerHTML, casa9.innerHTML) ||
            casasIguais(casa1.innerHTML, casa5.innerHTML, casa9.innerHTML) || casasIguais(casa3.innerHTML, casa5.innerHTML, casa7.innerHTML)
            
        }

        vezDe.innerHTML = `Vez de ${adversario}`
        
  
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

let casaA
let casaB
let casaC

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

    }else if(!temVencedor && (casa1.innerHTML != ``)  && (casa2.innerHTML != ``) && (casa3.innerHTML != ``) && (casa4.innerHTML != ``) && (casa5.innerHTML != ``) && (casa6.innerHTML != ``) && (casa7.innerHTML != ``) && (casa8.innerHTML != ``) && (casa9.innerHTML != ``)    ){
        temVencedor = true    
        document.querySelector(".win").style.display = "flex";
        winMessage.innerHTML = `<h1>Empate</h1>
                                <button onclick="reiniciarJogo()">Reiniciar Jogo</button>`
    }   
}

function verificaTipoeJoga(){
    if (tipoDeJogo.value == 'easy') {
        jogarAleatoriamente()
    } else if (tipoDeJogo.value == 'medium'){
        if((casaA == casaB) || (casaA == casaC)){
            fecharAdversario()
        } else {
            jogarAleatoriamente()
        }
    } else if (tipoDeJogo.value == 'playerVSplayer'){

    }
}

  var jogadaAleatoria = Math.floor(Math.random()*9)

function jogarAleatoriamente(){
    
  jogadasAleatorias()

    console.log(jogadaAleatoria)
   

 if ((casa1.innerHTML != ``) && (jogadaAleatoria == 0)){
        jogadaAleatoria = Math.floor(Math.random()*9)
        jogadasAleatorias()
 } else if ((casa2.innerHTML != ``)  && (jogadaAleatoria == 1)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa3.innerHTML != ``)  && (jogadaAleatoria == 2)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa4.innerHTML != ``) && (jogadaAleatoria == 3)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa5.innerHTML != ``)  && (jogadaAleatoria == 4)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa6.innerHTML != ``)  && (jogadaAleatoria == 5)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa7.innerHTML != ``) && (jogadaAleatoria == 6)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa8.innerHTML != ``)  && (jogadaAleatoria == 7)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
} else if ((casa9.innerHTML != ``) && (jogadaAleatoria == 8)){
    jogadaAleatoria = Math.floor(Math.random()*9)
    jogadasAleatorias()
}

    if(jogador == 'Pirata'){
        ePirata = true
    } else if(jogador == 'Marinha') {
        ePirata = false
    }
    
    vezDe.innerHTML = `Vez de ${jogador}`
 
}

function jogadasAleatorias() {
    
    if(jogadaAleatoria == 0 && casa1.innerHTML == ``){
        casa1.innerHTML = `<img src="../img/${adversario}.png">`
      
    } else if(jogadaAleatoria == 1 && casa2.innerHTML == ``){
        casa2.innerHTML = `<img src="../img/${adversario}.png">`

        
    } else if(jogadaAleatoria == 2 && casa3.innerHTML == ``){
        casa3.innerHTML = `<img src="../img/${adversario}.png">`

        
    } else if(jogadaAleatoria == 3 && casa4.innerHTML == ``){
        casa4.innerHTML = `<img src="../img/${adversario}.png">`

        
    } else if(jogadaAleatoria == 4 && casa5.innerHTML == ``){
        casa5.innerHTML = `<img src="../img/${adversario}.png">`

        
    } else if(jogadaAleatoria == 5 && casa6.innerHTML == ``){
        casa6.innerHTML = `<img src="../img/${adversario}.png">`
        
    } else if(jogadaAleatoria == 6 && casa7.innerHTML == ``){
        casa7.innerHTML = `<img src="../img/${adversario}.png">`

    } else if(jogadaAleatoria == 7 && casa8.innerHTML == ``){
        casa8.innerHTML = `<img src="../img/${adversario}.png">`

        
    } else if(jogadaAleatoria == 8 && casa9.innerHTML == ``){
        casa9.innerHTML = `<img src="../img/${adversario}.png">`

    }
}

function fecharAdversario() {
    // if(casaA == casaB){
    //     casaC.innerHTML = `<img src="../img/${adversario}.png">`
    // } else if (casaA == casaC){
    //     casaB.innerHTML = `<img src="../img/${adversario}.png">`
    // }
    // if(jogador == 'Pirata'){
    //     ePirata = true
    // } else if(jogador == 'Marinha') {
    //     ePirata = false
    // }
}

function aplicarJogadaMaquina() {
    verificaTipoeJoga()
}

function verificaPirata() {
    if (ePirata) {
        jogador = 'Pirata'
        adversario = 'Marinha'
        ePirata = false
        aplicarJogadaMaquina()
        
    } else if (!ePirata) {
        jogador = 'Marinha'
        adversario = 'Pirata'
        ePirata = true
        aplicarJogadaMaquina()
    }
}

