const pool = require('../models/db');

// Get all users from the database
const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.json(rows); 
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
};


// Fetch Single User by ID (SELECT)
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Create New User (INSERT)
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Optional: validate name length
  if (name.length < 3 || name.length > 50) {
    return res.status(400).json({ error: 'Name must be between 3 and 50 characters' });
  }

  try {
    // Check if the email already exists in the database
    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password before saving
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);

    // Perform the insert operation
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    console.error('Error inserting user:', error);  // Log error
    res.status(500).json({ error: error.message });
  }
};


// Update User (UPDATE)
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  // Validate input fields
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Optional: validate name length
  if (name.length < 3 || name.length > 50) {
    return res.status(400).json({ error: 'Name must be between 3 and 50 characters' });
  }

  try {
    // Check if the email already exists in the database (other than the current user's email)
    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ? AND id != ?', [email, id]);

    // If email is already taken by another user, return an error
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Perform the update operation
    const [result] = await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error); // Log error
    res.status(500).json({ error: error.message });
  }
};


// Delete User (DELETE)
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
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
