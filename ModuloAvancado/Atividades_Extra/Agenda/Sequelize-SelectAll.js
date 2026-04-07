const { Agenda } = require('./models');

async function selectAll(limit = 10, offset = 0) {
    try {
      const eventos = await Agenda.findAll({
        limit: limit,
        offset: offset
      });
      const dados = eventos.map(item => item.toJSON());
      console.log("--- Todos os Eventos ---");
      console.log(dados);
    } catch (error) {
      console.error("Erro ao buscar agenda:", error);
    }
}

selectAll(); // Padrão: 10 primeiros
