// Adicionar remover e visualizar a lista de compras, vetores e funcoes
// Regras:
// 1. O programa deve ter um array chamado listaDeCompras que começa vazio.
// 2. Deve oferecer as seguintes opções ao usuário:
//     o Adicionar um item à lista.
//     o Remover um item da lista.
//     o Exibir os itens da lista.
//     o Sair do programa.
// 3. O programa deve rodar até que o usuário escolha sair.
// 4. As funções devem ser utilizadas para organizar as operações principais:
//     o adicionarItem(item): Adiciona um item ao array.
//     o removerItem(item): Remove um item do array (se existir).
//     o exibirLista(): Mostra todos os itens da lista no console3

const prompt = require('prompt-sync')();

function delay(ms, callback) {
    setTimeout(callback, ms);
}
function adicionarItem(item){
    listaDeCompras.push(item.toLowerCase())
    console.log(`\nItem ${item} adicionado com sucesso!`)
}
function removerItem(item){
    for(let i = 0; i < listaDeCompras.length; i++){
        if(listaDeCompras[i] == item.toLowerCase()){
            listaDeCompras.splice(i, 1) // serve para remover um item de um array no indice 1, e quantos itens a partir dele irá deletar
            console.log(`\nItem ${item} removido com sucesso!`)
            return
        }
    }
    console.log("Item não encontrado 😢");
}
function adicionarVariosItens(ls){
    for(let i = 0; i < ls.length; i++){
        listaDeCompras.push(ls[i].toLowerCase())
    }
}
function removerVariosItens(ls){
    let removidos = []
    console.log(`\nItens removidos: `)
    for(let i = 0; i < listaDeCompras.length; i++){
        for(let j = 0; j < ls.length; j++){
            if(listaDeCompras[i] == ls[j].toLowerCase()){
                removidos.push(listaDeCompras[i])
                listaDeCompras.splice(i, 1) // serve para remover um item de um array no indice 1, e quantos itens a partir dele irá deletar
                console.log(`${j+1}. ${ls[j]}`)
            }
        }
    }
    //itens nao removidos
    for(let i = 0; i < ls.length; i++){
        for(let j = 0; j < listaDeCompras.length; j++){
            if(ls[i].toLowerCase() == removidos[j]){
                ls.splice(i, 1)
            }
        }
    }
    console.log(`\nItens não encontrados: 😢`)
    for(let i = 0; i < ls.length; i++){

        console.log(`\n- ${ls[i]}`)

    }
}
function exibirLista(){
    for(let i = 0; i < listaDeCompras.length; i++){
        console.log((i+1) + ". " + listaDeCompras[i])
    }
}

let listaDeCompras = []
let item = ""
let lsItens = []
let opcao = 0;
let nome = prompt("Para começarmos digite seu nome: ")

console.log(`Bem-vindo ${nome} ao seu gerenciador de compras!`)

function loopListaCompras() {
    
    console.log("\n--------------------------------------------")
    console.log("\n1. Adicionar um item")
    console.log("\n2. Adicionar vários itens")
    console.log("\n3. Remover item")
    console.log("\n4. Remover vários itens")
    console.log("\n5. Exibir os itens da lista")
    console.log("\n6. Sair do programa")
    console.log("\n--------------------------------------------")
    opcao = prompt("Digite a opção desejada: ")

    switch(opcao){
        case '1':// Adicionar um item

            item = prompt("Digite o item que deseja adicionar: ")
            adicionarItem(item)
            break

        case '2': //Adicionar vários itens
            console.log("Digite os itens que deseja adicionar, um por vez. \nPara finalizar pressione Enter")
            do{
                item = prompt("")
                if(item != ""){
                    lsItens.push(item)
                }
            }while(item != "")
            adicionarVariosItens(lsItens)
            lsItens = []
        break
        
        case '3': //Remover item 
        
            item = prompt("Digite o item que deseja remover: ")
            removerItem(item)
            break

        case '4': //Remover vários itens
            console.log("Digite os itens que deseja remover, um por vez. \nPara finalizar pressione Enter e espere")
            do{
                item = prompt("")
                if(item != ""){
                    lsItens.push(item)
                }
            }while(item != "")
            removerVariosItens(lsItens)
            lsItens = []

        break

        case '5': //Exibir os itens da lista
        
            if(listaDeCompras.length == 0){
                console.log("\nA lista de compras está vazia!")
                break
            }else{
                console.log("\nLista de compras:")
                exibirLista()
            }
            break
        
        case '6': //Sair do programa
            console.log(`\nTenha um ótimo dia ${nome}!\n`)
            return // para sair do loop que está ligado pela funcao

        default:
            console.log("\nOpção inválida! Tente novamente.")   
    }

    delay(2000, loopListaCompras) // queria que demorasse um tempinho antes de prosseguir com as opções, por esse motivo que existe essa funcao, tentei utilizar o setInterval, porém nao funcionou, também por conta disso que eu coloquei este loop em uma funcao em vez de utilizar um while ou do while
}

loopListaCompras()
