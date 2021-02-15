
const dgram = require('dgram');

let client = dgram.createSocket('udp4');
let server = dgram.createSocket('udp4');

let message = process.argv[2] || 'udp message';
message = Buffer.from(message);

server.bind(41234);

// A UDP server is an instance of EventEmitter, emitting a message event 
// when messages are received on the bound port.
server.on('message', msg => {
    process.stdout.write(`got message: ${msg}\n`);
    process.exit();
});

client.send(message, 0, message.length, 41234, 'localhost');
