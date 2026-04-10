const express = require('express');
const app = express();
const port = 8080;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let cursos = [];
let idContador = 1;

app.get('/cursos', (req, res) => {
    res.render('index', { cursos: cursos });
});

app.post('/cursos', (req, res) => {

    const novoCurso = req.body;
    novoCurso.id = idContador;
    cursos.push(novoCurso);

    idContador++;
    
    res.json({ msg: "Curso adicionado com sucesso!", curso: novoCurso });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/cursos`);
});