import express from 'express';
import { countryFilter, price100, deleteProduct, getProducts, modifyProducts, priceFilter, createProduct } from '../controler/controler';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Punto 1: /productos ; Punto 2: /precio ; Punto 4: /eliminar/eliminarModelo; Punto 5: /pais/paisFiltrado ; Punto 6: /precio/precioFiltrado');
});

//1//

mainRouter.get('/productos', getProducts);

//2//

mainRouter.get('/precio', price100);

//3//

mainRouter.put('/modificarProductos/:Modelo', modifyProducts);

//4//

mainRouter.delete('/eliminar/:eliminarModelo', deleteProduct)

//5//

mainRouter.get('/pais/:paisFiltrado', countryFilter)

//6//

mainRouter.get('/precio/:precioFiltrado', priceFilter)

//7//

mainRouter.post('/crearProductos', createProduct)

export { mainRouter };