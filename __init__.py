from flask import Flask
import db as dbFunctions

#Loading static files(at the same root, which where the run.py level is)
app = Flask(__name__)

@app.route('/')
def hello_world():
    dog = dbFunctions.select_dog()
    print(dog)
    print('test')
    return 'Hello from Flask'

@app.route('/start')
def startDb():
    # Testing if db.init works
    dbFunctions.init_db()
    return 'Starting DB/Table'

@app.route('/add')
def addDog():
    # Testing if insert works
    dbFunctions.insert_dog(1, 'Max', 'N/A', 12)
    return("Add a dog")

@app.route('/select')
def select_dog():
    

if __name__ == '__main__':
    app.run(debug=True)