import { knex } from 'knex';
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
        `${TABLE_USERS}.email`,
        `${TABLE_PRODUCTS}.name` as `product_name`
      )
      .from(`${TABLE_PURCHASES}`)
      .join(`${TABLE_USERS}`, function(){
        this.on(`${TABLE_PURCHASES}.product_id`,`=`, `${TABLE_PRODUCTS}.id`) 
      })
      .whereLike("id", `${id}`);
    return result;
  }
}
