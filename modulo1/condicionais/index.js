// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
//1.a) O código analisa o numero do usuario e ve se ele é par. Se for par o codigo imprime "Passou no teste.", se for impar ele imprime "Não passou no teste."
//b) Pares
//c)Impares

//2. a) O código irá usar a fruta escolhida pelo usuário para informar o preço da mesma e retornará imprimindo a frasedo console.log
//b) "O preço da fruta maçã é R$2.25"
//c) "O preço da fruta Pêra é R$5"

//3.a) Está pedindo um número ao usuário.
//b) "Esse número passou no teste". Se for negativo irá dar erro.
//c) Sim, porque dentro do if não tem retorno da frase usada no console.log de fora do escopo. Haja vista que a variável 'mensagem' está dentro do escopo local e não tem "acesso"
//ao escopo global.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//EXERCÍCIOS DE ESCRITA DE CODIGO
//1.
/* const idadeDirigir = Number(prompt("Qual é sua idade?"))

if (idadeDirigir >= 18) {
    console.log("Você pode dirigir!")
}else {
    console.log("Você não pode dirigir!")
}
 */


//2.
// const turnoEstudo = prompt("Em qual turno estuda? Escreva M (matutino), V (vespertino) ou N (noturno).")

/* if (turnoEstudo === "M") {
    console.log("Bom dia!")
}else if (turnoEstudo === "V") {
    console.log("Boa tarde!")
}else {
    console.log("Boa noite!")
}
  */


//3.
/* switch(turnoEstudo) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
} */

//4.
/* const filmeAssistir = prompt("Olá! Qual gênero de filme deseja assistir hoje?")
const preco = Number(prompt("Digite o preço do ingresso, por favor."))

if (filmeAssistir === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else{
    console.log("Escolha outro filme :(")
}
 */

//-------------------------------------------------------------------------------------------------------------

//DESAFIOS
//1.
/* const filmeAssistir = prompt("Olá! Qual gênero de filme deseja assistir hoje?")
const preco = Number(prompt("Digite o preço do ingresso, por favor."))

if (filmeAssistir === "fantasia" && preco < 15) {
    let lanchinho = prompt("Certo! E qual lanchinho irá comprar? :)")
    console.log("Bom filme! Aproveite o(a) seu/sua " + lanchinho + "!")
} else{
    console.log("Escolha outro filme :(")
} */

//2.
const nome = prompt("Digite seu nome completo")
const tipoJogo = prompt("Digite qual o tipo de jogo. (IN - internacional ou DO - doméstico)")
const etapaJogo = prompt("Digite qual a etapa do jogo. (SF - semi-final, DT - decisão de terceiro lugar ou FI - final)")
const categoria = Number(prompt("Digite a categoria. (1, 2, 3 ou 4)"))
const qntIngressos = Number(prompt("Digite a quantidade de ingressos."))
let valorIngresso = Number()
let valorTotal = Number(valorIngresso * qntIngressos)



if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 1) {
    valorIngresso = 1320
    valorTotal
}
else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 2) {
    valorIngresso = 880
    valorTotal
}
else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 3) {
    valorIngresso = 550
    valorTotal
}
else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 4) {
    valorIngresso = 220
    valorTotal 
}
else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 1) {
    valorIngresso = 660
    valorTotal 
}
else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 2) {
    valorIngresso = 440
    valorTotal 
}
else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 3) {
    valorIngresso = 330
    valorTotal 
}
else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 4) {
    valorIngresso = 170
    valorTotal
}
else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 1) {
    valorIngresso = 1980
    valorTotal 
}
else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 2) {
    valorIngresso = 1320
    valorTotal
}
else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 3) {
    valorIngresso = 880
    valorTotal
}  
else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 4) {
    valorIngresso = 330
    valorTotal 
        
} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 1) {
    valorIngresso = 1320 * 4.10
    valorTotal
    
}
else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 2) {
    valorIngresso = 880 * 4.10
    valorTotal
}
else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 3) {
    valorIngresso = 550 * 4.10
    valorTotal
}
else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 4) {
    valorIngresso = 220 * 4.10
    valorTotal 
}
else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 1) {
    valorIngresso = 660 * 4.10
    valorTotal 
}
else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 2) {
    valorIngresso = 440
    valorTotal 
}
else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 3) {
    valorIngresso = 330 * 4.10
    valorTotal 
}
else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 4) {
    valorIngresso = 170 * 4.10
    valorTotal
}
else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 1) {
    valorIngresso = 1980 * 4.10
    valorTotal 
}
else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 2) {
    valorIngresso = 1320 * 4.10
    valorTotal
}
else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 3) {
    valorIngresso = 880 * 4.10
    valorTotal
}  
else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 4) {
    valorIngresso = 330 * 4.10
    valorTotal 
} 


console.log("---Dados da compra---")
console.log("Nome do cliente:", nome)
console.log("Tipo de jogo:", tipoJogo)
console.log("Etapa do jogo:", etapaJogo)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", qntIngressos)
console.log("---Valores---")
console.log("Valor do ingresso:", valorIngresso)
console.log("Valor total:", valorTotal)


//Pati, não estou conseguido definir o valor total. Todo o resto está funcionando!!!!
//vitoria parcial! hahahaha