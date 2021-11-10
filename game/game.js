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

        botVez = true

    if(botVez == true){ 
            fecharAdversario(verificarJogador(),verificarAdversario(), casa1, casa2, casa3)   
    }
    if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa4, casa5, casa6) 
    }   
    if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa7, casa8, casa9) 
    }   
    if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa1, casa4, casa7) 
    }   
    if(botVez == true){
        fecharAdversario(verificarJogador(),verificarAdversario(), casa2, casa5, casa8) 
    }   
    if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa3, casa6, casa9) 
    }   
    if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa1, casa5, casa9) 

    }  
    if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa3, casa5, casa7)

    }  

        
    if (botVez == true) {
        jogarAleatoriamente(verificarAdversario())
    }
      
    } else if (tipoDeJogo.value == 'impossible'){

            verificarAdversario()
            verificarJogador()

        botVez = true

        if (primeiraJogada == true) {
         
            if (casa5.innerHTML == ``) {
                casa5.innerHTML = `<img src="../img/${adversario}.png">`
                primeiraJogada = false
                botVez = false
            } else {
                casa1.innerHTML = `<img src="../img/${adversario}.png">`
                primeiraJogada = false
                botVez = false
            }
        }

    if(botVez == true){ 
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa1, casa2, casa3)   
    }
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa4, casa5, casa6) 
    }   
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa7, casa8, casa9) 
    }   
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa1, casa4, casa7) 
    }   
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa2, casa5, casa8) 
    }   
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa3, casa6, casa9) 
    }   
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa1, casa5, casa9) 

    }  
    if(botVez == true){
        botFechaVitoria(verificarJogador(),verificarAdversario(), casa3, casa5, casa7)

    }  

        if(botVez == true){ 
                fecharAdversario(verificarJogador(),verificarAdversario(), casa1, casa2, casa3)   
        }
        if(botVez == true){
                fecharAdversario(verificarJogador(),verificarAdversario(), casa4, casa5, casa6) 
        }   
        if(botVez == true){
                fecharAdversario(verificarJogador(),verificarAdversario(), casa7, casa8, casa9) 
        }   
        if(botVez == true){
                fecharAdversario(verificarJogador(),verificarAdversario(), casa1, casa4, casa7) 
        }   
        if(botVez == true){
            fecharAdversario(verificarJogador(),verificarAdversario(), casa2, casa5, casa8) 
        }   
        if(botVez == true){
                fecharAdversario(verificarJogador(),verificarAdversario(), casa3, casa6, casa9) 
        }   
        if(botVez == true){
                fecharAdversario(verificarJogador(),verificarAdversario(), casa1, casa5, casa9) 
    
        }  
        if(botVez == true){
                fecharAdversario(verificarJogador(),verificarAdversario(), casa3, casa5, casa7)
    
        }  
    
       
        if (casa1.innerHTML == `<img src="../img/${jogador}.png">` && casa9.innerHTML == `<img src="../img/${jogador}.png">` && botVez == true) {
            casa8.innerHTML = `<img src="../img/${adversario}.png">`;
            botVez = false;
        }  

        if (casa1.innerHTML == `<img src="../img/${jogador}.png">` && casa6.innerHTML == `<img src="../img/${jogador}.png">`&& botVez == true) {
            casa2.innerHTML = `<img src="../img/${adversario}.png">`;
            botVez = false;
        } 

        if (casa3.innerHTML == `<img src="../img/${jogador}.png">` && casa4.innerHTML == `<img src="../img/${jogador}.png">`&& botVez == true) {
            casa2.innerHTML = `<img src="../img/${adversario}.png">`;
            botVez = false;
        } 

        if (casa3.innerHTML == `<img src="../img/${jogador}.png">` && casa7.innerHTML == `<img src="../img/${jogador}.png">`&& botVez == true) {
            casa8.innerHTML = `<img src="../img/${adversario}.png">`;
            botVez = false;
        }    

        if (botVez == true) {
            jogarAleatoriamente(verificarAdversario())
        }
    }
}







const fecharAdversario = (jogador, adversario, casaA, casaB, casaC) => {

    if(casaA.innerHTML == `<img src="../img/${jogador}.png">` || casaB.innerHTML == `<img src="../img/${jogador}.png">` || casaC.innerHTML == `<img src="../img/${jogador}.png">`){

        if (casaA.innerHTML == casaB.innerHTML && casaC.innerHTML == ``){
            casaC.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
        } else if (casaA.innerHTML == casaC.innerHTML && casaB.innerHTML == ``) {
            casaB.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
        } else if (casaB.innerHTML == casaC.innerHTML  && casaA.innerHTML == ``){
            casaA.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
        }

    }

}

const botFechaVitoria = (jogador, adversario, casaA, casaB, casaC) => {

    if(casaA.innerHTML == `<img src="../img/${adversario}.png">` || casaB.innerHTML == `<img src="../img/${adversario}.png">` || casaC.innerHTML == `<img src="../img/${adversario}.png">`){

        if (casaA.innerHTML == casaB.innerHTML && casaC.innerHTML == ``){
            casaC.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
        } else if (casaA.innerHTML == casaC.innerHTML && casaB.innerHTML == ``) {
            casaB.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
        } else if (casaB.innerHTML == casaC.innerHTML  && casaA.innerHTML == ``){
            casaA.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
        }

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

const jogarAleatoriamente = (adversario) => {

          for (let i = 0; i < 10; i++) {
            const jogadaAleatoria = Math.floor((Math.random() * 9) + 1)
      
            if (casas["casa" + jogadaAleatoria].innerHTML == ``) {
                document.getElementById("casa" + jogadaAleatoria).innerHTML = `<img src="../img/${adversario}.png">`;
                break
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