const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

// Routes
const postsRoutes = require('./server/routes/posts');
app.use('/api', postsRoutes);

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handling for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
