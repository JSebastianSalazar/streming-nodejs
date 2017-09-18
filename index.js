'use strict';
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8000;
const publicDir = `${__dirname}/public`;

// vita que va a ver el cliente cuando entre al 
// endpoint principal
app.get('/', (req, res) => {
    res.sendfile(`${publicDir}/client.html`);
});
// vista que ve el que esta haciendo el streming
app.get('/streming', (req, res) => {
    res.sendfile(`${publicDir}/server.html`);
});
// se hace conexion del streming
io.on('connection', (socket) => {
    socket.on('streaming', (img) => {
        io.emit('play', img);
          });
});
http.listen(port, () => {
    console.log('corriendo en el  puerto    ', port);
});