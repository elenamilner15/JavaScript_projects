const express = require('express');
const app = express();
const port = 8000; // can use any port

// Middleware to parse JSON requests
app.use(express.json());

// data array (initially empty)
const data = [];

//GET /api/posts
app.get('/posts', (req, res) => {
    // Return a list of all blog posts
    res.json(data);
});

//GET /api/posts/:id
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const post = data.find((post) => post.id === postId);
    if (!post) {
        res.status(404).json({ error: 'Post not found' });
    } else {
        res.json(post);
    }
});

app.post('/posts', (req, res) => {
    // new blog post
    const newPost = req.body;
    newPost.id = Date.now().toString(); // Generate a unique ID
    data.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;
    const existingPost = data.find((post) => post.id === postId);

    if (!existingPost) {
        res.status(404).json({ error: 'Post not found' });
    } else {
        // Update the existing post
        Object.assign(existingPost, updatedPost);
        res.json(existingPost);
    }
});

app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const index = data.findIndex((post) => post.id === postId);

    if (index === -1) {
        res.status(404).json({ error: 'Post not found' });
    } else {
        // Remove the post from the array
        data.splice(index, 1);
        res.json({ message: 'Post deleted successfully' });
    }
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start the Express app and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});