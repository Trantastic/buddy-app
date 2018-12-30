#initializeds the app and imports all the views
from flask import Flask

#Loading static files
app = Flask(__name__,
    static_folder='./public',
    template_folder='./static')

from templates.landingPage.views import landingPage_blueprint

#register the blueprints
app.register_blueprint(landingPage_blueprint)