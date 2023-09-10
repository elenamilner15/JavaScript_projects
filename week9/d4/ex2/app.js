const express = require('express');
const app = express();
const port = 3000;

// Import the router module
const todoRouter = require('./routes/todos');

// Middleware to parse JSON requests
app.use(express.json());

// Mount the router at the base path
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
