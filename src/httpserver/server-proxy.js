/*

Node has a consistent streams interface throughout its network interfaces.

The code below is an over-simplified http request forwarding server 
for 'GET' only.

*/



const http = require('http');
const server = new http.Server();

const targetHost = 'www.google.com';
const targetPath = '/';
const targetPort = '80';

server.on('request', (req, socket) => {
    console.log('proxy received request: ' + req.url);
    // create an http request to target url
    http.request({
        host: targetHost,
        method: 'GET',
        path: targetPath,
        port: targetPort,
    }, response => {
        // pipe response to socket
        response.pipe(socket);
    }).end();

});

server.listen(8080, () => {
    console.log('Proxy server listening on localhost: 8080');
});

