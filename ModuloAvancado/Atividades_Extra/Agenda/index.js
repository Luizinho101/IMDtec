const express = require('express');
const { Agenda } = require('./models'); // Importa o seu modelo Agenda
const app = express();
const PORT = 8080;

// Configura o motor de visualização para EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// --- ROTAS DE API (Retornam JSON) ---

// Criar evento
app.post('/api/agenda', async (req, res) => { 
    try {
        const novaAgenda = await Agenda.create(req.body);
        res.status(200).send(`Evento ${novaAgenda.id} inserido com sucesso`);
    } catch (error) {
        res.status(500).send('Erro ao criar evento na agenda');
    }
});

// Listar todos (JSON)
app.get('/api/agendas', async (req, res) => { 
    try {
        const limit = parseInt(req.query.limit) || 100;
        const offset = parseInt(req.query.offset) || 0;
        const agendas = await Agenda.findAll({ limit, offset });
        res.status(200).json(agendas);
    } catch (error) {
        res.status(500).send('Erro ao buscar dados da agenda');
    }
});

// Buscar um por ID (JSON)
app.get('/api/agenda/:id', async (req, res) => { 
    try {
        const agenda = await Agenda.findByPk(req.params.id);
        if (agenda) res.status(200).json(agenda);
        else res.status(404).send('Evento não encontrado');
    } catch (error) {
        res.status(500).send('Erro ao buscar evento');
    }
});

// Atualizar evento
app.put('/api/agenda/:id', async (req, res) => { 
    try {
        const [affectedRows] = await Agenda.update(req.body, {
            where: { id: req.params.id }
        });
        if (affectedRows > 0) res.status(200).send(`Evento ${req.params.id} atualizado`);
        else res.status(404).send('Evento não encontrado');
    } catch (error) {
        res.status(500).send('Erro ao atualizar');
    }
});

// Deletar evento
app.delete('/api/agenda/:id', async (req, res) => { 
    try {
        const affectedRows = await Agenda.destroy({
            where: { id: req.params.id }
        });
        if (affectedRows > 0) res.status(200).send(`Evento ${req.params.id} apagado`);
        else res.status(404).send('Evento não encontrado');
    } catch (error) {
        res.status(500).send('Erro ao excluir');
    }
});





// --- ROTAS VISUAIS (Renderizam EJS) ---

// Renderiza a lista completa (Usa o arquivo views/Agendas.ejs)
app.get('/agendas', async (req, res) => { 
    try {
        const agendas = await Agenda.findAll();
        // O nome 'agendas' dentro do objeto deve ser o mesmo que você usou no forEach do EJS
        res.render('Agendas', { agendas }); 
    } catch (error) {
        res.status(500).send('Erro ao renderizar lista');
    }
});

// Renderiza um detalhe específico (Usa o arquivo views/Agenda.ejs)
app.get('/agenda/:id', async (req, res) => { 
    try {
        const agenda = await Agenda.findByPk(req.params.id);
        if (agenda) {
            res.render('Agenda', { agenda });
        } else {
            res.status(404).send('Evento não encontrado para visualização');
        }
    } catch (error) {
        res.status(500).send('Erro ao carregar detalhes');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor de Agenda rodando em http://localhost:${PORT}`);
    console.log(`Acesse a lista visual em: http://localhost:8080/agendas`);
});