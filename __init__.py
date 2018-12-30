from flask import Flask, request
import db as dbFunctions

#Loading static files(at the same root, which where the run.py level is)
app = Flask(__name__)

<<<<<<< HEAD
# ========== route for landing page==========
# @app.route('/landingPage')
# def landing_page():
    
#====== code for testing=========
=======
>>>>>>> ae13e86f71a4059f4fa48ce7d391f0c84450cb1d
@app.route('/start')
def startDb():
    # Testing if db.init works
    dbFunctions.init_db()
    return 'Starting DB/Table'

@app.route('/add')
def addDog():
    # Testing if insert works
    dbFunctions.insert_dog(1, 'Max', 'N/A', 12)
<<<<<<< HEAD
    return 'Add a dog'

@app.route('/select')
def select_dog():
    return 'seclect a dog'
=======
    return "Add a dog"

@app.route('/select')
def selectDog():
    print(dbFunctions.select_dog())
    return "hello"
>>>>>>> ae13e86f71a4059f4fa48ce7d391f0c84450cb1d

if __name__ == '__main__':
    app.run(debug=True)