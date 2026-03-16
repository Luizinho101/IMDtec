
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json("Express em execução !!!")
})

app.listen(8080, () => {
    console.log("Servidor rodando na pora 8080")
})