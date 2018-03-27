var socket = io();

socket.on("connect", function() {
  console.log("connected to server");

  socket.emit("createMessage", {
    from: "raja@gmail.com",
    text: "How are you guys"
  });
});

socket.on("disconnect", function() {
  console.log("User was disconnected");
});

socket.on("newMessage", function(msg) {
  console.log(msg);
});
