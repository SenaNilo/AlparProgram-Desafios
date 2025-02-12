//Desafio da Cintia programa Alpar
// A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
 
// O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 
// O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado. 
 
// Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)
function calculadoraImpostos(produto, direitoDesconto){

    let ICMS = (Math.random() * 0.13 + 0.12).toFixed(2)
    let porcentagemICMS = ICMS * 100
    let msg = "Produto: R$" + produto.toFixed(2) + "\n"

    if(direitoDesconto){

        produto *= 0.90
        msg += "Desconto aplicado! \nProduto com desconto: R$" + produto.toFixed(2)

        produto *= ++ICMS
        msg += "\nProduto com imposto de " + porcentagemICMS + "%: R$" + produto.toFixed(2)

    }else{
        msg += "Produto sem desconto 😢 \n"

        produto *= ++ICMS
        msg += "Produto com imposto de " + porcentagemICMS + "%: R$" + produto.toFixed(2)
    }

    return msg
}
// a conta é pra determinar o "range" de 12 a 25% com 2 casas decimais
// (Math.random() * 0.13 + 0.12).toFixed(2)
// Determinar se o produto tem desconto ou não
let aplicacaoDesconto = Math.random() >= 0.5; 
console.log(calculadoraImpostos(1356.99, aplicacaoDesconto))
