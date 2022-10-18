console.log("Exercicio 2");



function obterEstatisticas(numeros:[number, number, number, number, number, number, number]) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


console.table(obterEstatisticas([3, 4, 5, 6, 7, 8, 9]))


//não entendi essa parte do exercicio proposto.
type amostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros:[]) => {

    }
}
