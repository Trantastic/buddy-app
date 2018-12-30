from templates import app
from flask import render_template, Blueprint

landingPage_blueprint = Blueprint('landingPage', __name__)


#listen to the urls and renders the html file
@landingPage_blueprint.route('/')
@landingPage_blueprint.route('/landingPage')
def index():
    return render_template('index.html')