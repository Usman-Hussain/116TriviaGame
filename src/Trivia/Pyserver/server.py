from flask import Flask, request, send_from_directory
from flask_socketio import SocketIO

app = Flask(__name__)
socket_server = SocketIO(app)
sidToUsername = {}

@socket_server.on('register')
def register(username):
    if request.sid not in sidToUsername:
        sidToUsername[request.sid] = username
    socket_server.emit("message", str(sidToUsername[username]), room=request.sid)
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
