import sqlite3
from flask import current_app

# Establishing an object to connect to our sql db, if doesn't exist create
conn = sqlite3.connect('dogs.db')
# Cursor allows us to run sql commands
c = conn.cursor()

# Create table via schema.sql file
def init_db():
    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

def insert_dog(dog):
    with conn:
        c.execute("INSERT INTO dogs VALUES {:name, :image, :score}", {'name': dog.name, 'image': dog.image,'score': dog.score})

def select_dog():
    with conn:
        c.execute("SELECT * FROM dogs")
        print(c.fetchall())

conn.close()

### OLD CODE FROM FLASK TUTORIAL ###

# from flask import current_app, g
# def get_db():
#     if 'db' not in g:
#         g.db = sqlite3.connect(
#             current_app.config['DATABASE'],
#             detect_types=sqlite3.PARSE_DECLTYPES
#         )
#         g.db.row_factory = sqlite3.Row

#     return g.db

# # Starting a new database using our schema each time this is called
# def init_db():
#     db = get_db()
#     # With app open and read schema file
#     with current_app.open_resource('./database/schema.sql') as f:
#         db.executescript(f.read().decode('utf8'))