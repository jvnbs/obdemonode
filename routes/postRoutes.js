const express = require('express');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

// Routes
router.get('/', getAllPosts);         // Get all posts
router.get('/:id', getPostById);      // Get post by ID
router.post('/', createPost);         // Create a new post
router.put('/:id', updatePost);       // Update a post
router.delete('/:id', deletePost);    // Delete a post

module.exports = router;
