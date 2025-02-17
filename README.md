# Desafios JavaScript Básico

## Desafio 1 - Bhaskara
  Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara, usando as variáveis a, b e c, e mostre os valores x1 e x2. Usando os operadores de atribuição e aritméticos.

## Desafio 1 - Adicional, Calculadora
  A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
 
  O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 
  O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado. 
 
  Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)
  
## Desafio 2 - Melhorar Programa Bhaskara
  Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se: <br>
  a) A variável “a” é válida (não pode ser zero); <br>
  b) Se não existem raízes reais, e informar; <br>
  c) Se existe apenas uma raiz real, e informar essa raiz; <br>
  d) Se existem duas raízes reais, e as informar <br>

## Desafio 2 - Adicional, Melhoria da Calculadora
  Vamos dar uma evoluída nele! 
 
  Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). Agora, o comprador pode colocar um cupom "PROMO15", que garante 15% de desconto no valor do produto. A pessoa pode colocar o código OU ganhar o desconto. 
 
  Vamos também inserir questão de frete para o envio da compra. O comprador precisa colocar o estado em que ele está. Se for de SP, o frete custa R$10,00. Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00

## Desafio 3 - Jogo de Adivinhação

  Crie um programa que simula um jogo de adivinhação. O programa deve gerar um número
aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. O programa
deve informar se o palpite é maior ou menor que o número secreto até que o usuário
acerte.

Regras:
  1. O número secreto deve ser gerado aleatoriamente entre 1 e 100. <br>
  2. O usuário pode fazer quantas tentativas quiser até acertar. <br>
  3. Após cada tentativa, o programa deve exibir se o número é maior ou menor que o palpite. <br>
  4. Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o número de tentativas usadas.

Dica:

  Para gerar um número aleatório em Javascript, você pode usar o código:
  
      Math.round(Math.random() * 100);
      
  Math.random() é uma função que gera um número aleatório entre 0 e 1, e multiplicando por um número, você pode obter valores entre 0 e o número escolhido;
  
  Math.round() arredonda um número para inteiro, 5.4 é arredondado para 5, e 5.5 é arredondado para 6.

## Desafio 3 - Adicional, Jogo de Dados

  O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
  1. Se o resultado do dado for ímpar, o jogador recebe 10 pontos.<br>
  2. Se o resultado do dado for par, o jogador perde 5 pontos.<br>
  3. Se a rodada for múltipla de 3, o jogador ganha 15 pontos.<br>
  4. Se a rodada for múltipla de 4, o jogador perde 20 pontos.<br>
  5. Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro   pontos até a pontuação estar positivo.

<ul>
  <li>O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.</li>
  <li>Vocês não podem usar arrays para a execução do desafio</li>
  <li>Utilizem os conceitos estudados até o momento para executas.</li>
  <li>O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.</li>
  <li>A pontuação final deverá ser exibida na última rodada.</li>
  <li>Poderá ser exibido em tela avisos de ganho e perda de pontos</li>
</ul>

## Desafio 4 - Lista de Compras

  Adicionar remover e visualizar a lista de compras, vetores e funcoes

Regras:<br>

<ol>
   <li>O programa deve ter um array chamado listaDeCompras que começa vazio.</li>
   <li>Deve oferecer as seguintes opções ao usuário:</li> 
  <br>
      <ul>
        <li>Adicionar um item à lista.</li>
        <li>Remover um item da lista.</li>
        <li>Exibir os itens da lista.</li>
        <li>Sair do programa.</li>
      </ul>
  <br>
   <li>O programa deve rodar até que o usuário escolha sair.</li>
   <li>As funções devem ser utilizadas para organizar as operações principais:</li>
  <br>
      <ul>
        <li>adicionarItem(item): Adiciona um item ao array.</li>
        <li>removerItem(item): Remove um item do array (se existir).</li>
        <li>exibirLista(): Mostra todos os itens da lista no console</li>
      </ul>
</ol>

## Desafio 4 - Adicional, Análise de Desempenho de Equipe

  Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
  A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
  Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
  1) Cada tarefa recebe uma pontuação de 0 a 10 <br>
  2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.<br>
 
  A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
  Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
  O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho

## Desafio 5

  Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas. Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um array. O usuário poderá adicionar, remover e listar os cadastros.
  
  Regras:
  
  1. O programa deve armazenar os usuários em um array de objetos, onde cada
  objeto representa uma pessoa com as propriedades:

  o nome
  o idade
  o email

  3. O usuário poderá escolher entre as seguintes opções:
     
  o Adicionar um novo usuário.
  o Remover um usuário pelo email.
  o Listar todos os usuários cadastrados.
  o Sair do programa.
  
  5. O programa deve rodar até que o usuário escolha sair.
     
  7. Não pode haver mais de um usuário com o mesmo e-mail.
