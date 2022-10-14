console.log("exercício 2");

const listClients = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

function clientVerification(id, name) {
  let index = listClients.findIndex(c => c.id == id)
  if(index < 0) {
    listClients.push({ id: id, nome: name});
  }else {
    return `Erro. Parâmetro inválido (id:${id} já existe)`
    
  }
}

clientVerification(2, "Agostinho")

console.log("Lista de clientes:", listClients)
