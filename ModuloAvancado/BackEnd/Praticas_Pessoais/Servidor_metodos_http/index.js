
const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    switch (req.url) {
        case '/aluno':
            alunoRoute(req, res)
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ msg: "Path não encontrado" }))
            res.end()
    }
})

server.listen(8080, () => {
    console.log('Servidor pronto na porta 8080!')
})

function alunoRoute(req, res) {

    switch (req.method) {

        case 'GET':
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ alunos: ["Gustavo", "João"] }))
            res.end()
            break

        case 'POST':
            res.writeHead(201, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ msg: "Aluno criado" }))
            res.end()
            break

        case 'PUT':
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ msg: "Aluno atualizado" }))
            res.end()
            break

        case 'PATCH':
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ msg: "Aluno parcialmente atualizado" }))
            res.end()
            break

        case 'DELETE':
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ msg: "Aluno deletado" }))
            res.end()
            break

        default:
            res.writeHead(405, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ msg: "Método HTTP não permitido" }))
            res.end()
    }
}