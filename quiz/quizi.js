// Array of questions and answers
const questions = [
    {
        question: "What is the primary crop grown in India?",
        options: ["Rice", "Wheat", "Cotton", "Sugarcane"],
        answer: "Rice"
    },
    {
        question: "What is the process of preparing soil for planting?",
        options: ["Plowing", "Irrigation", "Harvesting", "Fertilization"],
        answer: "Plowing"
    },
    {
        question: "Which of the following is a nitrogen-fixing crop?",
        options: ["Rice", "Soybean", "Cotton", "Wheat"],
        answer: "Soybean"
    },
    {
        question: "What is the term for the cultivation of crops and the rearing of animals?",
        options: ["Agriculture", "Forestry", "Fishing", "Mining"],
        answer: "Agriculture"
    },
    {
        question: "Which of these is a common method of irrigation?",
        options: ["Drip irrigation", "Windmill", "Solar panels", "Electric pumps"],
        answer: "Drip irrigation"
    },
    {
        question: "What is the purpose of crop rotation?",
        options: ["To improve soil fertility", "To increase crop yield", "To use less water", "To prevent pests"],
        answer: "To improve soil fertility"
    },
    {
        question: "Which of these animals is used for plowing in rural areas?",
        options: ["Horse", "Cow", "Elephant", "Dog"],
        answer: "Cow"
    },
    {
        question: "What is the best time to sow wheat in India?",
        options: ["Summer", "Monsoon", "Winter", "Spring"],
        answer: "Winter"
    },
    {
        question: "Which crop is known as the 'king of fruits' in India?",
        options: ["Mango", "Apple", "Banana", "Papaya"],
        answer: "Mango"
    },
    {
        question: "What is the primary nutrient required by plants for growth?",
        options: ["Water", "Nitrogen", "Iron", "Zinc"],
        answer: "Nitrogen"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Load the current question
function loadQuestion() {
    const questionElement = document.getElementById("quiz");
    const question = questions[currentQuestionIndex];

    questionElement.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}" /> ${option}
            </label>
        `).join('')}
    `;
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Next question logic
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    } else {
        alert("Please select an answer");
    }
}

// Show the score at the end
function showScore() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Complete</h2><p>Your Score: ${score} / 10</p><button onclick="restartQuiz()"><a href="../index.html">Next</a></button>`;
}

// Restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
}

loadQuestion();
