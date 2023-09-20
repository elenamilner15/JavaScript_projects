const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());


app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello From Express' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



//Part2
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    const { value } = req.body;
    console.log('Received data from client:', value);
    res.json({ message: `I received your POST request. This is what you sent me: ${value}` });
});