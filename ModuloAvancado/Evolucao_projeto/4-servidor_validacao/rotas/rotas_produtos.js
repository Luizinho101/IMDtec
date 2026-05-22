const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const schemaProdutos = require('../schemas/schemas_produtos');

const ajv = new Ajv(); 
addFormats(ajv);
const validate = ajv.compile(schemaProdutos);

let produtos = {};
let id = 1;

router.get('/', (req, res) => {
    res.json({ produtos });
});

router.post('/', (req, res) => {

    const isValid = validate(req.body); 
    
    if (!isValid) {
        return res.status(400).json({
            erro: "Dados inválidos",
            detalhes: validate.errors
        });
    }

    const novoProduto = req.body; 
    produtos[id] = novoProduto;
    id++;

    res.status(201).json({ mensagem: 'Produto inserido com sucesso!' });
});

router.put('/:id', (req, res) => {
    const idProduto = req.params.id;

    if (!produtos[idProduto]) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!' });
    }

    const isValid = validate(req.body);
    if (!isValid) {
        return res.status(400).json({ erro: validate.errors });
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