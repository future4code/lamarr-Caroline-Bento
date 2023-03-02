import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }
  async get(): Promise<any> {
    try {
      const users = []
      const result = await UserDatabase.connection
      .select('*').from(UserDatabase.TABLE_NAME)
      for (let user of result) {
        users.push(user);
      }
      return users;
    } catch (error:any) {
      throw new Error(error.message || error.sqlMessage);
      
    }
  }
}
