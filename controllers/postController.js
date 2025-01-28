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


// Create a new post 
const createPost = async (req, res) => {
  const { title, sub_title, description } = req.body;

  let validationErrors = {};
  // Validate title
  if (!title) {
    validationErrors.title = 'Title field is required';
  } else if (title.length < 3 || title.length > 50) {
    validationErrors.title = 'Title must be between 3 and 50 characters';
  }

  // Validate sub_title
  if (!sub_title) {
    validationErrors.sub_title = 'Sub Title is required';
  }

  // Validate description
  if (!description) {
    validationErrors.description = 'Description field is required';
  }

  // If there are validation errors, return them
  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    const result = await postModel.createPost(title, sub_title, description);
    res.status(201).json({ id: result.insertId, title, sub_title, description });
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(500).json({ error: error.message });
  }
};





// Update an existing post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, sub_title, description } = req.body;

  if (!title || !sub_title || !description) {
    return res.status(400).json({ error: 'title, sub_title, description are required' });
  }

  // Optional: validate title length
  if (title.length < 3 || title.length > 50) {
    return res.status(400).json({ error: 'title must be between 3 and 50 characters' });
  }

  try {
    // Use the post model to update the post
    const result = await postModel.updatePost(id, title, sub_title, description);
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
