const express = require('express')
const app = express()
const rotaProdutos = require('./rotas/rota.produtos')

app.use(express.json())

app.use('/produtos', rotaProdutos)


app.listen(8080, () => {
    console.log("Servidor rodando na pora 8080")
})