const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

function carregarPagina(res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('<h1>Página não encontrada</h1>');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    const rota = req.url;

    if (rota === '/') {
        carregarPagina(res, path.join(__dirname, 'public', 'index.html'));
    } else if (rota === '/pagina-1') {
        carregarPagina(res, path.join(__dirname, 'public', 'index1.html'));
    } else if (rota === '/pagina-2') {
        carregarPagina(res, path.join(__dirname, 'public', 'index2.html'));
    } else if (rota === '/pagina-3') {
        carregarPagina(res, path.join(__dirname, 'public', 'index3.html'));
    } else if (rota === '/pagina-4') {
        carregarPagina(res, path.join(__dirname, 'public', 'index4.html'));
    } else if (rota === '/pagina-5') {
        carregarPagina(res, path.join(__dirname, 'public', 'index5.html'));
    } else {
        res.statusCode = 404;
        res.end('<h1>Rota não encontrada</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});