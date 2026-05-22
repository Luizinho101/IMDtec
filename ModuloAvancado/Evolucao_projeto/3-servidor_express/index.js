const express = require('express');
const app = express();
app.use(express.json());

let produtos = {};
let id = 1;

const PORT = 8080;


app.get('/produtos', (req, res) => {
    res.json({ produtos });
});


app.post('/produtos', (req, res) => {
    const produto = req.body;
    produtos[id] = produto;
    id++;
    res.status(201).json({ mensagem: 'Produto inserido com sucesso!' });
});


app.put('/produtos/:id', (req, res) => {
    const idProduto = req.params.id;

    if (produtos[idProduto]) {
        const produtoAtualizado = req.body;
        produtos[idProduto] = produtoAtualizado;
        
        return res.json({ mensagem: 'Produto atualizado com sucesso!' });
    }
    res.status(404).json({ mensagem: 'Produto não encontrado!' });
});


app.delete('/produtos/:id', (req, res) => {
    const idProduto = req.params.id;

    if (produtos[idProduto]) {
        delete produtos[idProduto];
        return res.json({ mensagem: 'Produto removido com sucesso!' });
    }
    res.status(404).json({ mensagem: 'Erro: Produto não encontrado.' });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/produtos`);
});