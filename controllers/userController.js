const pool = require('../models/db');

// Get all users from the database
const getAllUsers = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users');  // Query database
      console.log(rows);
      res.json(rows);  // Send the result to the client
    } catch (err) {
      res.status(500).json({ error: err.message });  // Handle errors
    }
  };

// Fetch Single User by ID (SELECT)
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create New User (INSERT)
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User (UPDATE)
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const [result] = pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User (DELETE)
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = pool.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
