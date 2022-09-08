const http = require("http");
const path = require("path");
const express = require("express");
const webSocket = require("ws");

const TaskIds = {
  task25: 'task25',
  task28: 'task28',
  task1: 'task1',
  task4: 'task4',
  task7: 'task7',
}

const task25 = require("./task25");
const task28 = require("./task28");
const task1 = require("./task1");
const task4 = require("./task4");
const task7 = require("./task7");

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

  ws.on('message', (rawData) => {
    const parsedData = JSON.parse(rawData);
    const { taskId, data } = parsedData
    console.log(parsedData);

    switch (taskId) {
      case TaskIds.task25:
        try {
          const result = task25(Number(data.A));
  
          ws.send(JSON.stringify({ taskId, data: result }));
        } catch (error) {
          ws.send(JSON.stringify({ taskId, error: error.message }));
        }
        break;
      
      case TaskIds.task28:
        try {
          const result = task28();
  
          ws.send(JSON.stringify({ taskId, data: result }));
        } catch (error) {
          ws.send(JSON.stringify({ taskId, error: error.message }));
        }
        break;

      case TaskIds.task1:
        try {
          const result = task1();
  
          ws.send(JSON.stringify({ taskId, data: result }));
        } catch (error) {
          ws.send(JSON.stringify({ taskId, error: error.message }));
        }
        break;
      
      case TaskIds.task4:
        try {
          const result = task4();
  
          ws.send(JSON.stringify({ taskId, data: result }));
        } catch (error) {
          ws.send(JSON.stringify({ taskId, error: error.message }));
        }
        break;
  
      case TaskIds.task7:
        try {
          const result = task7(Number(data.x));
  
          ws.send(JSON.stringify({ taskId, data: result }));
        } catch (error) {
          ws.send(JSON.stringify({ taskId, error: error.message }));
        }
        break;

      default:
        ws.send(JSON.stringify({ error: 'Неккоректный id формы' }));
        break;
    }
  });

  ws.on('close', (number, reason) => {
    console.log(`close ${number}`, reason);
  })

  ws.on('error', (error) => ws.send(error));
});

server.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
})
