const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });


wss.on('connection', function connection(ws) {
    console.log('A new client Connected!');

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
});

server.listen(8080, function listening() {
    console.log('Websocket is listening on %d', server.address().port);
});