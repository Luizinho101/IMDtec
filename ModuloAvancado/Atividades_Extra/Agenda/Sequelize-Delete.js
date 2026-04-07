const { Agenda } = require('./models');

async function deleteId(id) {
    try {
        const rowsDeleted = await Agenda.destroy({
            where: { id: id }
        });

        if (rowsDeleted > 0) {
            console.log(`Sucesso: Registro ID ${id} excluído.`);
        } else {
            console.log('Nenhum registro encontrado para excluir.');
        }
    } catch (error) {
        console.error('Erro ao excluir:', error);
    }
}

deleteId(1);