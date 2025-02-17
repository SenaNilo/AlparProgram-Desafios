// Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
// A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
// Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
// 1) Cada tarefa recebe uma pontuação de 0 a 10
// 2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
// A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
// Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
// O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho

/* Exemplo: de media ponderada

  P = x1.p1 + x2.p2 + x3.p3 + ... + xn.pn 
            /
      p1 + p2 + p3 + ... + pn
    
    impares = peso 2
    pares = peso 1

    os xn sao as pontuacoes

*/


const prompt = require('prompt-sync')();

function getRandomTask(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}
function getRandomScore(min, max) {
    let r = (Math.random() * (max - min + 1) + min).toFixed(2);
    if (r >= 10) //isso foi feito pois o random está gerando valores até 10.99
        return 10
    return r
}
let [loop, pessoas, mediaPonderada, pontuacaoTT, numTarefas, pontuacao, somaPesos, qtdPessoasTT] = [0, [], [], 0, 0, 0, 0, 0]

do{
    console.log("Bem vindo ao sistema de desempenho de equipe!")
    qtdPessoasTT = prompt("Quantos integrantes há em sua equipe? (Mínimo 3) ")

    if(qtdPessoasTT < 3)
        console.log("Mínimo 3 integrantes para o sistema!")

}while(qtdPessoasTT < 3)


console.log("")

while(loop < qtdPessoasTT){
    pessoas[loop] = prompt("Digite o nome do "+(loop+1)+"º integrante: ")
    numTarefas = getRandomTask(5, 10)
    console.log("O integrante " + pessoas[loop] + " realizou " + numTarefas + " tarefas")

    for(let i = 0; i < numTarefas; i++){
        
        pontuacao = (i % 2 == 0) ? getRandomScore(0, 10) * 2 : getRandomScore(0, 10)
        somaPesos += (i % 2 == 0) ? 2 : 1
        
        // (i % 2 == 0) ?  : getRandomScore(0, 10) 
        //Aqui está trocado de propósito pois o indice i sendo par, será uma tarefa ímpar e vice e versa. já que { i: n => n+1 }
        
        console.log("Tarefa " + (i+1) + " pontuação: " + pontuacao)   
        console.log("SomaPesos " + somaPesos)   

        pontuacaoTT += Number(pontuacao)
    }

    console.log("Ppontuacao tt " + pontuacaoTT)

    mediaPonderada[loop] = pontuacaoTT / somaPesos

    if(mediaPonderada[loop] > 8){
        mediaPonderada[loop] += 2
    }
    mediaPonderada[loop] = (mediaPonderada[loop]).toFixed(2)

    //Finalizadodes
    pontuacaoTT = 0
    somaPesos = 0
    loop++
    console.log("")
}



for(let j = 0; j < qtdPessoasTT; j++){
    console.log(pessoas[j] + " teve média ponderada de " + mediaPonderada[j])
}

function getMaior(){
    let maior = Number(Math.max(...mediaPonderada))
    for(let i = 0; i < mediaPonderada.length; i++){
        if(maior == mediaPonderada[i]){
            console.log("\nMaior média é do(a) " + pessoas[i] + " com a nota de " + mediaPonderada[i])
        }
    }

}
function getMenor(){
    let menor = Number(Math.min(...mediaPonderada))
    
    for(let i = 0; i < mediaPonderada.length; i++){
        if(menor == mediaPonderada[i]){
            console.log("\nMenor média do(a) " + pessoas[i] + " com a nota de " + mediaPonderada[i])
        }
    }

}

getMaior()
getMenor()

// //precisa dos 3 ponsos para funcionar esta funcao, separando cada elemento ao comando, console.log(Math.min(...mediaPonderada))
// console.log(Math.max([1,8]))

// Math.max(mediaPonderada) //retorna o maior valor do array
// Math.min(mediaPonderada) //retorna o menor valor do array
