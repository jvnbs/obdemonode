const jwt = require('jsonwebtoken');

// Authentication Middleware for protecting routes
const isAuthenticated = (req, res, next) => {
    // Check if token is provided in the Authorization header
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    // Remove 'Bearer ' prefix if it exists
    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

    // Verify the token
    jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        // If the token is valid, store user info in request and proceed
        req.user = decoded;  // Add decoded user info (e.g., userId) to request object
        next();
    });
};

module.exports = isAuthenticated;
