const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 3001;


app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.post('/proxy', async (req, res) => {
    try {
        // Forward the POST request to the external API
        const response = await axios.post("https://webhook.site/c23d5d2c-5338-435e-8daf-ff1eac36bca7", req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
