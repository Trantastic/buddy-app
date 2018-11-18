from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Wytftfytforld!"
    
@app.route("/math")
def math():
    return "1+1"