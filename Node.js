const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const menu = `
        <a href="/">Main</a>
        <a href="/second">Second</a>
    `;

    if (url === '/' && method === 'GET') {
        res.end(menu + '<div class="one">Main page</div>');
    } if (url === '/second' && method === 'GET') {
        res.end(menu + '<div class="one">Second page</div>');
    }

    // res.end('<div class="one">Text</div>');
});

server.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
});
