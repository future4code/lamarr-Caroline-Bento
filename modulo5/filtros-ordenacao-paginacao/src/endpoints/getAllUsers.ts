import { connection } from "./../data/connection";
import { Request, Response } from "express";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let name = req.query.name as string;

    if (!name) {
      name = "%";
    }

    const result = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${name}%`
    );

    if (!result.length) {
      statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
