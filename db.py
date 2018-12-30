import sqlite3

# Establishing an object to connect to our sql db, if doesn't exist create
# conn = sqlite3.connect('dogs.db')
# Cursor allows us to run sql commands
# c = conn.cursor()

# Create table via schema.sql file
def init_db():
	# Starts the connection 
	conn = sqlite3.connect('dogs.db')
	c = conn.cursor()

	# Read the schema file and use that to create the table
	with open('schema.sql') as fp:
		c.executescript(fp.read())
	# Closes the connection to the db
	conn.close()

# Insert a dog into sql db
def insert_dog(id, name, image, score):
	conn = sqlite3.connect('dogs.db')
	c = conn.cursor()

	sql = 'INSERT INTO dogs (id, name, image, score) VALUES (?, ?, ?, ?)'
	
	# c.execute("INSERT INTO dogs VALUES {:id, :name, :image, :score}", {'id': id, 'name': name, 'image': image,'score': score})
	c.execute(sql, (id, name, image, score))

	conn.commit()

	conn.close()

# Select a dog from sql db to display
def select_dog():
	conn = sqlite3.connect('dogs.db')
	c = conn.cursor()
	
	c.execute("SELECT * FROM dogs")
	return c.fetchall()

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