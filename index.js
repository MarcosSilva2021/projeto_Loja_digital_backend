import express from 'express';
import cors from 'cors';
import './models/relations.js';
import { connectDatabase } from './connection.js';
import router from './routes/route.js';

const app = express();
const port = 3000;

// habilitando o cors para poder se cominicar com o frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(express.json());
app.use(router);

await connectDatabase();

app.listen(port, () => {
  console.log(`Servidor ativo em http://localhost:${port}`);
});