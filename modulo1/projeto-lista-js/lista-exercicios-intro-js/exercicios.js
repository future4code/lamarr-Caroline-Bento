// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura do retângulo")
  const largura = prompt("Digite a largura do retângulo")
  const retangulo = altura * largura
  console.log(retangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual:")
  const anoNascimento = prompt("Digite seu ano de nascimento:")
  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura);
  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUm = prompt("Digite uma cor:")
  const corDois = prompt("Digite outra cor:")
  const corTres = prompt("Digite uma última cor:")
  console.log([corUm, corDois, corTres])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const str = string.toUpperCase()
  return str
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoEspetaculo = custo
  const valor = valorIngresso
  const espetaculo = custo / valorIngresso
  return espetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const textBoo = string1.length
  const textBoo2 = string2.length
  const text = textBoo == textBoo2 
  return text
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const list = array
  const firstElement = list[0]
  return firstElement
  }

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const elements = array
  const lastElement = array[elements.length - 1]
  return lastElement
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let a = array[0]
  let b = array[array.length - 1]
  
}
 
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const strUm = string1.toLowerCase();
  const strDois = string2.toLowerCase();
  return strUm == strDois
    
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 

 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}