import { CustomError } from "./CustomError";

export class RequiredFields extends CustomError {
  constructor() {
    super(400, "Todos os campos são obrigatórios, preencha-os corretamente.");
  }
}

export class RequiredDuration extends CustomError {
  constructor() {
    super(400, "Duração mínima é de 10 minutos.");
  }
}