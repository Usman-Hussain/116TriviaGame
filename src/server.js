var express=require('express');

var app=express();

var server=app.listen(8080);

app.use(express.static('Trivia'));

console.log("server is running");

var socket=require('socket.io');

var io=socket(server);

io.sockets.on('connection',newConnection);

function newConnection(socket){
    console.log("new connection"+socket.id)
}

