const express = require('express')
const app = express();
const rotaUsuario = require('./rotas/rota.alunos')


app.use(express.json());

app.use('/alunos', rotaUsuario)

const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});