
const http = require('http')

const server = http.createServer((req, res) => {

    switch (req.url){
        case "/aluno":
            res.writeHead(200,{'content-type': "text/json"})
            res.write(JSON.stringify({ msg: "Criando aluno", "path": req.url }))
            res.end()
            break;
        default:
            res.writeHead(200,{'content-type': "text/json"})
            res.write(JSON.stringify({ msg: "Path não encontrado" , "path": req.url}))
            res.end()
    }
})

server.listen(8080,() => {
    console.log("Servidor funcionando na porta 8080");
})