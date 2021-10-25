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

const winMessage = document.getElementById("winMessage")



var temVencedor = false


function casasIguais(casaA, casaB, casaC){

        
    
        if((casaA == `<img src="../img/Pirata.png">`) && (casaA == casaB) && (casaB == casaC) ){
            
            temVencedor = true
            document.querySelector(".win").style.display = "flex";
            winMessage.innerHTML = `<h1>Pirata venceu</h1>
                                    <button onclick="reiniciar()">Reiniciar Jogo</button>`
        }else if ((casaA == `<img src="../img/Marinha.png">`) && (casaA == casaB) && (casaB == casaC) ){
         
            temVencedor = true
            document.querySelector(".win").style.display = "flex";
            winMessage.innerHTML = `<h1>Marinha venceu</h1>
                                    <button onclick="reiniciar()">Reiniciar Jogo</button>`
        } else if ((casaA != casaB) && (casaB != casaC)){
            temVencedor = true
            document.querySelector(".win").style.display = "flex";
            winMessage.innerHTML = `<h1>Marinha venceu</h1>
                                    <button onclick="reiniciar()">Reiniciar Jogo</button>`
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
