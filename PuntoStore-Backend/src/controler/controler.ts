import { Response, Request } from 'express'
import { AppDataSource } from '../persistance/db';
import { Product } from '../persistance/product';

export const getProducts = async (_: Request, res: Response) => {
    const products = await AppDataSource.manager.find(Product);
    res.json(products);
}

export const addProduct = async (req: Request, res: Response) => {
    console.log(req.body);
    
    const { name, price, photo } = req.body;
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.photo = photo;
    newProduct.price = price;

    await AppDataSource.manager.save(newProduct);

    res.send('Añadido')
}
