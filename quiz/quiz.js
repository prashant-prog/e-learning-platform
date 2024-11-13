const questions = [
    {
        question: "What is budgeting?",
        options: ["Saving money", "Tracking income and expenses", "Investing in the stock market", "Opening a savings account"],
        answer: "Tracking income and expenses"
    },
    {
        question: "What is compound interest?",
        options: ["Interest on the original principal only", "Interest on both the principal and accumulated interest", "A one-time interest rate", "The interest on loan principal"],
        answer: "Interest on both the principal and accumulated interest"
    },
    {
        question: "What is a credit score?",
        options: ["A score that determines your ability to repay debt", "A score given to new loan applicants", "A measure of your savings", "A measure of your net worth"],
        answer: "A score that determines your ability to repay debt"
    },
    {
        question: "What does 'APR' stand for?",
        options: ["Annual Payment Rate", "Annual Percentage Rate", "Annual Profit Rate", "Asset Percentage Rate"],
        answer: "Annual Percentage Rate"
    },
    {
        question: "What is an emergency fund?",
        options: ["Money saved for regular expenses", "Money set aside for unexpected expenses", "Money invested in stocks", "Money lent to friends or family"],
        answer: "Money set aside for unexpected expenses"
    },
    {
        question: "Which of these is considered an asset?",
        options: ["A car loan", "A credit card balance", "A savings account", "Student loans"],
        answer: "A savings account"
    },
    {
        question: "What is diversification in investing?",
        options: ["Investing in a single stock", "Investing in various types of assets to reduce risk", "Keeping all money in a savings account", "Buying high-risk stocks"],
        answer: "Investing in various types of assets to reduce risk"
    },
    {
        question: "What is a 401(k)?",
        options: ["A type of credit card", "A retirement savings account", "A personal loan", "An investment in the stock market"],
        answer: "A retirement savings account"
    },
    {
        question: "What is the purpose of insurance?",
        options: ["To invest money", "To protect against financial loss", "To increase income", "To pay off debt"],
        answer: "To protect against financial loss"
    },
    {
        question: "What is a debit card?",
        options: ["A card that allows borrowing money", "A card linked to your savings or checking account", "A card with rewards points", "A card for paying bills only"],
        answer: "A card linked to your savings or checking account"
    },
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
