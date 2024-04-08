const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'my_database.sqlite');

// Ouvre la base de données en mode lecture/écriture
const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connexion réussie à la base de données SQLite.');
    
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER
    )`, [], (err) => {
        if (err) {
            console.error(err.message);
        }
    });
});

module.exports = db;

