const express = require('express')
const router = express.Router()
const usuarioMid = require('../Middleware/validarUsuario.middleware')
const { Usuario } = require('../db/models')

router.post('/', usuarioMid)
router.put('/', usuarioMid)

router.get('/',  async(req, res) => {
    const usuarios = await Usuario.findAll()
    res.json({usuarios: usuarios})
})

router.get('/:id',  async(req, res) => {
    const usuarios = await Usuario.findByPk(req.params.id)
    res.json({usuario: usuarios})
})


router.put('/', async (req, res) => {
    const id = req.query.id
    const usuarios = await Usuario.findByPk(id)
    if (usuarios){
        usuarios.email = req.body.email
        usuarios.senha = req.body.senha
        await usuarios.save()
        res.json({msg: "Usuário atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuário não encontrado!"})
    }
})

router.delete('/', async (req, res) => {
    const id = req.query.id
    const usuarios = await Usuario.findByPk(id)
    if (usuarios){
        await usuarios.destroy()
        res.json({msg: "Usuário deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuário não encontrado!"})
    }
})

router.post('/', async (req, res) => {
    const usuarios = await Usuario.create(req.body)
    res.json({msg: "Usuario adicionado com sucesso!"})
})

module.exports = router