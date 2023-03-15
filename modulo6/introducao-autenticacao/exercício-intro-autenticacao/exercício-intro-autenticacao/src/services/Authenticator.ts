import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";
import { AuthenticationData } from "../model/user";

//Exercicio 2
  //a)Está transformando o token em string para que seja lida corretamente, pois a class espera receber uma string.
export class Authenticator {
  public generateToken = ({ id }: AuthenticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    return token;
  };
  getTokenData = (token: string): AuthenticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;
      return payload;
    } catch (error: any) {
      console.log(error.message);
      throw new Unauthorized();
    }
  };
}
