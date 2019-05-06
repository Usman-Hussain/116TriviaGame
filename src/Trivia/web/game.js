var socket = io.connect({transports: ['websocket']});
socket.on('message', function (event) {

    document.getElementById("username").innerHTML = event;

});

function register(){
    socket.emit("register", "me");
}

/**function clickGold(){
    socket.emit("clickGold");
} **/



