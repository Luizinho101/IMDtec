const express = require('express');
const app = express();
const rotaProdutos = require('./rotas/rotas_produtos');
app.use(express.json());

app.use('/produtos', rotaProdutos)

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/produtos`);
});