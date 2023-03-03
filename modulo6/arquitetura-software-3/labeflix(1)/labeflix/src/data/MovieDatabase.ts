import { Movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, durationInMinutes, yearOfRelease}: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes: durationInMinutes,
        year_of_release: yearOfRelease,
      })
      .into(MovieDatabase.TABLE_NAME);
  }
  async get(): Promise<Movie[]> {
    try {
      MovieDatabase.connection.initialize()
      const movies = await MovieDatabase.connection
      .select('*').from(MovieDatabase.TABLE_NAME)
      return movies;
      
    } catch (error:any) {
      throw new Error(error.message || error.sqlMessage);
      
    }
  }
}
