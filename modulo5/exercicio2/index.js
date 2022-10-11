console.log("Exercício 2:")

const entradaOperacao = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4])

function realizaOperacao(entradaOperacao,n1, n2) {
    switch (entradaOperacao) { 
        case "add":
            return n1 + n2;
            break;
        case "sub":
            return n1 - n2;
            break;
        case "mult":
            return n1 * n2;
            break;
        case "div": 
        return n1 / n2;
            break;
    } 
}

console.log(realizaOperacao(entradaOperacao,n1, n2));