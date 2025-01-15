const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const staffRoutes = require('./routes/staffRoutes');
const postRoutes = require('./routes/postRoutes');
const productRoutes = require('./routes/productRoutes');
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

app.use('/api/users', userRoutes);
app.use('/api/staffs', staffRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/products', productRoutes);


// Render user page with user data
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users LIMIT 5');
    console.log(rows);
    if (rows.length === 0) {
      return res.render('users', { users: [] });
    }
    res.render('dashboard', { users: rows });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/users', async (req, res) => {
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


app.get('/staffs', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM admins');
    console.log(rows);
    if (rows.length === 0) {
      return res.render('staffs', { staffs: [] });
    }
    res.render('staffs', { staffs: rows });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/products', async (req, res) => {
  try {
    // Fetch data from the API endpoint
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json(); // Parse the JSON response

    // Log the fetched data
    console.log('Products:', data);

    // Check if data is empty
    if (data.length === 0) {
      return res.render('products', { products: [] });
    }

    // Render the EJS view with the fetched data
    res.render('products', { products: data });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).send('Internal Server Error');
  }
});



// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
