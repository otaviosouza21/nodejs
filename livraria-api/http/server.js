import http from 'http';
const PORT = 3000;

const rotas = {
  "/": "curso de node.js",
  "/alunos": "alunos de node.js",
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log('servidor escutando');
});
