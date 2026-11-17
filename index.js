import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('enviando dados');
});

app.post('/', (req, res) => {
  res.send('criando');
});

app.put('/', (req, res) => {
  res.send('atualizando');
});

app.delete('/', (req, res) => {
  res.send('excluindo');
});

app.listen(port, () => {
  console.log('Servidor ativo em http://localhost:3000');
});