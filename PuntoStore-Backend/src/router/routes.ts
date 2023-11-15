import express from 'express';
import { getProducts, addProduct } from '../controler/controler';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

mainRouter.get('/producto', getProducts);
mainRouter.post('/producto/:añadir', addProduct);

export { mainRouter };