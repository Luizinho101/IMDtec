const express = require('express');
const router = express.Router();


let produtos = {};
let id = 1;


router.get('/', (req, res) => {
    res.json({ produtos });
});


router.post('/', (req, res) => {
    const produto = req.body;
    produtos[id] = produto;
    id++;
    res.status(201).json({ mensagem: 'Produto inserido com sucesso!' });
});


router.put('/:id', (req, res) => {
    const idProduto = req.params.id;

    if (produtos[idProduto]) {
        const produtoAtualizado = req.body;
        produtos[idProduto] = produtoAtualizado;
        
        return res.json({ mensagem: 'Produto atualizado com sucesso!' });
    }
    res.status(404).json({ mensagem: 'Produto não encontrado!' });
});


router.delete('/:id', (req, res) => {
    const idProduto = req.params.id;

    if (produtos[idProduto]) {
        delete produtos[idProduto];
        return res.json({ mensagem: 'Produto removido com sucesso!' });
    }
    res.status(404).json({ mensagem: 'Erro: Produto não encontrado.' });
});

module.exports = router;