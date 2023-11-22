import express from 'express';
import { getProducts } from '../controler/controler';
import { addProductsToDB } from '../persistance/scripts/addProductsToDB';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Hola');
});

mainRouter.get('/producto', getProducts);
mainRouter.post('/producto/:añadir', addProductsToDB);

export { mainRouter };