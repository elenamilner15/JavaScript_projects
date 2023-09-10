const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// JSON file path
const tasksFilePath = 'tasks.json';

// Middleware to validate task data
const validateTaskData = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    next();
};

// Read tasks from the JSON file
const readTasks = () => {
    try {
        const tasksData = fs.readFileSync(tasksFilePath, 'utf8');
        return JSON.parse(tasksData);
    } catch (err) {
        return [];
    }
};

// Write tasks to the JSON file
const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
};

// GET all
router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// GET /tasks/:id:
router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
});

// POST /tasks:
router.post('/', validateTaskData, (req, res) => {
    const { title, description } = req.body;
    const tasks = readTasks();
    const newTask = { id: uuidv4(), title, description };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// PUT /tasks/:id: Update
router.put('/:id', validateTaskData, (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex] = { id: taskId, title, description };
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id:
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const tasks = readTasks();
    const updatedTasks = tasks.filter((t) => t.id !== taskId);

    if (tasks.length === updatedTasks.length) {
        return res.status(404).json({ error: 'Task not found' });
    }

    writeTasks(updatedTasks);
    res.status(204).send();
});

module.exports = router;
