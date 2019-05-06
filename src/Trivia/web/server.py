from flask import Flask, request, send_from_directory
from flask_socketio import SocketIO

app = Flask(__name__)
socket_server = SocketIO(app)
sidToUsername = {}
clicks = {}


@socket_server.on('register')
def register(username):
    sidToUsername[request.sid] = username
    if username not in clicks:
        clicks[username] = 0
    socket_server.emit("message", str(clicks[username]), room=request.sid)
    print(username + " connected")


@socket_server.on('disconnect')
def disconnect():
    if request.sid in sidToUsername:
        username = sidToUsername[request.sid]
    del sidToUsername[request.sid]
    print(username + " disconnected")


@app.route('/')
def index():
    return send_from_directory('.', 'game.html')


@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)


print("Listening on port 8080")
socket_server.run(app, port=8080)


