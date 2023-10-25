import express from 'express';
const mainRouter = express.Router();
const producto_y_mercancia = [
    {
        nombre: "Campera",
        modelo: "Nike",
        precio: 100,
        pais_de_origen: "Estados Unidos"
    },
    {
        nombre: "Pantalon",
        modelo: "Adidas",
        precio: 50,
        pais_de_origen: "Estados Unidos"
    },
    {
        nombre: "Reloj",
        modelo: "Rolex",
        precio: 150,
        pais_de_origen: "Inglaterra"
    }
];

mainRouter.get('/productos', (_, res) => {
    res.send(producto_y_mercancia);
});

mainRouter.get('/precio', (_,res) =>{
    const mayor100 = producto_y_mercancia.filter(producto => producto.precio > 99);
    res.send(mayor100)
})

mainRouter.get('/', (_, res) => {
    res.send('Messi idolo');
})

export { mainRouter };