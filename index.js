const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const pool = require('./models/db');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// Set EJS as the view engine
app.set('view engine', 'ejs');
// app.set('views', 'views');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layouts/main');

app.use(express.json());

// Mount Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Render user page with user data
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    console.log(rows);
    if (rows.length === 0) {
      return res.render('users', { users: [] });
    }
    res.render('users', { users: rows });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});



// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
