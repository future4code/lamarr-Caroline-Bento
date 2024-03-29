import { Product } from "../class/Product";
import { PurchaseDB } from "../class/Purchase";
import { User } from "../class/User";

export const users: User[] = [
  {
    id: "101",
    email: "astrodev@gmail.com",
    password: "bananinha",
  },
  {
    id: "102",
    email: "fulano@gmail.com",
    password: "qwerty00",
  },
  {
    id: "103",
    email: "ciclana@gmail.com",
    password: "asdfg123",
  },
];

export const products: Product[] = [
  {
    id: "201",
    name: "Webcam",
    price: 99.0,
  },
  {
    id: "202",
    name: "Teclado Gamer",
    price: 250.0,
  },
  {
    id: "203",
    name: "Monitor",
    price: 459.99,
  },
  {
    id: "204",
    name: "Impressora",
    price: 275.25,
  },
  {
    id: "205",
    name: "Mouse Gamer",
    price: 399.99,
  },
];

export const purchases: PurchaseDB[] = [
  {
    id: "301",
    user_id: "101",
    product_id: "201",
    quantity: 1,
    total_price: 99.0,
  },
  {
    id: "302",
    user_id: "101",
    product_id: "203",
    quantity: 1,
    total_price: 459.99,
  },
  {
    id: "303",
    user_id: "101",
    product_id: "202",
    quantity: 2,
    total_price: 500.0,
  },
];
