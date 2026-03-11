
const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.url)
        res.writeHead(200, {'content-type': "text/json"})
        res.write(JSON.stringify({msg: "Hello Word !!!"}))
        res.end()
})

server.listen(8080, () =>{
console.log("Servidor pronto na porta 8080!")
})

