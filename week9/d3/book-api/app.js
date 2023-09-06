const express = require('express');
const app = express();
const port = 5000;

//array of books
const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 2013 },
    { id: 2, title: 'The Grapes of Wrath', author: 'John Steinbeck', publishedYear: 2015 },
    { id: 3, title: 'Harry Potter and the Philosopher Stone', author: 'J. K. Rowling', publishedYear: 2018 },

];

// Middleware to parse JSON request body
app.use(express.json());

// “Read all” - GET /api/books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:id
app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((b) => b.id === bookId);
    if (!book) {
        res.status(404).json({ message: 'Book not found' });
    } else {
        res.json(book);
    }
});

// POST /api/books
app.post('/api/books', (req, res) => {
    const newBook = req.body;
    // Generate a unique ID
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



