console.log("Exercicio 1");

//a)
//const minhaString:string = 3

//Quando falo para a variável que ela é do tipo string ela só irá aceitar esse tipo.


//b)
//const meuNumero:any = "Ela"
//Para que o TS aceite mais de um valor para a variável, podemos definir como any o tipo da variável ou,
//para anular a redundância, podemos definir apenas a variável sem determinar o tipo.

//c)

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZUL_ESCURO = "azul escuro",
    VIOLETA = "violeta"
}

const primeiraPessoa:Pessoa = {
    nome: "João",
    idade: 19,
    corFavorita: CoresArcoIris.VERMELHO
}

const segundaPessoa:Pessoa = {
    nome: "Fernanda",
    idade: 22,
    corFavorita: CoresArcoIris.AMARELO
}

const terceiraPessoa:Pessoa = {
    nome: "Eduardo",
    idade: 76,
    corFavorita: CoresArcoIris.AZUL_ESCURO
}

const pessoas = []

pessoas.push(primeiraPessoa)
pessoas.push(segundaPessoa)
pessoas.push(terceiraPessoa)

console.table(pessoas)