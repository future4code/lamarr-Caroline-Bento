//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1.
//a) 10 
//   50
//b) a função iria fazer o que se pede, porém não iria imprimir nada.

//2.
//a) essa função irá colocar todas as letras em minúsculo à resposta do usuário, vai dizer se é true ou false a existencia da palavra "cenoura" na frase e,
// em seguida, imprimirá no console (true/false).
//b) i true; ii true; iii true.

//EXERCICIOS DE ESCRITA

//1.a)
// function informationMe() {
//     const frase = "Eu sou Caroline, tenho 21 anos, moro em São João del-Rei e sou estudante."
//     console.log(frase)
// } 
// informationMe();

//b) 
// function info(nome, idade, cidade, prof){
//     nome = prompt("Qual o seu nome?")
//     idade = prompt("Quantos anos tem?")
//     cidade = prompt("Em que cidade mora?")
//     prof = prompt("Qual a sua profissão?")
//     const infoFrase = "Meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + prof 
//     console.log(infoFrase)
// }
// info()

//2.a)
// function somar(n1, n2) {
//     const soma = n1 + n2 
//     return soma   
// }

// const resultado = somar(10, 10)
// console.log(resultado)
//OU
// console.log(somar(2,10))

//b)
// function numbers(n1, n2){
//     const compare = n1 >= n2 
//     return compare
// }
// console.log(numbers(75, 54))

//c)
// function imPar(n){
//     const par = n % 2 === 0
//     return par
// }
// console.log(imPar(4))

//d)
// function mensagem(string){
//     const s = string.toUpperCase()
//     const ss = string.length
//     const conc = s.concat(ss)
//     return conc
// }
// console.log(mensagem("oi, edu "))

//3.


/* const somar = (n1, n2) => {
    const soma = n1 + n2 
    return (soma)
}
const subtrair = (n1, n2) => {
    const menos = n1 - n2 
    return (menos)
}
const multiplicar = (n1, n2) => {
    const multi = n1 * n2 
    return (multi)
}
const dividir = (n1, n2) => {
    const divisao = n1 / n2 
    return (divisao)
}
const pergN1 = Number(prompt("Digite um número: "))
const pergN2 = Number(prompt("Digite outro número: "))

const s = somar(pergN1, pergN2)
const sub = subtrair(pergN1, pergN2)
const mult = multiplicar(pergN1, pergN2)
const div = dividir(pergN1, pergN2)

console.log( `Números inseridos: ${pergN1} e ${pergN2}`)
console.log(`Soma: ${s}`)
console.log(`Diferença: ${sub}`)
console.log(`Multiplicação: ${mult}`)
console.log(`Divisão: ${div}`) */