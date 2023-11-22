import express from 'express';
import { AppDataSource } from './persistance/db';
import { addProductsToDB } from './persistance/scripts/addProductsToDB';
import { mainRouter } from './router/routes';

const app = express();
const port = 8080;

app.use(express.json());
app.use ('/' , mainRouter);

// docker run -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=PuntoStoreDB -p 3307:3306 mysql

AppDataSource.initialize()
    .then(() => {
        console.log('Base de datos conectada');
        app.listen(port, () => {
            console.log(`Servidor: http://localhost:${port}`);
        });
    })
    .catch(err => {
        throw err
    });

addProductsToDB()