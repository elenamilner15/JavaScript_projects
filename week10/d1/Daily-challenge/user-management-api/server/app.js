const express = require('express');
const bodyParser = require('body-parser');
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.development); // Use the 'development' configuration
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.json());

// POST /register: 
app.post('/register', async (req, res) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;

        // Check if the email field is included in the request body
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Hash the password using Bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user data into the 'users' table
        await knex('users').insert({ email, username, first_name, last_name, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /login: 
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Retrieve user data from the 'users' table
        const user = await knex('users').where({ username }).first();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /users: 
app.get('/users', async (req, res) => {
    try {
        const users = await knex('users').select('*');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /users/:id:
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await knex('users').where({ id }).first();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT /users/:id
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email, username, first_name, last_name, password } = req.body;
        const updateData = {};

        if (email) {
            updateData.email = email;
        }
        if (username) {
            updateData.username = username;
        }
        if (first_name) {
            updateData.first_name = first_name;
        }
        if (last_name) {
            updateData.last_name = last_name;
        }
        if (password) {
            updateData.password = password;
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        // Update the user's data in the 'users' table
        await knex('users').where({ id }).update(updateData);

        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
