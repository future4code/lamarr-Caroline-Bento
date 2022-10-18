console.log("Exercicio 6");

function operacoes(n1: number, n2: number) {
  const soma = n1 + n2;
  const sub = n1 - n2;
  const mult = n1 * n2;
  const maiorNumero = () => {
    if (n1 > n2) {
      return n1;
    } else {
      return n2;
    }
  }
  
  return [soma, sub, mult, maiorNumero()];
}

console.log(operacoes(20, 10));
