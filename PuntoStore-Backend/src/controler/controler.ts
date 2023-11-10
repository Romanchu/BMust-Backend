import { Response, Request } from 'express'

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

export function getProducts(_: Request, res: Response) {
    res.send(producto_y_mercancia);
};

export function price100 (_:Request, res:Response){
    const mayor100 = producto_y_mercancia.filter(producto => producto.precio > 99);
    res.send(mayor100)
};

export function modifyProducts (req:Request, res:Response){
    const { Modelo } = req.params;
    const nuevoProducto = req.body;

    const productoExistente = producto_y_mercancia.find((producto) => producto.modelo === Modelo);

    if (!productoExistente) {
        res.status(400).json({ error: 'El producto no existe' });
    } else {
        Object.assign(productoExistente, nuevoProducto);
        res.status(201).send({ message: 'Producto modificado con éxito', producto: productoExistente });
    }
};

export function countryFilter(req:Request, res:Response){
    const { paisFiltrado } = req.params;

    const productosPorPais = producto_y_mercancia.filter(producto => producto.pais_de_origen === paisFiltrado);
    
    if (productosPorPais.length === 0) {
        res.status(404).send('No se encontraron productos para el país especificado.');
    } else {
        res.send(productosPorPais);
    }
};

export function deleteProduct (req:Request, res:Response){
    const { eliminarModelo } = req.params;

    const indiceParaEliminar = producto_y_mercancia.findIndex(producto => producto.modelo === eliminarModelo);
    
    if (indiceParaEliminar === -1) {
        res.status(404).send('No se encontró un producto con el modelo especificado.');
    } else {
        producto_y_mercancia.splice(indiceParaEliminar, 1);
        res.status(201).send('Producto eliminado con éxito.');
    }
};

export function priceFilter (req:Request, res:Response){
    const {precioFiltrado} = req.params;

    const productosPorPrecio = producto_y_mercancia.filter(producto => producto.precio === parseInt(precioFiltrado));
    
    if (productosPorPrecio.length === 0) {
        res.status(404).send('No se encontraron productos para el precio especificado.');
    } else {
        res.send(productosPorPrecio);
    }
};

export function createProduct (req:Request, res:Response){
    const getProduct = req.body;
    producto_y_mercancia.push(getProduct);
    console.log(producto_y_mercancia);
    res.status(201).send(producto_y_mercancia);
};
