import { createServer } from 'http';
const PORT = 8000;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
    { id: 5, name: 'John Doe' },

]

//logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

//route handler for get /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('User not found');
    }
}
const jsonMiddleware = (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    next();
}

const createUserHandler = (req, res) => { 
    let body = '';
    //listen for the data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body)
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}
//not found handler
const notFoundHandler = (req, res) => { 
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') { 
                getUsersHandler(req, res);
            } else if ( 
                req.url.match(/\/api\/users\/[0-9]+/) && req.method === 'GET'
            ) {
                getUserByIdHandler(req, res);
                
            } else if (
                req.url === '/api/users' && req.method === 'POST'
             ) {
                createUserHandler(req, res);
             }
                
            else {
                notFoundHandler(req, res);
            }
        })
    })
    
});

server.listen(PORT, () => {
    console.log(`server is running on port 8000`)
})