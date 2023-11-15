import { DataSource } from "typeorm"
import { Product } from "./product"
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'PuntoStoreDB',
    synchronize: true,
    logging: true,
    entities: [Product],
    subscribers: [],
    migrations: []
})

export type Producto = {
    id: Number
    name: String
    price: Number
    photo: String
}

export const db:Array <Producto> = [
    {
        id: 1,
        name: "Nike",
        price: 5000,
        photo: "",
    },
    {
        id: 2,
        name: "Auto",
        price: 5000,
        photo: "",
    },
    {
        id: 3,
        name: "Celu",
        price: 5000,
        photo: "",
    }
];