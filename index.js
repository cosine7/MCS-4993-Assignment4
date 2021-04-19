const express = require('express');

const app = express();
const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const router = require('./routes/route');
const UserService = require('./services/user.service');
require('dotenv').config();

app.use(router);

io.on('connection', (socket) => {
  socket.on('submit', async (value) => {
    await UserService.newUser(value);
  });
  socket.on('keyup', async (value) => {
    socket.emit('autocomplete', await UserService.getUserName(value));
  });
});

(async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });
})();
