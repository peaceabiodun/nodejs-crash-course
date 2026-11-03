import { createServer } from 'http';
const PORT = 8000;

const server = createServer((req, res) => {

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.setHeader('content-type', 'text/html');
                res.statusCode = 500;
                res.write('<h1>Home Page</h1>');
                res.end();
            } else if (req.url === '/about') {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end('<h1>About Page</h1>');
            } else {
                res.writeHead(404, { 'content-type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            }
        } else {
            throw new Error('Method not allowed');
        }

    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' });
        res.end('Server Error');
    }


    //when using express, i don't need to write res.end() because express will handle it for me.
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
