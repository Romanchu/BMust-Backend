import express from 'express';
import { AppDataSource } from './persistance/db';
import { addProductsToDB } from './persistance/scripts/addProductsToDB';
import { mainRouter } from './router/routes';

const app = express();
const port = 8080;

app.use(express.json());
app.use ('/' , mainRouter);

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