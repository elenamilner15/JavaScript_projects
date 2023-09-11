const express = require('express');
const router = express.Router();

// Sample book data
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2001 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2002 },
    { id: 2, title: 'Book 3', author: 'Author 3', publishedYear: 2003 },
    { id: 2, title: 'Book 4', author: 'Author 4', publishedYear: 2004 },
    { id: 2, title: 'Book 5', author: 'Author 5', publishedYear: 2005 },

];

// Get
router.get('/', (req, res) => {
    res.json(books);
});

// Get /:ID
router.get('/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((b) => b.id === bookId);
    if (!book) {
        res.status(404).json({ error: 'Book not found' });
    } else {
        res.json(book);
    }
});

// Post
router.post('/', (req, res) => {
    const { title, author, publishedYear } = req.body;


    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: 'provide title, author, and publishedYear' });
    }


    const newBookId = books.length + 1;

    const newBook = {
        id: newBookId,
        title,
        author,
        publishedYear,
    };


    books.push(newBook);

    res.status(201).json(newBook);
});


module.exports = router;
