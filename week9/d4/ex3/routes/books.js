const express = require('express');
const router = express.Router();


const books = [];

// GET all
router.get('/', (req, res) => {
    res.json(books);
});

// POST
router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT (update)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
        res.status(404).json({ message: 'Book not found' });
    } else {
        books[bookIndex] = { id, title, author };
        res.json(books[bookIndex]);
    }
});

// DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
        res.status(404).json({ message: 'Book not found' });
    } else {
        const deletedBook = books.splice(bookIndex, 1)[0];
        res.json(deletedBook);
    }
});

module.exports = router;
