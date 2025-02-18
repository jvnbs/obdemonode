const pool = require('../config/db');

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

const createPost = async (title, sub_title, description) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO blogs (title, sub_title, description, image) VALUES (?, ?, ?, ?)',
      [title, sub_title, description, 'ddd']
    );
    return result; 

  } catch (error) {
    console.error('Error creating new blog post:', error.message);
    throw new Error('Error creating new blog post');
  }
};


// Update an existing post
const updatePost = async (id, title, sub_title, description) => {
  try {
    // Perform the update operation
    const [result] = await pool.query('UPDATE blogs SET title = ?, sub_title = ?, description = ? WHERE id = ?', [title, sub_title, description, id]);
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
