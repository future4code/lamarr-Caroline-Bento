import { PurchasesDatabase } from './../class/PurchasesDatabase';
import { Request, Response } from "express"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const purchasesConnection = new PurchasesDatabase
        const result = await purchasesConnection.getPurchasesById(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

export const getAllPurchases = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userConnection = new PurchasesDatabase();
    const result = await userConnection.getAllPurchases();
    res.status(200).send({ purchases: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};

