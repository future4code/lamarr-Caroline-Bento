import { Request, Response } from "express"
import { UserDataBase } from "../class/UserDatabase"



export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userConnection = new UserDataBase
        const result = await userConnection.getAllUsers()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}