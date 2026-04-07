const express = require('express')
const app = express()
app.use(express.json());
app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    const number = Math.random()
    res.render('pages/index', {variavel: number})
})


app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080 !");
})