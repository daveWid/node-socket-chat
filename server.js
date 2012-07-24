// The socket port
var io = require('socket.io').listen(1337);

io.sockets.on('connection', function(socket){
	socket.broadcast.emit('message', {
		user: "Node",
		timestamp: new Date(),
		message: "A user joined the room"
	});

	socket.on('message', function(data){
		socket.broadcast.emit('message', {
			user: data.user,
			timestamp: new Date(),
			message: data.message
		});
	});
});

// The webserver connection
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);
