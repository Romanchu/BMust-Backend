import express from 'express';
import { mainRouter } from './router/routes';
const app = express();
const port = 8080;

app.use ('/' , mainRouter)

app.listen(port, () => {
  console.log(`Servidor: http://localhost:${port}`);
});
