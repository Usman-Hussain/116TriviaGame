from flask import Flask, request, send_from_directory
from flask_socketio import SocketIO

app = Flask(__name__)
socket_server = SocketIO(app)
sidToUsername = {}
points = {}


@socket_server.on('register')
def register(username):
    sidToUsername[request.sid] = username
    if username not in points:
        points[username] = 0
    socket_server.emit("message", str(username), room=request.sid)
    print(username + " connected")


@socket_server.on('disconnect')
def disconnect():
    if request.sid in sidToUsername:
        username = sidToUsername[request.sid]
    del sidToUsername[request.sid]
    print(username+"disconnected")


@app.route('/game', methods=["POST"])
def game():
    username = request.form.get('username')
    if username not in points:
        points[username] = 0
    socket_server.emit("message", str(username), room=request.sid)
    print(username+"connected")


@app.route('/')
def index():
    return send_from_directory('html', '1st Page.html')


@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('html', filename)


print("Listening on port 8080")
socket_server.run(app, port=8080)
print(sidToUsername[request.sid])
