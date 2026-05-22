const http = require('http');

// 1. Array para armazenar os alunos na memória do servidor
let listaAlunos = [];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Rota para ADICIONAR aluno (POST)
    if (req.method === 'POST' && req.url === '/alunos') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const novoAluno = JSON.parse(body);
                // Adiciona ao array
                listaAlunos.push(novoAluno);
                
                res.writeHead(201); // Created
                res.end(JSON.stringify({ status: 'sucesso', aluno: novoAluno }));
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ status: 'erro', mensagem: 'JSON inválido' }));
            }
        });
    } 
    // Rota para LISTAR alunos (GET)
    else if (req.method === 'GET' && req.url === '/alunos') {
        res.writeHead(200);
        res.end(JSON.stringify(listaAlunos));
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});