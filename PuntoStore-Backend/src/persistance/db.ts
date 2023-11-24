import { DataSource } from "typeorm"
import { Product } from "./product"
import { User } from "./user"
import "reflect-metadata"


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    username: 'root',
    password: '1234',
    database: 'PuntoStoreDB',
    synchronize: true,
    logging: true,
    entities: [Product, User],
    subscribers: [],
    migrations: []
})

export type Producto = {
    id: number
    name: string
    price: number
}

export type Usuario = {
    id: number
    name: string
    email: string
    password: string
}

export const db:Array <Producto> = [
    {
        id: 1,
        name: "Nike",
        price: 5000,
    },
    {
        id: 2,
        name: "Auto",
        price: 5000,
    },
    {
        id: 3,
        name: "Celu",
        price: 5000,
    }
];