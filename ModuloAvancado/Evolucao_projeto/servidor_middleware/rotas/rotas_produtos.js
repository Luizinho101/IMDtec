const express = require('express');
const router = express.Router();

const schemaProdutos = require('../schemas/schemas_produtos');
const validarSchema = require('../middlewares/validador');

let produtos = {};
let id = 1;

router.get('/', (req, res) => {
    res.json({ produtos });
});

router.post('/', validarSchema(schemaProdutos) , (req, res) => {
    const novoProduto = req.body; 
    produtos[id] = novoProduto;
    id++;

    res.status(201).json({ mensagem: 'Produto inserido com sucesso!' });
});

router.put('/:id',validarSchema(schemaProdutos) , (req, res) => {
    const idProduto = req.params.id;

    if (!produtos[idProduto]) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!' });
    }
    produtos[idProduto] = req.body;
    res.json({ mensagem: 'Produto atualizado com sucesso!' });
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