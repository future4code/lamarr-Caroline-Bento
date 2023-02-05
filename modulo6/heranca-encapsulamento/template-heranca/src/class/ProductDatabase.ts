
import { BaseDatabase } from "../database/BaseDatabase";
import { Product } from "../models/Product";

export class ProductDataBase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Labe_Products";

  public async getAllProducts() {
    const result = await BaseDatabase.connection(
      ProductDataBase.TABLE_PRODUCTS
    ).select("*");

    return result;
  }
  public async createProduct(newProduct: Product) {
    const result = await BaseDatabase.connection(
      ProductDataBase.TABLE_PRODUCTS
    ).insert(newProduct);
    return result;
  }
  public async getProductById(id: any) {
    const result = await BaseDatabase.connection(ProductDataBase.TABLE_PRODUCTS)
      .select("*")
      .whereLike("id", `${id}`);
      return result
  }
}
