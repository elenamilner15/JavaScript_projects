const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];

// Route to get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Route to add a new to-do item
router.post('/', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Route to update a to-do item by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const todo = todos.find((t) => t.id === Number(id));

    if (!todo) {
        return res.status(404).json({ message: 'To-do item not found' });
    }

    todo.title = title;
    res.json(todo);
});

// Route to delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((t) => t.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ message: 'To-do item not found' });
    }

    todos.splice(index, 1);
    res.json({ message: 'To-do item deleted successfully' });
});

module.exports = router;
