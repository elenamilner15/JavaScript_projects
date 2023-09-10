const express = require('express');
const router = express.Router();

// route handler for the root URL ("/")
router.get('/', (req, res) => {
    res.send('Hello, World!');
});
// route handler for the "/about" route
router.get('/about', (req, res) => {
    res.send('Welcome to the About Us page!');
});
module.exports = router;
