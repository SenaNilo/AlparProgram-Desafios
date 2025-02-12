//Desafio da Cintia programa Alpar
// Vamos dar uma evoluída nele! 
 
// Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). Agora, o comprador pode colocar um cupom "PROMO15", que garante 15% de desconto no valor do produto. A pessoa pode colocar o código OU ganhar o desconto. 
 
// Vamos também inserir questão de frete para o envio da compra. O comprador precisa colocar o estado em que ele está. Se for de SP, o frete custa R$10,00. Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00

const prompt = require('prompt-sync')()

function calculadoraImpostos(produto, direitoDesconto, cupom, estado){

    let ICMS = (Math.random() * 0.13 + 0.12).toFixed(2)
    let porcentagemICMS = ICMS * 100
    let msg = "Produto: R$" + produto.toFixed(2) + "\n"

    //se direitoDescont for fake e nao haver cupom ngm ganha
    //se direitoDesconto false e haver cupom o cupom ganha
    //se direitoDesconto true e haver cupom o cupom ganha
    //se direitoDesconto true e nao haver cupom o desconto ganha
    if(cupom.toUpperCase() === "PROMO15"){

        produto *= 0.85 //desconto de 15%
        msg += "Cupom aplicado! \nProduto com cupom de 15%: R$" + produto.toFixed(2)

        produto *= ++ICMS
        msg += "\nProduto com imposto de " + porcentagemICMS + "%: R$" + produto.toFixed(2)
    
    }else if(direitoDesconto){
    
        produto *= 0.90
        msg += "Desconto aplicado! \nProduto com desconto: R$" + produto.toFixed(2)

        produto *= ++ICMS
        msg += "\nProduto com imposto de " + porcentagemICMS + "%: R$" + produto.toFixed(2)

    }else{
        msg += "Produto sem desconto e sem cupom 😢 \n"

        produto *= ++ICMS
        msg += "Produto com imposto de " + porcentagemICMS + "%: R$" + produto.toFixed(2)
    }

    switch (estado.toUpperCase()){
        case "SP":
            produto += 10
            msg += "\nEstado: São Paulo \nFrete de R$10.00. Valor total: R$" + produto.toFixed(2)
            break
        case "RJ":
            produto += 20
            msg += "\nEstado: RJ \nFrete de R$20.00. Valor total: R$" + produto.toFixed(2)
            break
        default:
            produto += 30
            msg += "\nEstado: "+ estado.toUpperCase() +" \nFrete de R$30.00. Valor total: R$" + produto.toFixed(2)  
    }

    return msg
}
// a conta é pra determinar o "range" de 12 a 25% com 2 casas decimais
// (Math.random() * 0.13 + 0.12).toFixed(2)
// Determinar se o produto tem desconto ou não
let aplicacaoDesconto = Math.random() >= 0.5
let cupom = prompt("Digite o cupom: ")
let estado = prompt("Digite o estado: ")
let produto = parseFloat(prompt("Digite o valor do produto: "))

console.log(calculadoraImpostos(produto, aplicacaoDesconto, cupom, estado))
