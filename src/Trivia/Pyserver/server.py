from flask import Flask, request, send_from_directory
from flask_socketio import SocketIO

app = Flask(__name__)
socket_server = SocketIO(app)
sidToUsername = {}
points = {}

@app.route('/')
def index():
    return send_from_directory('.', '1st Page.html')


@app.route('/game', methods=["POST"])
def game():
    username = request.form.get('username')
    if username not in points:
        points[username] = 0
    return send_from_directory('messege', 'game.js')


@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)



print("Listening on port 8080")
socket_server.run(app, port=8080)
