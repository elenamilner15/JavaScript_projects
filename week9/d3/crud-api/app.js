const express = require('express');
const app = express();
const port = 5000;

const dataService = require('./data/dataService');

// Middleware to parse JSON request body
app.use(express.json());

// GET/posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
        console.log('Data has been successfully retrieved and sent as a response.');
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching data.' });
        console.error('Error:', error);
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
