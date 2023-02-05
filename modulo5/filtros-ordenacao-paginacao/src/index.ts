import { getUsersPagination } from './endpoints/getUsersPaginations';
import { getUsersPerOrder } from './endpoints/getUsersPerOrder';
import { getUsersPerType } from './endpoints/getUsersPerType';
import { getAllUsers } from './endpoints/getAllUsers';
import { app } from "./app";

//Ex 01 a
app.get("/users", getAllUsers)

//Ex 01 b
app.get("users/:type", getUsersPerType)

//Ex 02
app.get("/users_ordenation", getUsersPerOrder);

//Ex 03
app.get("/users_pagination", getUsersPagination);
