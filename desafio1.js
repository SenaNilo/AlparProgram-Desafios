// Desafio de Bhaskara programa Alpar
// Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara,
// usando as variáveis a, b e c, e mostre os valores x1 e x2. Usando os operadores de
// atribuição e aritméticos.
function formulaBhaskara(a, b, c){
    let delta = Math.sqrt(b**2 - 4*a*c)
    let x1 = (-b + delta) / (2*a)
    let x2 = (-b - delta) / (2*a)
    return [x1, x2]
}

console.log(formulaBhaskara(1, -5, 6))
