var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('event:new:image', function(data) {
    socket.broadcast.emit('event:incoming:image', data);
  });
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('Socket.io Running on port', port);
});
