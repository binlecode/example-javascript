/**
 * 
 * ref: https://socket.io/get-started/chat/
 * 
 * To run: 
 * - node src/websocket/server.js
 * - go to localhost:3000/index.html and start entering message
 * - open another webbrowser tab and start entering message
 * 
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
    console.log(`a user (socket ${socket.id}) connected`);
    // greet the new user
    socket.emit('chat message', 'welcome!');
    // broadcast to all other connected sockets except itself
    socket.broadcast.emit('chat message', `a new user (${socket.id}) connected`);

    socket.on('disconnect', () => {
        console.log(`user (${socket.id}) disconnected`);
        socket.broadcast.emit('chat message', `a user (${socket.id}) disconnedted`);
    });

    socket.on('chat message', (msg) => {
        console.log('user message: ' + msg);
        // emit event to all connected sockets
        io.emit('chat message', `user (${socket.id}): ` + msg);
    });
});


http.listen(3000, () => {
    console.log('listening on *:3000');
});

