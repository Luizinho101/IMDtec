const express = require('express')
const app = express()
app.use(express.json())

let listaDeTarefas = {}
let Id = 1;


app.get('/tarefa', (req, res) => {
    res.json({Tarefas: Object.values(listaDeTarefas)})
})

app.post('/tarefa', (req , res) => {
    const tarefa = req.body;
    const dataAtual = new Date();
    const horaAtual = ' ';
    const idTarefa = Id;
    console.log(tarefa.Id)
    tarefa.id = idTarefa;
    tarefa.Date = dataAtual;
    tarefa.horaAtual = '23'
    listaDeTarefas[idTarefa] = tarefa;
    Id += 1;

    res.json({msg: "Tarefa inserida com sucesso ! "})
})

app.put('/tarefa', (req , res) => {
    const id = req.query.id

    if(id && listaDeTarefas[id]) {

        const novaTarefa = req.body;
        const dataAtual = new Date();

        novaTarefa.id = id;
        novaTarefa.Date = dataAtual;
        novaTarefa.horaAtual = '23'

        listaDeTarefas[id] = novaTarefa;

        res.json({msg: "Tarefa atualizada com sucesso!"})

    } else {

        res.status(404).json({msg: "Tarefa não encontrada"})

    }
})


app.listen(8080, () => {
    console.log("Servidor executando na porta 8080 !")
})