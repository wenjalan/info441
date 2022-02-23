# Lecture 9 - Websockets
Websockets allow us servers to update a client with new information as it becomes available. Think about how messaging apps and chat messages work. A websocket can be thought of a connection where messages can be sent in either direction at any time. To create a websocket, use the following.

Server
```js
import express from 'express';
import enableWs from 'express-ws';

const app = express();
enableWs(app); 

app.get('/', (req, res) => {
    res.sendFile("index.html");
});

// create a new websocket
// ws is a websocket object that can be used to listen to or send messages
app.ws('/socket', (ws, res) => {
    ws.on('message', msg => {
        // do some stuff with the message
        console.log(msg);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
```

Client
```js
// socket url and web socket object
const socketUrl = "ws://localhost:3000/socket";
const webSocket = new WebSocket(socketUrl);

function sendMessage(message) {
    webSocket.send(message);
}   
```

One can deal with multiple web sockets by storing them in an array:
```js
const sockets = [];

app.ws('/socket', (ws, res) => {
    sockets.push(ws);
    const socketId = sockets.length();
})
```

To send messages the other way, the client can listen to `onmessage` propert of the Web Socket object.
Server
```js
app.ws('/socket', (ws, res) => {
    ws.on('message', msg => {
        if (msg === 'ping') {
            ws.send('pong');
        }
    })
})
```

Client
```js
// socket url and web socket object
const socketUrl = "ws://localhost:3000/socket";
const webSocket = new WebSocket(socketUrl);

// on message, alert with message
webSocket.onmessage = (event) => {
    const msg = event.data;
    alert(msg);
}

function sendMessage(message) {
    webSocket.send(message);
}   
```

There's also a close websocket event on the server side.
```js
app.ws('/socket', (ws, res) => {
    ws.on('message', msg => {
        if (msg === 'ping') {
            ws.send('pong');
        }
    });

    ws.on('close', () => {
        console.log('Socket closed');
    });
})