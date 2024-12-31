const mysql = require('mysql2/promise');

// Create a pool of MySQL connections
const pool = mysql.createPool({
  host: 'localhost',      // MySQL server address
  user: 'root',           // Username to connect to MySQL
  password: '',           // Password for the MySQL user (leave empty if none)
  database: 'jvnbs',      // The database name you're connecting to
});

// Export the pool to be used in other files
module.exports = pool;
