const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router for quiz
const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
