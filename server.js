const http = require('http');
const { nanoid } = require('nanoid');
const { handleUserQuery } = require('./routes/user');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === '/id') {
        const generatedId = nanoid();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: generatedId }));
        return;
    }

    if (url.pathname === '/user') {
        const userId = url.searchParams.get('id');
        const result = handleUserQuery(userId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});

if (require.main === module) {
    server.listen(3000, () => {
        console.log('Sample app running on port 3000');
    });
}

module.exports = server;
