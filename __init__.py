from flask import Flask, request
import db as db

#Loading static files(at the same root, which where the run.py level is)
app = Flask(__name__)


@app.route('/')
@app.route('/landingPage')
def landing_page():
    # Testing if db.init works
    # db.init_db()
    # Testing if insert works
    # db.insert_dog(dogs('Max', 'N/A', 12))
    # db.select_dog()
	return 'Hello from Flask'

if __name__ == '__main__':
    app.run(debug=True)