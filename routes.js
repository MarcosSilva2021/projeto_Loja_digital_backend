import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('enviando dados');
});

router.get('/', (req, res) => {
  res.send('enviando dados');
});
routerp.post('/', (req, res) => {
  res.send('criando');
});

router.put('/', (req, res) => {
  res.send('atualizando');
});

router.delete('/', (req, res) => {
  res.send('excluindo');
});

export default router;