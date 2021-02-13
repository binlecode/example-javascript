/**
 * 
 * ref: https://socket.io/get-started/chat/
 */


const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// refresh the 'index.html' webpage console prints “a user connected”.
// refresh again closes existing websocket and initialize a new one
io.on('connection', (socket) => {
    console.log('a user connected');
    // socket.broadcast.emit('hello');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('user message: ' + msg);
        // emit event to all connected sockets
        io.emit('chat message', msg);
    });
});


http.listen(3000, () => {
    console.log('listening on *:3000');
});

