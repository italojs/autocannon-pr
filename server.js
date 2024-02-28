const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/plain");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end("Bem-vindo à API de Teste de Estresse!");
            break;
        case "/long-operation":
            for (let i = 0; i < 10000; i++) Math.random()
            res.writeHead(200);
            res.end("Operação longa concluída!");
            break;
        default:
            res.writeHead(404);
            res.end("Rota não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Servidor está rodando em http://${host}:${port}`);
});

