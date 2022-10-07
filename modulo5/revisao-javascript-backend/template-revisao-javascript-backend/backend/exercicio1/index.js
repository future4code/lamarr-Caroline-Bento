console.log("exercicio 1");

let n ;
let l;
function converteCelciusFarenheit({ n, l }) {

    l = "F"
    n = 3

  const result = n * (9 / 5) + 32;
  const phrase = `${n}° Celsius é equivalente a ${result}°${l} Farenheit.`;
  if (l !== "F" || n !== 30) {
    return `Erro. Parâmetro inválido (${l || n}).`;
  } else {
    return phrase;
  }
}
console.log(converteCelciusFarenheit({ n, l }));

function converteCelciusKelvin({ n, l }) {
  l = "K"
  n = 30
  const result = n + 273.15;
  const phrase = `${n}° Celsius é equivalente a ${result} ${l} Kelvin.`;
  if (l !== "K" || n !== 30) {
    return `Erro. Parâmetro inválido (${l || n}).`;
  } else {
    return phrase;
  }
}
console.log(converteCelciusKelvin({ n, l }));
