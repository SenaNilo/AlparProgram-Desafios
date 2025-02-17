// Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas.
// Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um
// array. O usuário poderá adicionar, remover e listar os cadastros.
// Regras:
// 1. O programa deve armazenar os usuários em um array de objetos, onde cada
// objeto representa uma pessoa com as propriedades:
// o nome
// o idade
// o email
// 2. O usuário poderá escolher entre as seguintes opções:
// o Adicionar um novo usuário.
// o Remover um usuário pelo email.
// o Listar todos os usuários cadastrados.
// o Sair do programa.
// 3. O programa deve rodar até que o usuário escolha sair.
// 4. Não pode haver mais de um usuário com o mesmo e-mail.

const prompt = require('prompt-sync')();

//#region Funções
function IsEmail(email){ //Regex para verificar se é um email
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
}
function existingEmail(email){ //Verificar no sistea se já existe o usuario com este email
    let exist = false
    lsUsuarios.forEach((e) => {
        if( e.email == email )
            exist = true
    })
    return exist
}
function adicionarUsuario(){
    do{
        nome  = prompt("Digite o nome do usuário: ")
        if(nome % 1 == 0)
            console.log("Nome inválido! Tente novamente\n")
    }while(nome % 1 == 0)
    do{
        idade = Number(prompt("Digite a idade do usuário: "))
        if(idade % 1 != 0)
            console.log("Idade inválida! Tente novamente\n")
    }while(idade % 1 != 0)
    do{
        email = prompt("Digite o email do usuário: ")
        if(!IsEmail(email) || existingEmail(email))
            console.log("Email inválido ou existente em nosso sitema! Tente novamente\n")
    }while(!IsEmail(email) || existingEmail(email))

    lsUsuarios.push(new Usuario(nome,idade,email))

}
function removerUsuario(){
    let remove = ""
    do{
        remove = prompt("Digite o email do usuário: ")
        if(!IsEmail(remove))
            console.log("Email inválido! Tente novamente\n")
    }while(!IsEmail(remove))
    
    if(existingEmail(remove)){

        //Usa-se find para primeiro achar o valor correspondente ao email dado pelo usuário, quando ele achar, ele retornará esse valor para poder buscar o seu index com a funcao indexOf(), para assim poder utilizar o splice, que remove um item de uma lista pelo seu index
        let index = lsUsuarios.indexOf(lsUsuarios.find((e) => e.email == remove))
        lsUsuarios.splice(index, 1)
        
        console.log("\nUsuário removido com sucesso!")

    }else
        console.log("\nUsuário não encontrado, Tente com outro email")
}

function listarUsuarios () {
    if(lsUsuarios.length != 0){
        console.log("\nLista de usuários cadastrados: ")
        let i = 1
        lsUsuarios.forEach((e) => {
            console.log(i + ". Nome: " + e.nome + " | Idade: " + e.idade + " | Email: " + e.email)
            i++
        }) 
    }else
        console.log("\nNenhum usuário cadastrado no sistema!")  
}
//#endregion

let [opcao, lsUsuarios, nome, idade, email] = [0, [], "", "", ""]
class Usuario {
    constructor(nome,idade,email){
        this.nome = nome
        this.idade = idade
        this.email = email
    }
}

console.log("\nGerenciador de Cadastro de Pessoas! \nSelecione a opção desejada para continuar\n")

while(opcao != 4){
    console.log("\n--------------------------------------------")
    console.log("\n1. Adicionar um novo usuário")
    console.log("\n2. Remover um usuário pelo email")
    console.log("\n3. Listar todos os usuários cadastrados")
    console.log("\n4. Sair do programa")
    console.log("\n--------------------------------------------\n")
    opcao = prompt("Digite a opção desejada: ")

    switch(opcao){
        case '1':// Adicionar
            adicionarUsuario()
        break

        case '2': //Remover
            removerUsuario()
        break
        
        case '3': //Listar 
            listarUsuarios()
        break

        case '4': //Sair do programa
            return
        default:
            console.log("\nOpção inválida! Tente novamente.")   
    }
}