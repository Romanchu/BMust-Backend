import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Punto 1: /productos ; Punto 2: /precio ; Punto 4: /eliminar/eliminarModelo; Punto 5: /pais/paisFiltrado ; Punto 6: /precio/precioFiltrado');
});

const producto_y_mercancia = [
    {
        nombre: "Campera",
        modelo: "nike",
        precio: 100,
        pais_de_origen: "Estados Unidos"
    },
    {
        nombre: "Pantalon",
        modelo: "adidas",
        precio: 50,
        pais_de_origen: "Estados Unidos"
    },
    {
        nombre: "Reloj",
        modelo: "rolex",
        precio: 150,
        pais_de_origen: "Inglaterra"
    }
];

//1//

mainRouter.get('/productos', (_, res) => {
    res.send(producto_y_mercancia);
});

//2//

mainRouter.get('/precio', (_,res) =>{
    const mayor100 = producto_y_mercancia.filter(producto => producto.precio > 99);
    res.send(mayor100)
});

//3//

mainRouter.put('/modificarProductos/:Modelo', (req, res) => {
    const { Modelo } = req.params;
    const nuevoProducto = req.body;

    const productoExistente = producto_y_mercancia.find((producto) => producto.modelo === Modelo);

    if (!productoExistente) {
        res.status(400).json({ error: 'El producto no existe' });
    } else {
        Object.assign(productoExistente, nuevoProducto);
        res.status(201).send({ message: 'Producto modificado con éxito', producto: productoExistente });
    }
});

//4//

mainRouter.get('/eliminar/:eliminarModelo', (req, res) => {
    const { eliminarModelo } = req.params;

    const indiceParaEliminar = producto_y_mercancia.findIndex(producto => producto.modelo === eliminarModelo);
    
    if (indiceParaEliminar === -1) {
        res.status(404).send('No se encontró un producto con el modelo especificado.');
    } else {
        producto_y_mercancia.splice(indiceParaEliminar, 1);
        res.status(201).send('Producto eliminado con éxito.');
    }
});

//5//

mainRouter.get('/pais/:paisFiltrado' , (req , res) => {
    const { paisFiltrado } = req.params;

    const productosPorPais = producto_y_mercancia.filter(producto => producto.pais_de_origen === paisFiltrado);
    
    if (productosPorPais.length === 0) {
        res.status(404).send('No se encontraron productos para el país especificado.');
    } else {
        res.send(productosPorPais);
    }
});

//6//

mainRouter.get('/precio/:precioFiltrado', (req, res) => {
    const {precioFiltrado} = req.params;

    const productosPorPrecio = producto_y_mercancia.filter(producto => producto.precio === parseInt(precioFiltrado));
    
    if (productosPorPrecio.length === 0) {
        res.status(404).send('No se encontraron productos para el precio especificado.');
    } else {
        res.send(productosPorPrecio);
    }
});

//7//

mainRouter.post('/crearProductos', (req, res) => {
    const getProduct = req.body;
    producto_y_mercancia.push(getProduct);
    console.log(producto_y_mercancia);
    res.status(201).send(producto_y_mercancia);
});

export { mainRouter };