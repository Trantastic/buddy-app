DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    id INTEGER AUTO_INCREMENT,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    score INTEGER NOT NULL
);