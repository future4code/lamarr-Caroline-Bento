//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
//1. a) Matheus Nachtergale
    //  Virginia Cavendish
    //  Globo 14h

//2.a) 
//  nome: Juca 
//  idade: 3
//  raça: SRD

//  nome: Juba 
//  idade: 3
//  raça: SRD

//  nome: Jubo
//  idade: 3
//  raça: SRD

//  b) copia o primeiro objeto, dando a possibilidade de criar um novo objeto a partir dele fazendo modificações sem alterar o objeto real (1°)

//3.a) false  
    //  underfined
//  b) A função dada no exercicício retorna o objeto e sua propriedade. O objeto foi criado com suas propriedade, porém, o console.log tentou imprimir 
// uma propriedade que não foi declarada no objeto, no caso "altura".

//------------------------------------------------------------------------------------------------------------------------------------------------------

//EXERCICIOS DE ESCRITA DE CÓDIGO
// 1.
// const pessoa = {
//     nome: "Caroline",
//     apelidos: ["Carol", " Lou", " Avelã"]
// }
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`)

// //b)
// const outrosApelidos = {
//     ...pessoa, apelidos: ["Ávila", " Caca", " Carol (em inglês)"]    //( o último lê-se em inglês kkkk)
// }
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${outrosApelidos.apelidos}.`)


//2.a)
// const pessoa = {
//     nome: "Fabricio",
//     idade: "26", 
//     profissao: "vendedor" 
// }
// const pessoaDois = {
//     ...pessoa, nome: "Serena", idade: "38", profissao: "motorista"
// }
// console.log(pessoa)
// console.log(pessoaDois)

//b)

// console.log(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.idade.length, pessoa.profissao, pessoa.profissao.length)
// console.log(pessoaDois.nome, pessoaDois.nome.length, pessoaDois.idade, pessoaDois.idade.length, pessoaDois.profissao, pessoaDois.profissao.length)

//3.
const carrinho = []

const frutaUm = {
    nome: "pêra",
    disponibilidade: true 
}
const frutaDois = {
    nome: "banana",
    disponibilidade: true
}

const frutaTres = {
    nome: "pitaia",
    disponibilidade: true
}
carrinho.push(frutaUm)
carrinho.push(frutaDois)
carrinho.push(frutaTres)
console.log(carrinho)


//DESAFIOS
//1.
// const nome = prompt("Qual é o seu nome?")
// const idade = Number(prompt("Qual é sua idade"))
// const prof = prompt("Qual é sua profissão?")

// const pessoa = {
//     nome: nome,
//     idade: idade,
//     profissao: prof
// }
// console.log(pessoa)

//2.

//     const filmeUm = {
//         anoLancamento1: 2016,  
//         nome1: "Doutor Estranho"
//     }
//     const filmeDois = {
//         anoLancamento2: 2010,  
//         nome2: "A rede social"
//     }
//     const dataAnterior = filmes.filmeUm.anoLancamento1 < filmeDois.anoLancamento2
//     const mesmaData = filmes.filmeUm.anoLancamento1 === filmeDois.anoLancamento2    
    

// console.log("O primeiro filme foi lançado antes do segundo?", dataAnterior)
// console.log("O primeiro filme foi lançado no mesmo ano que o segundo?", mesmaData)
//NÃO FUNCIONA

//3.
