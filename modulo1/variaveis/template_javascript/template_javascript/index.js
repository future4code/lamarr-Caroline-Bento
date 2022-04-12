
// 1. primeiro será impresso o valor de b (10). Depois, o valor de a (10) e b (5)
// 2. 10, 10, 20, 
/* 3. esse programa irá perguntar ao usuário o que está entre aspas (strings), o qual deverá inserir as informações solicitadas.
nomes para as variáveis:
p = horasTrab
t = salarioAHora
Por fim, o último comando mostrará o valor, em reais, da hora trabalhada ao usuário*/



/*let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
o comando typeof permite ver o tipo do valor de uma variável. Como não foi atribuído o valor para nenhuma das variáveis criadas,
 o JS dará como indefinido (undefined) quando executado.*/ 



// EXERCÍCIOS DE ESCRITA DE CODIGO 
// 1.
 /*const nomeUser = prompt('Qual é o seu nome?')
 const idadeUser = prompt('Qual é a sua idade?')
console.log(typeof nomeUser)
console.log(typeof idadeUser)
/*como atribuí um valor às minhas variáveis, elas estão como strings. E, neste caso, isso se dá porque como a perguta está entre aspas,
a resposta será em string, já que foi esse o meu pedido.*/

// console.log ("Olá,", nomeUser,"!", "Você tem", idadeUser, "anos.")

// 2. 
/*let blusaPreferida = prompt("Você está usando sua blusa preferida?")
let calcado = prompt("Está descalço?")
let parametroIdade = prompt("Você tem entre 20 a 30 anos de idade?")
let blusa = blusaPreferida
let descalço = calcado
let idadeDentro = parametroIdade

console.log("Você está usando sua blusa preferida?", blusa)
console.log("Está descalço?", descalço)
console.log("Você tem entre 20 a 30 anos de idade?", idadeDentro)*/

//3
/*let a = 10
let b = 25

c = a
a = b
b = c
// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10*/


//DESAFIO
const numberOne = prompt("Digite um número:")
const numberTwo = prompt("Muito bem! Agora, digite outro:")
const numberOneE = Number(numberOne)
const numberTwoE = Number(numberTwo)
soma = numberOneE + numberTwoE
multiplier = numberOneE * numberTwoE
console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplier)