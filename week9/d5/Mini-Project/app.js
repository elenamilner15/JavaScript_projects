const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// Import and use your task router
const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
