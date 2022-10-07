console.log("exercício 2");

const listClients = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

let client = { id: 2, nome: "Agostinho" };

if (client.id === listClients) {
  return "Erro. Parâmetro inválido (id já existe)";
} else {
  listClients.push(client);
  
}
console.log("Lista de clientes Atualizada:", listClients);
