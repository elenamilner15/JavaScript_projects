const express = require('express');
const router = express.Router();

// Sample trivia quiz questions and answers (hard-coded)
const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

let currentQuestionIndex = 0; // Track the current question index
let userScore = 0; // Track the user's score

// GET /quiz: Start the quiz and display the first question
router.get('/', (req, res) => {
    if (currentQuestionIndex >= triviaQuestions.length) {
        // The quiz is over
        return res.send('Quiz is already over. Check your score.');
    }

    const currentQuestion = triviaQuestions[currentQuestionIndex];
    res.json({ question: currentQuestion.question });
});

// POST /quiz: Submit an answer to the current question and move to the next question
router.post('/', (req, res) => {
    if (currentQuestionIndex >= triviaQuestions.length) {
        // The quiz is over
        return res.send('Quiz is already over. Check your score.');
    }

    const currentQuestion = triviaQuestions[currentQuestionIndex];
    const userAnswer = req.body.answer;

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        // Correct answer
        userScore++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= triviaQuestions.length) {
        // No more questions, quiz is over
        return res.send('Quiz is over. Check your score.');
    }

    const nextQuestion = triviaQuestions[currentQuestionIndex];
    res.json({ question: nextQuestion.question });
});

// GET /quiz/score: Display the user's final score
router.get('/score', (req, res) => {
    res.json({ score: userScore });
});

module.exports = router;
