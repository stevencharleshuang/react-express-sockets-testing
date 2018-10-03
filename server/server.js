const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const PORT = 5000;

app.use('/assets', express.static(__dirname + '/dist'));

app.get('/api', (req, res) => {
  res.send({ message: `You've reached the socket server, Dave` });
});

server.listen(PORT, () => {
  console.log(`Backend Server is running on Port: ${PORT}, Env: ${app.get('env')}`);
})
