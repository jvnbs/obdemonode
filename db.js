// db.js
const mysql = require('mysql');
require('dotenv').config(); // Load environment variables from .env file

// Create a MySQL connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // From .env file
  user: process.env.DB_USER,       // From .env file
  password: process.env.DB_PASSWORD, // From .env file
  database: process.env.DB_NAME,   // From .env file
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
