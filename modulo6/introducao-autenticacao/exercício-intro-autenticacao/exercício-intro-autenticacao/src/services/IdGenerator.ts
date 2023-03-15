import { v4 } from "uuid"

export class IdGenerator {
    public generateId = () => {
        return v4()
    }
}


//Exercicio 01
//Acredito que um Id que contenha letras e números torna-se mais seguro, vez que dá para criar mais quantidade de combinações do que só com letras ou só com números. 