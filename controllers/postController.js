const pool = require('../models/db');

// Fetch All Posts (SELECT)
const getAllPosts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch Single Post by ID (SELECT)
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create New Post (INSERT)
const createPost = async (req, res) => {
  const { title, content, user_id } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, user_id]);
    res.status(201).json({ id: result.insertId, title, content, user_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Post (UPDATE)
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const [result] = await pool.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Post (DELETE)
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
