const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const isAuthenticated = require('../middleware/authMiddleware');

// Route to blogs
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', isAuthenticated, postController.createPost);
router.put('/:id', isAuthenticated, postController.updatePost);
router.delete('/:id', isAuthenticated, postController.deletePost);

module.exports = router;
