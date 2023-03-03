import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const input: MovieInputDTO = {
        title: req.body.title,
        description: req.body.description,
        durationInMinutes: req.body.durationInMinutes,
        yearOfRelease: req.body.yearOfRelease,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  }
  async get(req: Request, res: Response): Promise<void> {
    try {
      const users = await new MovieBusiness().get();
      res.status(200).send(users)
    } catch (error:any) {
      res.status(400).send(error.message)   
 }
  }
}
