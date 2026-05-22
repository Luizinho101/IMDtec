const express = require('express')
const rota = express.Router();

const schemaPessoas = require('../schemas/schemasPessoas');
const validarSchema = require('../middleware/middlewarePessoas');

rota.use(express.json());

let pessoas = {};
let id = 1;

rota.get('/', (req, res) => {
    res.json({pessoa: pessoas})
})

rota.post('/', validarSchema(schemaPessoas), (req, res) => {
    const pessoa = req.body
    pessoas[id] = pessoa
    id++;
    res.json({msg: "Pessoa adicionada com sucesso!"})
})

rota.put('/:id', validarSchema(schemaPessoas),(req, res) => {
    const idPessoa = req.params.id
    if(idPessoa){
        const pessoa = req.body
        pessoas[idPessoa] = pessoa
        res.json({msg: "Pessoa atualizada com sucesso!"})
    }

})
rota.delete('/:id', (req , res) => {
    const idPessoa = req.params.id
    if(idPessoa){
        delete pessoas[idPessoa]
         res.json({msg: "Pessoa deletada com sucesso!"})
    }
})


module.exports = rota