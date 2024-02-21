import express, {Application} from 'express';
import http from 'http';
import WebSocket from 'ws';

const app:Application = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });


wss.on('connection', function connection(ws:WebSocket, req:any) {
    console.log('A new client Connected!');

    ws.on('message', function incoming(message:String) {
        console.log('received: %s', message);
    });
});

server.listen(8080, function listening() {
    console.log('Websocket is listening on %d', (server.address() as any).port);
});