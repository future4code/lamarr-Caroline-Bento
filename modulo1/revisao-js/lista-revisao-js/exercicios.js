// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordemCrescente = array
    function compararOrdem (n1, n2) {
        return n1 - n2
    }
    return ordemCrescente.sort(compararOrdem)
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numeros = array
    function selecionarNumerosPares(numerosPares) {
        return numerosPares % 2 === 0
    }
    let numerosParesRetornados = numeros.filter(selecionarNumerosPares)
    return numerosParesRetornados
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeros = array
    function selecionarNumerosPares(numerosPares) {
        return numerosPares % 2 === 0
    }
    let numerosParesRetornados = numeros.filter(selecionarNumerosPares)
    let numerosElevados = numerosParesRetornados.map(function (num){
        return Math.pow(num, 2)
    })
    return numerosElevados

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeros = array
    let numeroMaior = numeros.reduce(function(a, b) {
        return Math.max(a,b)
    }, -Infinity) 
    return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numerosComparador = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    }
    return numerosComparador

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numeroPares = []
    for (let i = 0; numeroPares.length < n; i++) {
        if (i % 2 == 0) {
            numeroPares.push(i)
        }
    }
    return numeroPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoC == ladoA) {
        return "Equilátero"
    } if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let segundoMenor = array [1]
    let segundoMaior = array[array.length - 2]
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
       nome: "ANÔNIMO",
   }
   const novoObjetoAnonima = {
       ...pessoa,
       ...pessoaAnonima
   }
   return novoObjetoAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    
    let totalPessoasAutorizadas = []
    
    for (let pessoasAut of pessoas) {
        if (
            pessoasAut.altura >= 1.5 && pessoasAut.idade > 14 && pessoasAut.idade < 60
        ){ totalPessoasAutorizadas.push(pessoasAut)
    }}
    return totalPessoasAutorizadas

}
        
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
    let pessoasNaoAut = pessoas.filter((pessoa) =>{
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })
    return pessoasNaoAut
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((contaUsuario) => {
        let totalCompras = 0

        contaUsuario.compras.forEach(( compra) => {
            totalCompras = totalCompras + compra 
        })
        contaUsuario.compras = []
        contaUsuario.saldoTotal = contaUsuario.saldoTotal - totalCompras
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(function (a, b) {
        if (a.nome > b.nome){
            return 1
        }else if (a.nome < b.nome){
            return -1
        }
    })
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let datasConsulta =  consultas.sort(function(a, b) {
       a = fDate(a)
       b = fDate(b)
   })
   return datasConsulta
}