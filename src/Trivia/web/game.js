
var socket = io.connect({transports: ['websocket']});
socket.on('message', function (event) {
    document.getElementById("nickname").innerHTML = event;

});
socket.emit('register','me');


/**function clickGold(){
    socket.emit("clickGold");
} **/



