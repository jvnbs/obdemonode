const pool = require('../models/db');

// Get all admins from the database
const getAllStaffs = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM admins');
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No admins found' });
    }
    res.json(rows); 
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
};


// Fetch Single User by ID (SELECT)
const getStaffById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM admins WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createStaff = async (req, res) => {
  const { name, email, password } = req.body;

  let validationErrors = {};

  // Trim whitespace from inputs
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();

  // Validate name
  if (!trimmedName) {
    validationErrors.name = 'Name field is required';
  } else if (trimmedName.length < 3 || trimmedName.length > 50) {
    validationErrors.name = 'Name must be between 3 and 50 characters';
  }

  // Validate email
  if (!trimmedEmail) {
    validationErrors.email = 'Email field is required';
  } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
    validationErrors.email = 'Please provide a valid email address';
  }

  // Validate password
  if (!password) {
    validationErrors.password = 'Password field is required';
  } else if (password.length < 6) {
    validationErrors.password = 'Password must be at least 6 characters long';
  }

  // If there are validation errors, return them
  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    // Check if the email already exists in the database (case-insensitive)
    const [existingUser] = await pool.query('SELECT * FROM admins WHERE LOWER(email) = LOWER(?)', [trimmedEmail]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password before saving
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);

    // Perform the insert operation
    const [result] = await pool.query(
      'INSERT INTO admins (name, email, password) VALUES (?, ?, ?)',
      [trimmedName, trimmedEmail, hashedPassword]
    );

    res.status(201).json({ id: result.insertId, name: trimmedName, email: trimmedEmail });
  } catch (error) {
    console.error('Error inserting user:', error);  // Log error
    res.status(500).json({ error: error.message });
  }
};



// Update User (UPDATE)
const updateStaff = async (req, res) => {
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
    const [existingUser] = await pool.query('SELECT * FROM admins WHERE email = ? AND id != ?', [email, id]);

    // If email is already taken by another user, return an error
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Perform the update operation
    const [result] = await pool.query('UPDATE admins SET name = ?, email = ? WHERE id = ?', [name, email, id]);

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
const deleteStaff = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM admins WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllStaffs,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
};
