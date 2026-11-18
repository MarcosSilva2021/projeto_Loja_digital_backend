import express from 'express';
import './models/relations.js';
import { connectDatabase } from './connection.js';


const app = express();
const port = 3000;

connectDatabase();

app.listen(port, () => {
  console.log('Servidor ativo em http://localhost:3000');
});