const express = require('express')
const app = express()
app.use(express.json())

const produtos = {};

let ID = 1;


app.get('/', (req, res) =>{

    res.json({ msg: "Get Executado com sucesso !"});
})

app.get('/produtos', (req, res) =>{

    res.json({produtos : produtos})
})

app.post('/produtos', (req, res) => {
    const produto = req.body
    const idprodutos = ID;
    produto.ID = idprodutos;
    produtos[idprodutos]= produto;
    ID ++;
    res.json({ produtos: "Produto Adicionado com sucesso !"});
})

app.put('/produtos', (req, res) => {
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

app.delete('/produtos', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]){
        delete produtos[id]
        res.json({msg: "Produtos deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})


app.listen(8080, () => {
    console.log("Servidor rodando na pora 8080")
})