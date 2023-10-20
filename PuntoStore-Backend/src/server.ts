import express from 'express';
import { productsRouter } from './router/routes';
const app = express();
const port = 8080;

app.use ('/' , productsRouter)

app.listen(port, () => {
  console.log(`Servidor: http://localhost:${port}`);
});
