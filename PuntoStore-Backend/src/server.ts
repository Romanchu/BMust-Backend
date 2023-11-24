import express from 'express';
import { AppDataSource } from './persistance/db';
import { mainRouter } from './router/routes';
import { Product } from './persistance/product'
import { User } from './persistance/user';

const app = express();
const port = 8080;

app.use(express.json());
app.use ('/' , mainRouter);

// docker run -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=PuntoStoreDB -p 3307:3306 mysql

AppDataSource.initialize()
    .then(async() => {
        console.log('Base de datos conectada');

//productos
        const validation_product = AppDataSource.manager.getRepository(Product)
        const product_exist = await validation_product.find()
        if (product_exist.length == 0){
            const product1 = new Product("Nike" , 5000)
            AppDataSource.manager.save([product1])
            console.log(product_exist)
        }

//usuario
        const validation_user = AppDataSource.manager.getRepository(User)
        const user_exist = await validation_user.find()
        if (user_exist.length == 0){
            const user1 = new User("prueba123" , "prueba@gmail.com", "12345678")
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

