const express = require('express')
const rota = express.Router();

const produtos = {};

let ID = 1;



rota.get('/', (req, res) =>{

    res.json({produtos : produtos})
})

rota.post('/', (req, res) => {
    const produto = req.body
    const idprodutos = ID;
    produto.ID = idprodutos;
    produtos[idprodutos]= produto;
    ID ++;
    res.json({ produtos: "Produto Adicionado com sucesso !"});
})

rota.put('/', (req, res) => {
    const id = req.query.id

    if (id && produtos[id]){
        const produtoNovo = req.body
        produtoNovo.id = id
        produtos[id] = produtoNovo
        res.json({msg: "Produto atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})

rota.delete('/', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]){
        delete produtos[id]
        res.json({msg: "Produtos deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})


module.exports = rota 