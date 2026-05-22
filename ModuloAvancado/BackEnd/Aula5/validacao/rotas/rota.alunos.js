const express = require('express')
const app = express();


const alunos = {};
let Id = 1 ;

const Ajv = require("ajv");
const addFormats = require("ajv-formats")
const ajv = new Ajv()
addFormats(ajv)


const schema = {
  type: "object",
  properties: {
    nome: {type: "string"},
    RA: {type: "string"},
    email: {type: "string", format: "email"}
  },
  required: ["nome", "RA"],
  additionalProperties: false
}


app.get('/', (req, res) => {
    res.json({ message: 'API Node + Express funcionando!' });
});

app.get('/', (req , res)=> {
    res.json(alunos);
});

app.post('/', (req , res) => {

    const aluno = req.body
   // const validate = ajv.compile(schema, aluno)
    // valid = validate(schema, aluno)
    valid = ajv.validate(schema, aluno)
    if(valid){ 
        const idAluno = Id;
        aluno.id = idAluno;
        alunos[idAluno] = aluno;
        Id += 1;
        res.json({msg: "Aluno adicionado com sucesso!"})
    }else{
       res.status(400).json({msg: "Dados inválidos"})
    }
});

module.exports = router