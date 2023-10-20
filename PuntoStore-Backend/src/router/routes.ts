import express from 'express';

const productsRouter = express.Router();

productsRouter.get('/', (_, res)=>{
    res.send('Messi idolo');
})

export {productsRouter};