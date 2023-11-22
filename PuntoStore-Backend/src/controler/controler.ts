import { Response, Request } from 'express'
import { AppDataSource } from '../persistance/db';
import { Product } from '../persistance/product';

export const getProducts = async (_: Request, res: Response) => {
    const products = await AppDataSource.manager.find(Product);
    res.json(products);
}
