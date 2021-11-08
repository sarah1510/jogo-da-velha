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
var botVez = false
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


function verificaVitoria(){
    casasIguais(casa1.innerHTML, casa2.innerHTML, casa3.innerHTML) || casasIguais(casa4.innerHTML, casa5.innerHTML, casa6.innerHTML) || casasIguais(casa7.innerHTML, casa8.innerHTML, casa9.innerHTML) ||
    casasIguais(casa1.innerHTML, casa4.innerHTML, casa7.innerHTML) || casasIguais(casa2.innerHTML, casa5.innerHTML, casa8.innerHTML) || casasIguais(casa3.innerHTML, casa6.innerHTML, casa9.innerHTML) ||
    casasIguais(casa1.innerHTML, casa5.innerHTML, casa9.innerHTML) || casasIguais(casa3.innerHTML, casa5.innerHTML, casa7.innerHTML)
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



        jogarAleatoriamente(verificarAdversario())
      
    } else if (tipoDeJogo.value == 'medium'){

        botVez = false




        if (botVez == false) {
        fecharVitoriaJogador(casa1.innerHTML, casa2.innerHTML, casa3.innerHTML) 
        fecharVitoriaJogador(casa4.innerHTML, casa5.innerHTML, casa6.innerHTML) 
        fecharVitoriaJogador(casa7.innerHTML, casa8.innerHTML, casa9.innerHTML) 
        fecharVitoriaJogador(casa1.innerHTML, casa4.innerHTML, casa7.innerHTML) 
        fecharVitoriaJogador(casa2.innerHTML, casa5.innerHTML, casa8.innerHTML) 
        fecharVitoriaJogador(casa3.innerHTML, casa6.innerHTML, casa9.innerHTML)  
        fecharVitoriaJogador(casa1.innerHTML, casa5.innerHTML, casa9.innerHTML) 
        fecharVitoriaJogador(casa3.innerHTML, casa5.innerHTML, casa7.innerHTML) 
        }
        
    // if (botVez == false) {
    //     jogarAleatoriamente(verificarAdversario())
    // }
      
    } else if (tipoDeJogo.value == 'playerVSplayer'){

    }
}





function fecharVitoriaJogador(casaA, casaB, casaC){
    if(casaA.innerHTML == `<img src="../img/${jogador}.png">` || casaB.innerHTML == `<img src="../img/${jogador}.png">` || casaC.innerHTML == `<img src="../img/${jogador}.png">`){

        if (casaA.innerHTML == casaB.innerHTML){
            casaC.innerHTML = `<img src="../img/${adversario}.png">`
        
        } else if (casaA.innerHTML == casaC.innerHTML) {
            casaB.innerHTML = `<img src="../img/${adversario}.png">`
        } else if (casaB.innerHTML == casaC.innerHTML){
            casaA.innerHTML = `<img src="../img/${adversario}.png">`
        }
    }

    if(jogador == 'Pirata'){
        ePirata = true
        adversario = "Marinha"
        jogador = "Pirata"
    } else if(jogador == 'Marinha') {
        ePirata = false
        adversario = "Pirata"
        jogador = "Marinha"
    }
}

function aplicarJogadaMaquina() {
    verificaTipoeJoga()
}

function verificaPirata() {
    if (ePirata) {
        jogador = 'Pirata'
        adversario = 'Marinha'
        ePirata = false
        
    } else if (!ePirata) {
        jogador = 'Marinha'
        adversario = 'Pirata'
        ePirata = true
    }
}

function jogarAleatoriamente(adversario){

          for (let i = 0; i < 10; i++) {
            const jogadaAleatoria = Math.floor((Math.random() * 9) + 1)
            console.log(jogadaAleatoria)
      
            if (casas["casa" + jogadaAleatoria].innerHTML == ``) {
                document.getElementById("casa" + jogadaAleatoria).innerHTML = `<img src="../img/${adversario}.png">`;
                botVez = true
                break;
            }
        }

        
    
    }

 function verificarAdversario(){
    if(jogador == 'Pirata'){
        ePirata = true
        adversario = "Marinha"
    } else if(jogador == 'Marinha') {
        ePirata = false
          adversario = "Pirata"
    }

    return adversario
 }

 function verificarJogador(){
    if(jogador == 'Pirata'){
        ePirata = true
        jogador = "Pirata"
    } else if(jogador == 'Marinha') {
        ePirata = false
          jogador = "Marinha"
    }

    return jogador
 }
  

  
 


//  if(casaA.innerHTML == `<img src="../img/${jogador}.png">` || casaB.innerHTML == `<img src="../img/${jogador}.png">` || casaC.innerHTML == `<img src="../img/${jogador}.png">`){

//     if (casaA.innerHTML == casaB.innerHTML){
//         casaC.innerHTML = `<img src="../img/${adversario}.png">`
//     } else if (casaA.innerHTML == casaC.innerHTML) {
//         casaB.innerHTML = `<img src="../img/${adversario}.png">`
//     } else if (casaB.innerHTML == casaC.innerHTML){
//         casaA.innerHTML = `<img src="../img/${adversario}.png">`
//     }
// }
// if(jogador == 'Pirata'){
//     ePirata = true
//     adversario = "Pirata"
// } else if(jogador == 'Marinha') {
//     ePirata = false
//       adversario = "Pirata"
// }


// if (
//     casaA == `<img src="../img/${jogador}.png"></img>` &&
//     casaB == `<img src="../img/${jogador}.png"></img>`
// ) {
//     if (casaC.innerHTML == ``) {
//         document.getElementById(casaC).innerHTML = `<img src="../img/${adversario}.png"></img>`;
//         botVez = true;
//     }
// } else if (
//     casaB == `<img src="../img/${jogador}.png"></img>` &&
//     casaC == `<img src="../img/${jogador}.png"></img>`
// ) {
//     if (casaA.innerHTML == ``) {
//         document.getElementById(casaA).innerHTML = `<img src="../img/${adversario}.png"></img>`;
//         botVez = true;
//     }
// } else if (
//     casaA == `<img src="../img/${jogador}.png"></img>` &&
//     casaC == `<img src="../img/${jogador}.png"></img>`
// ) {
//     if (casaB.innerHTML == ``) {
//         document.getElementById(casaB).innerHTML = `<img src="../img/${adversario}.png"></img>`;
//         botVez = true;
//     }
// }

// if(jogador == 'Pirata'){
//     ePirata = true
//     adversario = "Marinha"
//     jogador = "Pirata"
// } else if(jogador == 'Marinha') {
//     ePirata = false
//       adversario = "Pirata"
//       jogador = "Marinha"
// }