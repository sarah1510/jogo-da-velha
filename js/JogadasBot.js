"use strict"

let casaA
let casaB
let casaC

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

        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa2, casa4, casa1)
        }

        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa2, casa6, casa3)
        }

        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa6, casa8, casa9)
        }
        
        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa4, casa8, casa7)
        }
      
        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa1, casa9, casa8)
        }
      
        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa1, casa6, casa2)
        }
      
        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa3, casa4, casa2)
        }
      

        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa4, casa9, casa8)
        }
      
        
        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa6, casa7, casa8)
        }
      
        if(botVez == true){
            evitaVitoriaJogador(verificarJogador(), verificarAdversario(), casa3, casa7, casa8)
        }
      

        if (botVez == true) {
            jogarAleatoriamente(verificarAdversario())
        }
      
    }

}



const evitaVitoriaJogador = (jogador, adversario, casaA, casaB, casaC) => {
    if(casaA.innerHTML == `<img src="../img/${jogador}.png">` || casaB.innerHTML == `<img src="../img/${jogador}.png">`){

        if (casaA.innerHTML == casaB.innerHTML && casaC.innerHTML == ``){
            casaC.innerHTML = `<img src="../img/${adversario}.png">`
            botVez = false
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



const jogarAleatoriamente = (adversario) => {

          for (let i = 0; i < 10; i++) {
            const jogadaAleatoria = Math.floor((Math.random() * 9) + 1)
      
            if (casas["casa" + jogadaAleatoria].innerHTML == ``) {
                document.getElementById("casa" + jogadaAleatoria).innerHTML = `<img src="../img/${adversario}.png">`;
                break
            }
        }    
        
}
