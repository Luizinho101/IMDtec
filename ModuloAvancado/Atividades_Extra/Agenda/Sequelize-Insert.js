const { Agenda } = require('./models'); 

Agenda.create({ 
    id: 21,
    data: '2026-04-10 14:00:00', 
    evento: 'Aula de Node.js', 
    local: 'Laboratório 01', 
    resumo: 'Aprender sobre CRUD com Sequelize'
}) 
.then(agenda => { 
  console.log("Evento inserido com sucesso:", agenda.toJSON()); 
}) 
.catch(error => { 
  console.error("Erro ao inserir na agenda:", error); 
});