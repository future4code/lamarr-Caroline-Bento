import { Request, Response } from "express"
import { PurchasesDatabase } from "../class/PurchasesDatabase"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const purchasesConnection = new PurchasesDatabase
        const [result] = await purchasesConnection.getPurchasesById(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}