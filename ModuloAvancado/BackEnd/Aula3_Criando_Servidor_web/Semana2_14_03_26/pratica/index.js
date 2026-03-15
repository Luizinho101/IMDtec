const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        fs.readFile('./index.html', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500)
                res.end("Erro interno")
                return
            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })

    } else {

        fs.readFile('./404.html', 'utf-8', (err, data) => {

            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()

        })

    }

})

server.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080")
})

/*

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

    // verifica se é GET na raiz
    if (req.method === 'GET' && req.url === '/') {

        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end('Erro interno no servidor');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);

        });

    } else {

        // qualquer outro método ou rota
        fs.readFile(path.join(__dirname, '404.html'), 'utf8', (err, data) => {

            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');

            if (err) {
                res.end('<h1>404 - Página não encontrada</h1>');
                return;
            }

            res.end(data);

        });

    }

});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
*/