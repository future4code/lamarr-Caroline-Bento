import { v4 as generateId } from 'uuid'
import { MovieDatabase } from "../data/MovieDatabase";

export class MovieBusiness {
  async create({
    title,
    description,
    durationInMinutes,
    yearOfRelease,
  }: any): Promise<void> {
    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new Error("Dados inválidos, preencha todos os campos.");
    }

    const id = generateId();

    const movieDatabase = new MovieDatabase();
    await movieDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
      yearOfRelease,
    });
  }
  async get(): Promise<any> {
    try {
      return new MovieDatabase().get();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
