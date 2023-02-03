import {
  TABLE_PRODUCTS,
  TABLE_PURCHASES,
  TABLE_USERS,
} from "./../database/tableNames";

import { User } from "../models/User";
import { BaseDatabase } from "../database/BaseDatabase";

export class PurchasesDatabase extends BaseDatabase {
  public static TABLE_PURCHASES = "Labe_Purchases";

  public async getAllPurchases() {
    const result = await BaseDatabase.connection(
      PurchasesDatabase.TABLE_PURCHASES
    ).select("*");

    return result;
  }
  public async createPurchases(newUser: User) {
    const result = await BaseDatabase.connection(
      PurchasesDatabase.TABLE_PURCHASES
    ).insert(newUser);
    return result;
  }
  public async getPurchasesById(id: any) {
    const result = await BaseDatabase.connection(
      PurchasesDatabase.TABLE_PURCHASES
    )
      .select(
        `${TABLE_USERS}.email,  ${TABLE_PRODUCTS}.name AS product_name,
        ${TABLE_PRODUCTS}.price AS product_price,
        ${TABLE_PURCHASES}.quantity AS product_quantity,
        ${TABLE_PURCHASES}.total_price`
      )
      .joinRaw(`${TABLE_USERS}`)
      .whereLike(`${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id`)
      .whereLike("id", `${id}`);
    return result;
  }
}
