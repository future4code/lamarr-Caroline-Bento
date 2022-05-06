//EXECÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1.a) Será impresso cada item, neste caso, o nome e o apelido de cada pessoa no objeto, bem como o indicie deste array do objeto
// e o array oiriginal, no caso o objeto completo.

//2.a) Será impresso os nomes que estão nos arrays

//3.a) Será impresso os apelidos, EXCETO o "Chijo".


//EXERCICIOS DE ESCRITA DE CÓDIGO
//1.
/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a) 
const nomesPets = pets.map((pet) => {
    return pet.nome
})
console.log(nomesPets)

//b)
const dogSalsichas = pets.filter((petSalsicha) => {
    return petSalsicha.raca === "Salsicha"
})
console.log(dogSalsichas)




//c)
function petPoodles(dogPoodles) {
    return dogPoodles.raca === "Poodle"
}
function poodle10conto(pets) {
    return `Você ganhou um cupom de desconto de 10% para tosar o ${pets.nome}!`
}

let dogPoodlesMensagem = pets.filter(petPoodles).map(poodle10conto)
console.log(dogPoodlesMensagem) */

//2.
/* const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ] */

 //a)
/*  let superProdutos = produtos.map((item) => {
     return item.nome
 })
 console.log(superProdutos)
 */
 //b)

/* let nomePreco = produtos.map((produtoValor) => {
    return {
        nome: produtoValor.nome,
        preco: (produtoValor.preco - produtoValor.preco / 20)
    }
})
console.log(nomePreco)

 */

//c)
/* function produtosBebidas(bebida) {
    return bebida.categoria === "Limpeza"
}
let produtosSeparados = produtos.filter(produtosBebidas)
console.log(produtosSeparados) */

//d)
/* let produtosYpe = produtos.filter((detergente) => {
    return detergente.nome.includes("Ypê")
})

console.log(produtosYpe)

//e)

let mensagem = produtosYpe.map((item) => {
    return `Compre ${item.nome} por R$${item.preco.toFixed(2)}!`
})
console.log(mensagem) */

//DESAFIOS:

//1)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a)
/* let listaPokemons = pokemons.map((nomePokemons) => {
    return nomePokemons.nome
})
let ordemPokemons = listaPokemons.sort()
console.log(ordemPokemons)
 */

//b)
