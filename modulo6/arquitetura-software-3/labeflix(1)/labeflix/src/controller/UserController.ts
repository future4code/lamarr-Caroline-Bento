import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const input: UserInputDTO = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
  async get(req: Request, res: Response): Promise<void> {
    try {
      const users = await new UserBusiness().get();
      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
