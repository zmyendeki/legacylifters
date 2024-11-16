// server.js
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
// Middleware
app.use(express.json()); // Parse JSON bodies

// PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Sign up route
app.post('/api/signup', async (req, res) => {
    const { name, surname, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Check if the user already exists
        const existingUser = await pool.query('SELECT * FROM users WHERE LOWER(email) = LOWER($1)', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Insert new user into the database
        const result = await pool.query(
            'INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, surname, email, hashedPassword]
        );

        res.status(201).json({ message: 'User created', user: result.rows[0] });
    } catch (error) {
        console.error('Error during signup:', error); // Log the error for debugging
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Sign in route
app.post('/api/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const userResult = await pool.query('SELECT * FROM users WHERE LOWER(email) = LOWER($1)', [email]);
        const user = userResult.rows[0];

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Successful sign-in
        res.status(200).json({ message: 'Sign in successful', user: { id: user.id, name: user.name, surname: user.surname, email: user.email } });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
