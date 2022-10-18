console.log("Exercicio 4");
//a)
type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//b)
//no arquivo packge.json, na parte de "scripts" coloco "exercicio4": "tsc && node ./build/exercicio4/index.js" 
// para dar start no meu codigo. Já que meu arquivo já transpilado está na pasta build.

//c)

//Seria: "tsc && node ./src/exercicio4/index.js"

//d) Sim, para transpilar varios arquivos de uma só vez, basta usar "&&".
// Exemplo: "start": "echo Rodando... && tsc && node ./build/exercicio1/index.js && node ./build/exercicio2/index.js"