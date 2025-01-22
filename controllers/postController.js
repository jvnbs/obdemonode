const postModel = require('../models/postModel');

// Get all posts from the database
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    if (posts.length === 0) {
      return res.status(404).json({ message: 'No blogs found' });
    }
    res.json(posts); // Return the list of posts
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch a single post by its ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.getPostById(id);
    if (!post) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(post); // Return the post data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new post (insert)
const createPost = async (req, res) => {
  const { title, sub_title, description } = req.body;

  if (!title || !sub_title || !description) {
    return res.status(400).json({ error: 'title, sub_title, and description are required' });
  }

  // Validate sub_title format
  const sub_titleRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!sub_titleRegex.test(sub_title)) {
    return res.status(400).json({ error: 'Invalid sub_title format' });
  }

  // Optional: validate title length
  if (title.length < 3 || title.length > 50) {
    return res.status(400).json({ error: 'title must be between 3 and 50 characters' });
  }

  try {
    // Check if the sub_title already exists in the database
    const [existingUser] = await pool.query('SELECT * FROM blogs WHERE sub_title = ?', [sub_title]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'sub_title already in use' });
    }

    // Use the post model to create the post
    const result = await postModel.createPost(title, sub_title, description);
    res.status(201).json({ id: result.insertId, title, sub_title });
  } catch (error) {
    console.error('Error creating blog:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update an existing post
const updatePost = async (req, res) => {
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
    // Use the post model to update the post
    const result = await postModel.updatePost(id, name, email);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog updated successfully' });
  } catch (error) {
    console.error('Error updating blog:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.deletePost(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
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
