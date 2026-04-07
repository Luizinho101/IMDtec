const { Agenda } = require('./models');

async function updateId(id) {
    try {
        const novosDados = {
            evento: 'Aula de Sequelize Avançado',
            local: 'Sala Virtual Zoom'
        };
        const [rowsAffected] = await Agenda.update(novosDados, {
            where: { id: id }
        });

        if (rowsAffected > 0) {
            console.log(`Sucesso: Registro ID ${id} atualizado.`);
        } else {
            console.log('Nenhum registro encontrado para atualizar.');
        }
    } catch (error) {
        console.error('Erro no update:', error);
    }
}

updateId(1);