// Desafio de Bhaskara programa Alpar
// Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se:
// a) A variável “a” é válida (não pode ser zero);
// b) Se não existem raízes reais, e informar;
// c) Se existe apenas uma raiz real, e informar essa raiz;
// d) Se existem duas raízes reais, e as informar
function formulaBhaskara(a, b, c){
    if(a == 0)
        return "Não é uma equação do segundo grau"
    else{

        let delta = b**2 - 4*a*c

        if(delta < 0)
            return "Delta negativo, não possui raízes reais"
        else if(delta == 0)
            return "Delta igual a 0, possui uma raiz X=" + (-b / (2*a))
        else{
            let x1 = (-b + Math.sqrt(delta)) / (2*a)
            let x2 = (-b - Math.sqrt(delta)) / (2*a)
            return "Possui duas raízes X1=" + x1 + " X2=" + x2
        }
    }
}

console.log(formulaBhaskara(2, -4, 2))
