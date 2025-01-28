// authRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Simple user data (In a real app, you would fetch this from a database)
const staffs = [
    { 'id' : 1, name: 'demo', email: 'demo@gmail.com', password: 'System@123' }
];

// Login route to generate a JWT token
router.post('/', (req, res) => {
    const { name, password } = req.body;
    const user = staffs.find(u => u.name === name && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
