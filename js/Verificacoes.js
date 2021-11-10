"use strict"

function verificaVitoria(){
    casasIguais(casa1.innerHTML, casa2.innerHTML, casa3.innerHTML) || casasIguais(casa4.innerHTML, casa5.innerHTML, casa6.innerHTML) || casasIguais(casa7.innerHTML, casa8.innerHTML, casa9.innerHTML) ||
    casasIguais(casa1.innerHTML, casa4.innerHTML, casa7.innerHTML) || casasIguais(casa2.innerHTML, casa5.innerHTML, casa8.innerHTML) || casasIguais(casa3.innerHTML, casa6.innerHTML, casa9.innerHTML) ||
    casasIguais(casa1.innerHTML, casa5.innerHTML, casa9.innerHTML) || casasIguais(casa3.innerHTML, casa5.innerHTML, casa7.innerHTML)
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

    }else if(!temVencedor && (casa1.innerHTML != ``)  && (casa2.innerHTML != ``) && (casa3.innerHTML != ``) && (casa4.innerHTML != ``) && (casa5.innerHTML != ``) && (casa6.innerHTML != ``) && (casa7.innerHTML != ``) && (casa8.innerHTML != ``) && (casa9.innerHTML != ``)    ){
        temVencedor = true    
        document.querySelector(".win").style.display = "flex";
        winMessage.innerHTML = `<h1>Empate</h1>
                                <button onclick="reiniciarJogo()">Reiniciar Jogo</button>`
    }   
}


function quemVaiComecar(){
    if(quemComeca.value == 'Pirata'){
        ePirata = true
    } else if(quemComeca.value == 'Marinha') {
        ePirata = false
    }
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