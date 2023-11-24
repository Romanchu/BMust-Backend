import express from 'express';
import { addProductsToDB, getProducts } from '../controler/controler';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

mainRouter.get('/producto', getProducts);
mainRouter.post('/producto/:añadir', addProductsToDB);

export { mainRouter };