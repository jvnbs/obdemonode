// index.js or some other route file
const express = require('express');
const pool = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      if (rows.length === 0) {
        return res.status(404).json({ message: 'No users found' });
      }
      res.json(rows);
    } catch (err) {
      console.error('Database error:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// Route to add a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, name, email });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
