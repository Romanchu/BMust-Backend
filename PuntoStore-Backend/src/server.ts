import express from 'express';
import { AppDataSource } from './persistance/db';
import { mainRouter } from './router/routes';
import { Product } from './persistance/product'
import { User } from './persistance/user';
import  cors from 'cors';

const app = express();
const port = 8080;
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}   
    
app.use(express.json());
app.use ('/' , mainRouter);
app.use (cors(corsOptions));


AppDataSource.initialize()
    .then(async() => {
        console.log('Base de datos conectada');

//productos
        const validation_product = AppDataSource.manager.getRepository(Product)
        const product_exist = await validation_product.find()
        if (product_exist.length == 0){
            const product1 = new Product('https://sublitextil.com.ar/wp-content/uploads/2022/08/pad-gamer-Sublimable-28x60cm.png',"Pad1", 500, 1);
            const product2 = new Product('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrSqZxdqKRusrBzBQ-9PVHjRXUNejZNS1Iw&usqp=CAU', "Pad2", 300, 1);
            const product3 = new Product('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvgSN6EDNJwuAahNhWgP4_BftCLbuHjq8Nw&usqp=CAU', "Pad3", 600, 1);
            const product4 = new Product('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Q0cmgNGqFOn7k3IXmUAgDPEMOntAi-Avj7PyRFDDIZB0XDHcho_pDQ6lU2BAn02x4MY&usqp=CAU', "Pad4", 700, 1);
            AppDataSource.manager.save([product1, product2, product3, product4])
            console.log(product_exist)
        }

//usuario
        const validation_user = AppDataSource.manager.getRepository(User)
        const user_exist = await validation_user.find()
        if (user_exist.length == 0){
            const user1 = new User("prueba123" , "prueba@gmail.com", "12345678", "12345678")
            AppDataSource.manager.save([user1])
            console.log(user_exist)
        }
        app.listen(port, () => {
            console.log(`Servidor: http://localhost:${port}`);
        });
    })
    .catch(err => {
        throw err
    });

