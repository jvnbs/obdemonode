const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const staffRoutes = require('./routes/staffRoutes');
const postRoutes = require('./routes/postRoutes');
const productRoutes = require('./routes/productRoutes');
const isAuthenticated = require('./middleware/authMiddleware');
const isValid = require('./middleware/isValid');


const pool = require('./models/db');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layouts/main');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', isAuthenticated, userRoutes);
app.use('/api/staffs', isAuthenticated, isValid, staffRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', productRoutes);


// Render user page with user data
app.get('/', async (req, res) => {
  try {
    res.render('login', { layout: false });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


// Render user page with user data
app.get('/dashboard', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users LIMIT 5');
    console.log(rows);
    if (rows.length === 0) {
      return res.render('dashboard', { users: [] });
    }
    res.render('dashboard', { users: rows });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/users', isAuthenticated, async (req, res) => {
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


app.get('/staffs', isAuthenticated, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM admins');
    console.log(rows);
    if (rows.length === 0) {
      return res.render('staffs', { results: [] });
    }
    res.render('staffs', { results: rows });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});



app.get('/posts', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    const data = await response.json(); 
    console.log(data);
    if (!Array.isArray(data) || data.length === 0) {
      return res.render('posts', { results: [] });
    }
    res.render('posts', { results: data });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/products', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json(); 
    if (data.length === 0) {
      return res.render('products', { results: [] });
    }
    res.render('products', { results: data });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/categories', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();
    if (data.length === 0) {
      return res.render('categories', { results: [] });
    }
    res.render('categories', { results: data });
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/error', (req, res) => {
  const message = req.query.message || 'An unexpected error occurred.';
  res.render('error', { message });
});



// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
