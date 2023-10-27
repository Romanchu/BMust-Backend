import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (_, res) => {
    res.send('Punto 1: /productos ; Punto 2: /precio ; Punto 4: /eliminar/eliminarModelo; Punto 5: /pais/paisFiltrado ; Punto 6: /precio/precioFiltrado');
});

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

mainRouter.post('modificar/:modeloAModificar', (req, res) => {
    const { modeloAModificar } = req.body.modelo;

    const nuevoProducto = req.body.producto; 

    const indiceAModificar = producto_y_mercancia.findIndex(producto => producto.modelo === String(modeloAModificar));
    
    if (indiceAModificar === -1) {
        res.status(404).send('No se encontró un producto con el modelo especificado.');
    } else {
        producto_y_mercancia[indiceAModificar] = nuevoProducto;
        res.send('Producto modificado con éxito.');
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
        res.send('Producto eliminado con éxito.');
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


export { mainRouter };