import { Response, Request } from 'express'
import { AppDataSource, db, Producto } from '../persistance/db';
import { Product } from '../persistance/product';

export const getProducts = async (_: Request, res: Response) => {
    const products = await AppDataSource.manager.find(Product);
    res.json(products);
}

export const addProductsToDB = async () => {
    db.map(async (p: Producto) => {
        const newProduct = new Product(p.name, p.price);
        await AppDataSource.manager.save(newProduct);
    });
}