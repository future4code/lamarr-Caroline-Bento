import { Request, Response } from "express";
import { ProductDataBase } from "../class/ProductDatabase";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name = req.body.name;
    const price = req.body.price;
    const id = Date.now().toString();

    if (!name || !price) {
      throw new Error("Body inválido.");
    }
    const newProduct = new Product(id, name, price)
    const productConnection = new ProductDataBase()
    productConnection.createProduct(newProduct)
    
    res.status(201).send({ message: "Produto criado", product: newProduct });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
