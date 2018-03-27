const path = require("path");
const http = require('http');
const express = require("express");
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    message: 'Welcome to the chat app',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    message: 'New user joined',
    createdAt: new Date().getTime()
  });
  
  socket.on('createMessage', (message) => {
    // new message arrived
    console.log('createMessage', message);
    
    message.createdAt = new Date().getTime();
    
    // send msg to all connected user
    io.emit('newMessage', message)

    // Other than the guy who send the msg to server, everyone will be notified
    //socket.broadcast.emit('newMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
})

server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
