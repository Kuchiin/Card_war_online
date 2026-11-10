const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const databasePath = path.resolve(process.env.DB_PATH || './database.sqlite');
const db = new sqlite3.Database(databasePath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nick TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      wins INTEGER DEFAULT 0,
      losses INTEGER DEFAULT 0
    )
  `);
});

module.exports = db;
