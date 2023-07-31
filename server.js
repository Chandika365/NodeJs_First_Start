const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Context-Type': 'Text/plain' });
    res.end('Hello, HTTP Server!');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});