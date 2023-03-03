import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail, InvalidName, InvalidPassword, RequiredFields } from "../error/UserErrors";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";


export class UserBusiness {
  async create(input: UserInputDTO): Promise<void> {
    const { email, name, password } = input;
    if (!email || !name || !password) {
      throw new RequiredFields()
    }
    if(name.length < 2) {
      throw new InvalidName()
      
    }
    if (!email.includes("@")){
      throw new InvalidEmail()
      
    }
    if(password.length < 6) {
      throw new InvalidPassword();
      
    }
    
    
    const id: string = generateId();
    const userDatabase = new UserDatabase();
    await userDatabase.create({
      id,
      name,
      email,
      password,
    });
  }
  async get(): Promise<any> {
    try {
      return new UserDatabase().get();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
