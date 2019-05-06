var socket = io.connect({transports: ['websocket']});
socket.on('message', function (event) {
    document.getElementById("displayGold").innerHTML = event;
});
socket.emit("register", "JSUser");

/**function clickGold(){
    socket.emit("clickGold");
} **/



