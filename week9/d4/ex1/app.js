const express = require('express');
const app = express();
const port = 8000;

// Import the router module
const router = require('./routes/index');

// Mount the router at the base path
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
