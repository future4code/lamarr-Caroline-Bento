import { Request, Response } from "express";
import { ProductDataBase } from "../class/ProductDatabase";

export const getProducts = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const productConnection = new ProductDataBase();
    const result = await productConnection.getAllProducts();
    res.status(200).send({ products: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
