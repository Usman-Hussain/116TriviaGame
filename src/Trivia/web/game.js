
var socket = io.connect({transports: ['websocket']});

socket.on('connect', function (event) {
    // connected to server
});

socket.on('message', function (event) {
    document.getElementById("nickname").innerHTML = event;

});
socket.emit('register','me');
function register(){
    socket.emit('register');
}

/**function clickGold(){
    socket.emit("clickGold");
} **/



