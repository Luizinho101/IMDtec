const { Agenda } = require('./models');

async function selectOne(id) {
    try {
      const evento = await Agenda.findByPk(id);
      if (evento) {
        console.log(`ID ${id} encontrado:`, evento.toJSON());
      } else {
        console.log(`Chave: ${id} inexistente`);
      }
    } catch (error) {
      console.error("Erro ao buscar por ID:", error);
    }
}

selectOne(1); 