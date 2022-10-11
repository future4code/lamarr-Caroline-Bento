console.log("Exercício 1:")
//a) Através do comando "process.argv"  indicando a posição que queremos retornar
//esperamos os argumentos passados e o node rodará na posição em que determinamos na variável.

const nome = process.argv[2];
const idade = Number(process.argv[3]);
const somaIdade = idade + 7;


console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${somaIdade} anos.`);