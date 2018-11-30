from flask import Flask

#Loading static files(at the same root, which where the run.py level is)
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Flask'

if __name__ == '__main__':
    app.run(debug=True)