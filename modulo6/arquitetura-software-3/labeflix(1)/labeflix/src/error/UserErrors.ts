import { CustomError } from "./CustomError";


export class RequiredFields extends CustomError {
    constructor(){
        super(400, "Preencha todos os campos.")
    }
}

export class InvalidName extends CustomError {
    constructor(){
        super(400, "Digite pelo menos o primeiro nome completo.");
    }
}
export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido, digite novamente.");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha Inválida, ela precisa ter no mínimo 6 caracteres");
  }
}
