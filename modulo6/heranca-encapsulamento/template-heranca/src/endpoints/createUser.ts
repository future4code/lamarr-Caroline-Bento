import { User } from "./../models/User";
import { Request, Response } from "express";
import { UserDataBase } from "../class/UserDatabase";

export const createUser = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const email = req.body.email;
    const password = req.body.password;
    const id = Date.now().toString();
    if (!email || !password) {
      throw new Error("Body inválido.");
    }

    const newUser = new User(id, email, password);
    const userConnection = new UserDataBase();
    userConnection.createUser(newUser);
    res.status(201).send({ message: "Usuário criado", user: newUser });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
