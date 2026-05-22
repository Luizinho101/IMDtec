const express = require('express');
const router = express.Router();

// Importamos os modelos (o Sequelize CLI gera o index.js que contém todos)
const { Produto } = require('../models'); 

const schemaProdutos = require('../schemas/schemas_produtos');
const validarSchema = require('../middlewares/validador');

// --- LISTAR TODOS ---
router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json({ produtos });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
});

// --- INSERIR NOVO ---
router.post('/', validarSchema(schemaProdutos), async (req, res) => {
    try {
        // O Sequelize lida com o ID automaticamente (Auto-increment)
        const novoProduto = await Produto.create(req.body);
        res.status(201).json({ 
            mensagem: 'Produto inserido com sucesso!', 
            produto: novoProduto 
        });
    } catch (error) {
        res.status(400).json({ erro: "Erro ao inserir produto" });
    }
});

// --- ATUALIZAR ---
router.put('/:id', validarSchema(schemaProdutos), async (req, res) => {
    const idProduto = req.params.id;

    try {
        // Buscamos o produto pela Chave Primária (Primary Key)
        const produto = await Produto.findByPk(idProduto);

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado!' });
        }

        // Atualiza os dados no banco
        await produto.update(req.body);
        res.json({ mensagem: 'Produto atualizado com sucesso!', produto });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao atualizar produto" });
    }
});

// --- REMOVER ---
router.delete('/:id', async (req, res) => {
    const idProduto = req.params.id;

    try {
        // destroy retorna a quantidade de linhas afetadas
        const deletado = await Produto.destroy({
            where: { id: idProduto }
        });

        if (deletado) {
            return res.json({ mensagem: 'Produto removido com sucesso!' });
        }
        
        res.status(404).json({ mensagem: 'Erro: Produto não encontrado.' });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao remover produto" });
    }
});

module.exports = router;