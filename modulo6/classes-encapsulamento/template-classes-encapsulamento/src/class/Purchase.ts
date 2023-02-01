export class Purchase {
  constructor(
    public id: string,
    public userId: string,
    public productId: string,
    public quantity: number,
    public totalPrice: number
  ) {
    this.id = id;
    this.userId = userId;
    this.productId = productId
    this.quantity = quantity
    this.totalPrice = totalPrice;
  }
}


export class PurchaseDB {
  constructor(
    public id: string,
    public user_id: string,
    public product_id: string,
    public quantity: number,
    public total_price: number
  ) {
    this.id = id;
    this.user_id = user_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.total_price = total_price;
  }
}