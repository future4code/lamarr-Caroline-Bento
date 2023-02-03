import { User } from "../models/User";
import { BaseDatabase } from "../database/BaseDatabase";

export class UserDataBase extends BaseDatabase {
  public static TABLE_USERS = "Labe_Users";

  public async getAllUsers() {
    const result = await BaseDatabase.connection(
      UserDataBase.TABLE_USERS
    ).select("*");

    return result;
  }
  public async createUser(newUser: User) {
    const result = await BaseDatabase.connection(
      UserDataBase.TABLE_USERS
    ).insert(newUser);
    return result;
  }
  public async getUserById(id: any) {
    const result = await BaseDatabase.connection(UserDataBase.TABLE_USERS)
      .select("*")
      .whereLike("id", `${id}`);
      return result
  }
}
