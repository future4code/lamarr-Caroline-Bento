import { UserDatabase } from "../data/userDatabase";
import { user } from "../types/user";

export class UserBusiness {
  getAllUsers = async (): Promise<user[]> => {
    try {
      return await new UserDatabase().getAllUsers();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        throw new Error("Por favor, preencha todos os campos.");
      }
      if (!email.includes("@")) {
        throw new Error("Email insuficiente");
      }
      if (password.length < 6) {
        throw new Error("Senha muito curta.");
      }

      const id: string = Date.now().toString();
      const userDatabase = new UserDatabase();
      await userDatabase.createUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  deleteUser = async (input: {id:string}): Promise<void> => {
    if(!input.id) {
      throw new Error ("Insira um ID para excluir")
    }
    await new UserDatabase().deleteUser(input.id)
  }
}
