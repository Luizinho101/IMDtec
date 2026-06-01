const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());


app.get('/ola_servidor', (req, res) => {
  res.json({
    "message": "Oi coleguinas. tudo tranquilo com vocês?"
  });
});


app.get('/que_horas_sao_por_favor', (req, res) => {
  const agora = new Date();
  const dataFormatada = agora.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  res.json({
    "horaAtual": dataFormatada
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Rota 1: http://localhost:${port}/ola_servidor`);
  console.log(`Rota 2: http://localhost:${port}/que_horas_sao_por_favor`);
});