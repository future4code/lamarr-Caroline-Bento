import { generateId } from '../services/idGenerator';
import { MovieDatabase } from './../data/MovieDatabase';
import { MovieInputDTO } from "../model/movieDTO";
import { RequiredDuration, RequiredFields } from '../error/MovieErrors';


export class MovieBusiness {
  async create(input:MovieInputDTO): Promise<void> {
    const { title, description, durationInMinutes, yearOfRelease } = input
    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new RequiredFields();
    }
    if(durationInMinutes < 10 ){
      throw new RequiredDuration();
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
