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
  const first = array[0];
  return first;

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const element = array[array.length - 1];
  return element;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const um = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = um
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const string = string1.toLowerCase();
  const stringDois = string2.toLowerCase();
  const compare = string === stringDois
  return compare
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Data de nascimento"))
  const anoEmissaoRG = Number(prompt("Digite o ano que seu RG foi emitido"))

  const idade = anoAtual - anoNascimento
  const anoRG = anoAtual - anoEmissaoRG
  
  const se1 = idade <= 20 && anoRG >= 5
  const se2 = idade > 20 && idade <= 50 && anoRG >= 10
  const se3 = idade > 50 && anoRG >= 15

  console.log(se1 || se2 || se3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicaoBissextoUm = ano%400
  const condicaoBissextoDois = ano%4
  const condicaoBissextoTres = ano%100

  return condicaoBissextoUm == 0 || condicaoBissextoDois == 0 && condicaoBissextoTres !== 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem masi de 18 anos?(responda 'sim ou 'não')")
  const eM = prompt("Você possui ensino médio?(responda 'sim ou 'não')")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?(responda 'sim ou 'não')")
  const valido = idade === "sim" && eM === "sim" && disponibilidade === "sim"
  
  console.log(valido)
}