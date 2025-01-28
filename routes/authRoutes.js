const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const redis = require('redis');
require('dotenv').config();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const validationErrors = {};

    const trimmedEmail = email ? email.trim() : '';
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
        return res.status(400).json({ status: 'error', message: 'Validation failed', errors: validationErrors });
    }

    try {
        // Check if user exists in the database
        const [result] = await connection.query('SELECT * FROM admins WHERE LOWER(email) = LOWER(?)', [trimmedEmail]);

        if (result.length === 0) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
        }

        const user = result[0];

        // Verify the password using bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.json({
            status: 'success',
            message: 'Login successful',
            data: { token, user }
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});



// Logout Route (Without Redis)
router.post('/logout', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;
    const decoded = jwt.decode(tokenWithoutBearer);
    res.status(200).json({ message: 'Logged out successfully' });
});


module.exports = router;
