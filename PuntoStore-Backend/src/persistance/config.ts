import { DataSource } from "typeorm"
import { Product } from "./product"
import "reflect-metadata"
import { User } from "./user"
import { Cart } from "./cart"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "1234",
    database: "Db",
    entities: [User,Cart,Product]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })