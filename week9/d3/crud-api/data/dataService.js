const axios = require('axios');

// fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = { fetchPosts };
