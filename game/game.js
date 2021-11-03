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

const casas = [casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9]


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

            
        } 

        aplicarJogadaMaquina() 
            casasIguais(casa1.innerHTML, casa2.innerHTML, casa3.innerHTML) || casasIguais(casa4.innerHTML, casa5.innerHTML, casa6.innerHTML) || casasIguais(casa7.innerHTML, casa8.innerHTML, casa9.innerHTML) ||
            casasIguais(casa1.innerHTML, casa4.innerHTML, casa7.innerHTML) || casasIguais(casa2.innerHTML, casa5.innerHTML, casa8.innerHTML) || casasIguais(casa3.innerHTML, casa6.innerHTML, casa9.innerHTML) ||
            casasIguais(casa1.innerHTML, casa5.innerHTML, casa9.innerHTML) || casasIguais(casa3.innerHTML, casa5.innerHTML, casa7.innerHTML)
           
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
        jogarAleatoriamente()
      
    } else if (tipoDeJogo.value == 'medium'){
        verificaCasasParaFechar()
      
    } else if (tipoDeJogo.value == 'playerVSplayer'){

    }
}


    



function fecharAdversario(casaA, casaB, casaC) {
   
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
        adversario = "Pirata"
    } else if(jogador == 'Marinha') {
        ePirata = false
          adversario = "Pirata"
    }
    
    vezDe.innerHTML = `Vez de ${adversario}`
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

function jogarAleatoriamente(){

    do {
          var jogadaAleatoria = Math.floor(Math.random() * 9)   
          console.log(jogadaAleatoria)
    } while (!campoEstaVazio() && jogadaAleatoria == 0);
  
       
    
    
    
            if(campoEstaVazio(casa1) && jogadaAleatoria == 0){
                casa1.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa1) && jogadaAleatoria == 0){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            } 
    
        
    
            if(campoEstaVazio(casa2) && jogadaAleatoria == 1){
                casa2.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa2) && jogadaAleatoria == 1){
                jogadaAleatoria = Math.floor(Math.random() * 9)
    
            } 
    
        
    
             if(campoEstaVazio(casa3) && jogadaAleatoria == 2){
                casa3.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa3) && jogadaAleatoria == 2){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            } 
    
        
    
            if(campoEstaVazio(casa4) && jogadaAleatoria == 3){
                casa4.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa4) && jogadaAleatoria == 3){
                jogadaAleatoria = Math.floor(Math.random() * 9)  
            } 
       
    
            if(campoEstaVazio(casa5) && jogadaAleatoria == 4){
                casa5.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa5) && jogadaAleatoria == 4){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            } 
    
         
    
            if(campoEstaVazio(casa6) && jogadaAleatoria == 5){
                casa6.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa6) && jogadaAleatoria == 5){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            }
    
          
            
            if(campoEstaVazio(casa7) && jogadaAleatoria == 6){
                casa7.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa7) && jogadaAleatoria == 6){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            }  
    
            
            
            if(campoEstaVazio(casa8) && jogadaAleatoria == 7){
                casa8.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa8) && jogadaAleatoria == 7){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            }  
        
            
            
            if(campoEstaVazio(casa9) && jogadaAleatoria == 8){
                casa9.innerHTML = `<img src="../img/${adversario}.png">`
               
            } else if (!campoEstaVazio(casa9) && jogadaAleatoria == 8){
                jogadaAleatoria = Math.floor(Math.random() * 9)
                
            } 
    
         
    
            if(jogador == 'Pirata'){
                ePirata = true
                adversario = "Pirata"
            } else if(jogador == 'Marinha') {
                ePirata = false
                  adversario = "Pirata"
            }
            
            vezDe.innerHTML = `Vez de ${adversario}`
       
     
    
    }

  function verificaCasasParaFechar(){
    if( (casa1.innerHTML == casa2.innerHTML) || (casa2.innerHTML == casa3.innerHTML) || (casa1.innerHTML == casa3.innerHTML) ||
        (casa4.innerHTML == casa5.innerHTML) || (casa5.innerHTML == casa6.innerHTML) || (casa4.innerHTML == casa6.innerHTML) ||
        casa7.innerHTML == casa8.innerHTML || casa8.innerHTML == casa9.innerHTML || (casa7.innerHTML == casa9.innerHTML) ||
        casa1.innerHTML == casa4.innerHTML || casa4.innerHTML == casa7.innerHTML || casa1.innerHTML == casa7.innerHTML ||
        casa2.innerHTML == casa5.innerHTML || casa5.innerHTML == casa8.innerHTML || casa2.innerHTML == casa8.innerHTML ||
        casa3.innerHTML == casa6.innerHTML || casa6.innerHTML == casa9.innerHTML || casa3.innerHTML == casa9.innerHTML ||
        casa1.innerHTML == casa5.innerHTML || casa5.innerHTML == casa9.innerHTML || casa1.innerHTML == casa9.innerHTML ||
        casa3.innerHTML == casa5.innerHTML || casa5.innerHTML == casa7.innerHTML || casa3.innerHTML == casa7.innerHTML ){
            fecharAdversario(casa1, casa2, casa3) || fecharAdversario(casa4, casa5, casa6) || fecharAdversario(casa7, casa8, casa9) ||
            fecharAdversario(casa1, casa4, casa7) || fecharAdversario(casa2, casa5, casa8) ||fecharAdversario(casa3, casa6, casa9) ||
            fecharAdversario(casa1, casa5, casa9) || fecharAdversario(casa3, casa5, casa7)

        

        } else {
            jogarAleatoriamente()
        }

    
    }
  

