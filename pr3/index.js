const http = require("http");
const path = require("path");
const express = require("express");
const webSocket = require("ws");

const PORT = 3000

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

const server = http.createServer(app);

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

const webSocketServer = new webSocket.Server({ server, path: '/ws' });

webSocketServer.on('connection', (ws) => {
  console.log('connection');

  ws.on('message', (data) => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    ws.send(JSON.stringify(parsedData));
  });

  ws.on('close', (number, reason) => {
    console.log(`close ${number}`, reason);
  })

  ws.on('error', (error) => ws.send(error));
});

server.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
})
