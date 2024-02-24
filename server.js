import express from 'express';
import http from 'http';
import {WebSocketServer} from 'ws';

const app = express();

const server = http.createServer(app);

const wss = new WebSocketServer({ server });



wss.on('connection', function connection(ws, req) {
    console.log('A new client Connected!');

    ws.on('message', function incoming(message) {
        console.log('%s', message);
    });
});

server.listen(8080, function listening() {
    console.log('Websocket is listening on %d', server.address().port);
});