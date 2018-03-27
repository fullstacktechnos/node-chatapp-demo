const path = require("path");
const http = require('http');
const express = require("express");
const socketIO = require('socket.io');

const { generateMessage } = require("./utils/message");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app !'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
  
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    // send msg to all connected user
    io.emit('newMessage', generateMessage(message.from, message.text));
    
    // send acknowledgement to client using callback
    callback('This is from the server');

    // Other than the guy who send the msg to server, 
    // everyone will be notified
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createAt: new Date().toString()
    // });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
})

server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
