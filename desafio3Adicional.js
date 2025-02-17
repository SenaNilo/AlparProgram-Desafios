// O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
// 1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos
// 2 - Se o resultado do dado for par, o jogador perde 5 pontos.
// 3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontos
// 4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos
// 5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
// O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
// Vocês não podem usar arrays para a execução do desafio
// Utilizem os conceitos estudados até o momento para executar
// O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
// A pontuação final deverá ser exibida na última rodada.
// Poderá ser exibido em tela avisos de ganho e perda de pontos

const prompt = require('prompt-sync')()

let [dado, pontos, perdaPontos] = [0, 100, 0]

console.log("\n------------------------------------\nBem-vindo ao jogo de dados! Você começa com 100 pontos com o objetivo de chegar na 20ª rodada com 50 pontos ou mais. Boa sorte! \n------------------------------------")

for(let i = 1; i <= 20; i++){

    console.log("Rodada: " + i)
    
    prompt("\nPara jogar o dado, pressione Enter... ")

    dado = Math.round(Math.random() * 5 + 1)
    console.log("\nDado: " + dado + "\n")

    if(dado % 2 == 0 && dado != 6){
        if(dado == 4){ // único múltiplo de 4 possivel em um dado de 6 faces, por isso não foi necessário verificar se é múltiplo de 8, 12, 16, 20... economizando processamento
            console.log("Você perdeu 20 pontos!")
            perdaPontos = -20   
        }else{
            console.log("Você perdeu 5 pontos!")
            perdaPontos = -5
        }
    } else if(dado % 3 == 0){
        console.log("Você ganhou 15 pontos!")
        perdaPontos = 15
    } else{
        console.log("Você ganhou 10 pontos!")
        perdaPontos = 10
    }

    pontos += perdaPontos
    
    if(pontos < 0 && perdaPontos < 0){
        console.log("\nVocê perdeu o dobro de pontos por estar negativo!\n")
        pontos += perdaPontos
    }
    
    console.log("------------------------------------")

}

console.log("\nPontuação final: " + pontos)

if(pontos >= 50)
    console.log("\nParabéns! Você ganhou o jogo com " + pontos + " pontos!\n")
else
    console.log("\nQue pena😢 Você perdeu o jogo com " + pontos + " pontos!\n")
