import http from 'node:http';
const port = 3000;
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const menu = `
        <a href="/">Main</a>
        <a href="/second">Second</a>
    `;
    if (url === '/' && method === 'GET') {
        return res.end(menu + '<div class="one">Main page</div>');
    }
    if (url === '/second' && method === 'GET') {
        return res.end(menu + '<div class="one">Second page</div>');
    }
    res.statusCode = 404;
    res.end(menu + '<div>404 Page Not Found</div>');
});
server.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
});



& "C:\Users\artem\OneDrive\Рабочий стол\node\node-v24.21.0-win-x64\node.exe" index.js
& "C:\Users\kalinichenko2_aa\Desktop\lab node\node-v24.21.0-win-x64\node.exe" node.js

cd "C:\Users\artem\OneDrive\Рабочий стол\node"
cd "C:\Users\kalinichenko2_aa\Desktop\lab node"

.\node-v24.21.0-win-x64\node.exe index.js
.\node-v24.21.0-win-x64\node.exe node.js
