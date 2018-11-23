from flask import Flask
from mysqlconnection import connectToMySQL

app = Flask(__name__)

mysql = connectToMySQL("doggo")

@app.route("/")
def hello():
    return "Hello World!"
    
