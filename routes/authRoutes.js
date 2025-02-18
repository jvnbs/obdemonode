const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('../config/db');
const bcrypt = require('bcrypt');
require('dotenv').config();



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const validationErrors = {};

    const trimmedEmail = email ? email.trim() : '';
    if (!trimmedEmail) {
        validationErrors.email = 'Email field is required';
    } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
        validationErrors.email = 'Please provide a valid email address';
    }

    const trimmedPassword = password.trim();
    if (!trimmedPassword) {
        validationErrors.password = 'Password field is required';
    } else if (trimmedPassword.length < 6) {
        validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
        return res.status(400).json({ status: 'error', message: 'Validation failed', errors: validationErrors });
    }

    try {
        const [result] = await connection.query('SELECT * FROM admins WHERE LOWER(email) = LOWER(?)', [trimmedEmail]);

        if (result.length === 0) {
            return res.status(401).json({ status: 'error', message: 'Email is incorrect. Please try again.' });
        }

        const user = result[0];

        console.log('Entered Password:', trimmedPassword);
        console.log('Stored Password (Hash):', user.password);

        const passwordMatch = await bcrypt.compare(trimmedPassword, user.password);

        console.log('Password Match:', passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ status: 'error', message: 'Email or password is incorrect. Please try again.' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        console.log(token);
        

        res.json({
            status: 'success',
            message: 'Welcome back! You have successfully logged in.',
            data: { token, user }
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ status: 'error', message: 'Something went wrong on our end. Please try again later.' });
    }
});

router.post('/logout', (req, res) => {
    try {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(403).json({ status: 'error', message: 'No token provided.' });
        }

        const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;
        const decoded = jwt.decode(tokenWithoutBearer);

        if (!decoded) {
            return res.status(400).json({ status: 'error', message: 'Invalid token.' });
        }

        res.status(200).json({ status: 'success', message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ status: 'error', message: 'Something went wrong. Please try again later.' });
    }
});



module.exports = router;
