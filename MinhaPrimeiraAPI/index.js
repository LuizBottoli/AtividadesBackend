import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});