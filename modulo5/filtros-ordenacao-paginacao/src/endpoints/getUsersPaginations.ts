import { connection } from "./../data/connection";
import { Request, Response } from "express";

export const getUsersPagination = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let size = Number(req.query.size);
    let page = Number(req.query.page);

    if (isNaN(size) || size < 1) {
      size = 10;
    }

    if (isNaN(page) || page < 1) {
      page = 1;
    }

    let offset = size * (page - 1);

    const result = await connection("aula48_exercicio")
      .limit(size)
      .offset(offset);

    if (!result.length) {
      statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
