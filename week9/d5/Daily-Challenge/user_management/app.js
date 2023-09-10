const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const app = express();
const port = 8000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JSON file path
const usersFilePath = path.join(__dirname, 'users.json');
// static files 
app.use(express.static(path.join(__dirname, 'public')));

// Read users from the JSON file
const readUsers = async () => {
    try {
        const usersData = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(usersData);
    } catch (err) {
        return [];
    }
};

// Write users to the JSON file
const writeUsers = async (users) => {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

// GET
app.get('/users', async (req, res) => {
    const users = await readUsers();
    res.json(users);
});

// POST /register:
app.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;

    const users = await readUsers();

    // Check if the username or email already exist
    const existingUser = users.find(
        (user) => user.username === username || user.email === email
    );

    if (existingUser) {
        return res.status(400).send('Username or email already exists');
    }

    // Hash the password
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
            return res.status(500).send('Error hashing password');
        }

        const newUser = {
            id: users.length + 1,
            name,
            lastName,
            email,
            username,
            password: hash,
        };

        users.push(newUser);

        await writeUsers(users);

        res.status(201).send('Hello! Your account is now created!');
    });
});

// POST /login:
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const users = await readUsers();

    const user = users.find((u) => u.username === username);

    if (!user) {
        return res.status(401).send('Username is not registered');
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(500).send('Error comparing passwords');
        }

        if (!result) {
            return res.status(401).send('Incorrect password');
        }

        res.send(`Hi, ${username}, welcome back again!`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
