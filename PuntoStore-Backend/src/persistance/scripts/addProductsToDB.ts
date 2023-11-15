import { AppDataSource, db, Producto } from "../db";
import { Product } from "../product";

export const addProductsToDB = async () => {
    db.map(async (p: Producto) => {
        const newProduct = new Product();
        newProduct.name = p.name;
        newProduct.photo = p.photo;
        newProduct.price = p.price;
        await AppDataSource.manager.save(newProduct);
    });
}