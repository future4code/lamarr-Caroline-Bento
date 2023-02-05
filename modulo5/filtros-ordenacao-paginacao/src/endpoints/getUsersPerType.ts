import { connection } from "./../data/connection";
import { Request, Response } from "express";

export const getUsersPerType = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let type = req.params.type as string

    const result = await connection("aula48_exercicio")
      
      .whereLike(":type", `${type}`);

    res.status(200).send(result);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
