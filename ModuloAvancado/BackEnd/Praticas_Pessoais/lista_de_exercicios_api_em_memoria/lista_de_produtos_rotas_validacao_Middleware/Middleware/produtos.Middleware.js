const Ajv = require('ajv')
const ajv = new Ajv()
const produtoSchema = require('../schemas/produtos.schema')

function validarProduto(req, res, next){
    const produto = req.body
    const validate = ajv.compile(produtoSchema)
    const valid = validate(produto)
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}

module.exports = validarProduto