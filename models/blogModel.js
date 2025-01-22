const pool = require('../config/db'); 
const bcrypt = require('bcrypt');

// Get all posts from the database
const getAllPosts = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs');
    return rows; // Return the result
  } catch (error) {
    throw new Error('Error fetching blogs');
  }
};

// Get a single post by its ID
const getPostById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs WHERE id = ?', [id]);
    return rows.length ? rows[0] : null; // Return post or null if not found
  } catch (error) {
    throw new Error('Error fetching blog by ID');
  }
};

// Create a new post (insert)
const createPost = async (name, email, password) => {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO blogs (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    return result; // Return the result of the insert operation
  } catch (error) {
    throw new Error('Error creating new blog post');
  }
};

// Update an existing post
const updatePost = async (id, name, email) => {
  try {
    // Perform the update operation
    const [result] = await pool.query('UPDATE blogs SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return result; // Return the result of the update
  } catch (error) {
    throw new Error('Error updating blog post');
  }
};

// Delete a post
const deletePost = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM blogs WHERE id = ?', [id]);
    return result; // Return the result of the delete
  } catch (error) {
    throw new Error('Error deleting blog post');
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
