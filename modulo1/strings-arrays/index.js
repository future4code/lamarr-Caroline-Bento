// //EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// //1
// //a. underfined (não determinou o valor do tipo)

// //b. null 

// //c. 11 (contagem dos itens)

// //d. 3 (primeiro item da sequencia acima)

// //e. 19 fica no lugar do 4. 
// //A sequencia fica assim: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // essa demorei demais para sacar hahaha

// //f. 9 

//2
// //SUBI NUM ONIBUS EM MIRROCOS 27

//--------------------------------------------------------------------------------------------------

//EXERCÍCIO DE ESCRITA DE CÓDIGO
//1. 
// const nomeUser = prompt('Qual o seu nome?')
// const email = prompt('Ok, qual o seu email?')
// console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUser}!`) 

//2.
// const comidasFav = ['bife de boi', 'feijoada', 'chocolate', 'macarrão', 'churrasco']
// //a)
// console.log(comidasFav)
// //b)
// console.log('Essas são minhas comidas favoritas:', comidasFav)
// //c)
// const comidaUser = prompt('Qual é sua comida favorita?')
// comidasFav[1] = comidaUser;
//comidasFav.splice(1, 1, comidaUser);
// console.log(comidasFav)

//3.

// const listaDeTarefas = []

// const tarefa1 = prompt('Digite uma tarefa de hoje sua:')
// const tarefa2 = prompt('Digite outra tarefa de hoje sua:')
// const tarefa3 = prompt('Digite uma última tarefa de hoje sua:')

// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)

// console.log(listaDeTarefas)

// const escolha = prompt('Digite o indice da tarefa que já realizou (0, 1 ou 2)')
// listaDeTarefas.pop(escolha)

// console.log(listaDeTarefas)

//-------------------------------------------------------------------------------------------------

//DESAFIOS
//1.
// const frase = prompt('Digite uma frase:')
// const elementos = frase.split(' ')
// console.log(elementos);
//2.
const lista = ['banana', 'morango', 'abacaxi', 'laranja', 'ameixa']
const indentAbacaxi = lista.indexOf("abacaxi")

console.log("Posição Abacaxi:", indentAbacaxi)
console.log("Tamanho deo array:", lista.length)