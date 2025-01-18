document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-chemistry');
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const nextButton = document.getElementById('next-question-btn');

    // Class 11-12 JEE Chemistry Questions
    const quizData = [
        {
            question: "Which of the following is a strong acid?",
            options: ["HCl", "CH3COOH", "H2CO3", "H2SO4"],
            answer: 0
        },
        {
            question: "What is the molecular formula of benzene?",
            options: ["C6H6", "C6H12", "C5H12", "C7H7"],
            answer: 0
        },
        {
            question: "What is the pH of pure water at 25°C?",
            options: ["7", "0", "14", "3"],
            answer: 0
        },
        {
            question: "Which of the following is an example of a non-metallic element?",
            options: ["Iron", "Oxygen", "Magnesium", "Calcium"],
            answer: 1
        },
        {
            question: "What is the molar mass of H2O?",
            options: ["18 g/mol", "16 g/mol", "20 g/mol", "22 g/mol"],
            answer: 0
        },
        {
            question: "What is the oxidation state of chlorine in NaClO3?",
            options: ["+1", "+3", "-1", "0"],
            answer: 1
        },
        {
            question: "Which of the following elements belongs to the noble gases?",
            options: ["Oxygen", "Hydrogen", "Neon", "Nitrogen"],
            answer: 2
        },
        {
            question: "Which compound is used in bleaching powder?",
            options: ["NaOH", "CaOCl2", "NaCl", "KCl"],
            answer: 1
        },
        {
            question: "Which of the following is a covalent compound?",
            options: ["NaCl", "MgO", "H2O", "CaCl2"],
            answer: 2
        },
        {
            question: "Which of the following has the highest boiling point?",
            options: ["Water", "Methane", "Ammonia", "Chlorine"],
            answer: 0
        },
        {
            question: "Which gas is liberated when zinc reacts with dilute hydrochloric acid?",
            options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
            answer: 0
        },
        {
            question: "What is the chemical formula of sulphuric acid?",
            options: ["H2SO4", "H2SO3", "HCl", "HNO3"],
            answer: 0
        },
        {
            question: "Which of the following is an example of a physical change?",
            options: ["Burning paper", "Melting ice", "Rusting iron", "Burning of wood"],
            answer: 1
        },
        {
            question: "The atomic number of carbon is:",
            options: ["6", "7", "8", "10"],
            answer: 0
        },
        {
            question: "Which of the following has the least electronegativity?",
            options: ["Fluorine", "Oxygen", "Carbon", "Sodium"],
            answer: 3
        },
        {
            question: "What is the product of the reaction of sodium with water?",
            options: ["NaOH and H2", "NaOH and O2", "NaCl and H2", "Na and O2"],
            answer: 0
        },
        {
            question: "The boiling point of water is:",
            options: ["100°C", "50°C", "0°C", "200°C"],
            answer: 0
        },
        {
            question: "Which element is known for its ability to form diamond?",
            options: ["Carbon", "Oxygen", "Nitrogen", "Sulfur"],
            answer: 0
        },
        {
            question: "What is the formula for methane?",
            options: ["CH4", "C2H6", "C3H8", "CH3"],
            answer: 0
        },
        {
            question: "The electronic configuration of chlorine (Cl) is:",
            options: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁴", "1s² 2s² 2p⁶ 3s² 3p²"],
            answer: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Start Quiz Button Click Event
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion();
    });

    // Load the Current Question
    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.innerText = currentQuestion.question;
        quizOptions.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.innerText = option;
            optionButton.classList.add('option-btn');
            optionButton.addEventListener('click', () => {
                checkAnswer(index);
            });
            quizOptions.appendChild(optionButton);
        });
    }

    // Check Answer and Move to the Next Question
    function checkAnswer(selectedIndex) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedIndex === currentQuestion.answer) {
            score++;
            alert('Correct Answer!');
        } else {
            alert('Wrong Answer!');
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            displayScore();
        }
    }

    // Display Final Score
    function displayScore() {
        quizContainer.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
    }
});
