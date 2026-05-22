const express = require('express')
const app = express();
const pessoas = require('./rotas/pessoas')


app.use('/pessoas', pessoas);


const PORT = 8080;

app.listen(PORT, (req , res) => {
    console.log(`http://localhost:${PORT}/pessoas`);
})

