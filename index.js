const app = require('./app')
const http = require('http')

const port = 5000;

const server = http.createServer(app);

server.listen(port,() => console.log(`Server started on port ${port}`));