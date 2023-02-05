import { connection } from "./../data/connection";
import { Request, Response } from "express";

export const getUsersPerOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let order = req.query.order as string;
    let sort = req.query.sort as string;
    if (!sort) {
      sort = "email";
    }

    if (sort === "name") {
      sort = "name";
    }

    if (sort === "type") {
      sort = "type";
    }

    if (sort !== "email" && sort !== "name" && sort !== "type") {
      sort = "email";
    }
   
    if (
      (order && order.toUpperCase() !== "ASC") ||
      (order && order.toUpperCase() !== "DESC")
    ) {
      order = "ASC";
    }
    const result = await connection("aula48_exercicio").orderBy(sort, order);

    if (!result.length) {
      statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
