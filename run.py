# import app from templates/__init__.py
from templates import app

app.config.from_object('configurations.DevelopmentConfig')
app.run()
