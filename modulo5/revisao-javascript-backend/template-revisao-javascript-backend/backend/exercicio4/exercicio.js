console.log("exercicio 4");

const firstList = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
];

const secondList = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];


const concatList = firstList.concat(secondList);
const newList = [];

for (let name of concatList) {
    if(!newList.includes(name.nome)) {
        newList.push(name.nome);
    }
}


console.log(newList);