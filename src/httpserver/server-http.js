
const http = require('http')
const url = require('url')
/*
http.createServer takes a function, known as the RequestListener with two
parameters: request, and response.

*/
http.createServer((req, res) => {

    const query = url.parse(req.url, true).query;
    console.log(query);

    res.end(`hello ${query.a}`);
}).listen(8214);

console.log('server running on port 8214');


