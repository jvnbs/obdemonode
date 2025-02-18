const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No authentication token provided. Please log in first.' });
    }

    // Remove 'Bearer ' prefix if it exists
    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

    // Verify the token
    jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Session expired or invalid token. Please log in again to continue.' });
        }

        req.user = decoded; 
        next();
    });
};

module.exports = isAuthenticated;
