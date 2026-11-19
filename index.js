import express from 'express';
import './models/relations.js';
import { connectDatabase } from './connection.js';
import router from './routes/route.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

connectDatabase();

app.listen(port, () => {
  console.log(`Servidor ativo em http://localhost:${port}`);
});