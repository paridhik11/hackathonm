document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-maths');
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const nextButton = document.getElementById('next-question-btn');

    // Class 11-12 JEE Mathematics Questions
    const quizData = [
        {
            question: "If A = {1, 2, 3} and B = {4, 5}, how many relations are possible from A to B?",
            options: ["16", "32", "64", "8"],
            answer: 1
        },
        {
            question: "What is the derivative of sin(x)?",
            options: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
            answer: 0
        },
        {
            question: "What is the value of ∫0 to π/2 sin²(x) dx?",
            options: ["π/2", "π/4", "1/2", "1/4"],
            answer: 1
        },
        {
            question: "The value of log₃27 is:",
            options: ["1", "2", "3", "4"],
            answer: 2
        },
        {
            question: "What is the solution of the equation |x - 3| = 7?",
            options: ["10", "3", "-4 and 10", "0"],
            answer: 2
        },
        {
            question: "If the roots of ax² + bx + c = 0 are equal, then the discriminant is:",
            options: ["b² - 4ac > 0", "b² - 4ac = 0", "b² - 4ac < 0", "b² - 2ac = 0"],
            answer: 1
        },
        {
            question: "The sum of the first n terms of an arithmetic progression is given by:",
            options: ["n/2(a + l)", "n/2(2a + (n - 1)d)", "a + (n - 1)d", "None of these"],
            answer: 1
        },
        {
            question: "The general solution of sin(x) = 0 is:",
            options: ["x = nπ", "x = nπ/2", "x = (2n + 1)π", "x = 2nπ"],
            answer: 0
        },
        {
            question: "If A is a square matrix, which of the following is always true?",
            options: ["A is invertible", "Det(A) = 0", "AA⁻¹ = I", "None of these"],
            answer: 2
        },
        {
            question: "The area of a triangle with vertices (0, 0), (a, 0), and (0, b) is:",
            options: ["ab", "ab/2", "2ab", "a² + b²"],
            answer: 1
        },
        {
            question: "If f(x) = x² + 3x + 5, then f'(x) is:",
            options: ["2x + 3", "2x + 5", "3x + 2", "x² + 3"],
            answer: 0
        },
        {
            question: "What is the value of cos²(θ) + sin²(θ)?",
            options: ["0", "1", "2", "Depends on θ"],
            answer: 1
        },
        {
            question: "The slope of the line 3x - 4y + 7 = 0 is:",
            options: ["3/4", "-3/4", "4/3", "-4/3"],
            answer: 1
        },
        {
            question: "The value of (1 + i)⁴, where i = √(-1), is:",
            options: ["4", "-4", "2i", "0"],
            answer: 1
        },
        {
            question: "The length of the latus rectum of the parabola y² = 4ax is:",
            options: ["a", "2a", "4a", "8a"],
            answer: 2
        },
        {
            question: "The number of solutions of sin(x) = 1/2 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            answer: 1
        },
        {
            question: "The solution of the differential equation dy/dx = y is:",
            options: ["y = e^x", "y = Ce^x", "y = ln(x)", "y = x²"],
            answer: 1
        },
        {
            question: "The probability of getting a sum of 7 when two dice are thrown is:",
            options: ["1/6", "1/12", "1/9", "5/36"],
            answer: 3
        },
        {
            question: "If z = x + iy is a complex number, then |z| is equal to:",
            options: ["x + y", "√(x² + y²)", "x² + y²", "None of these"],
            answer: 1
        },
        {
            question: "What is the equation of a circle with center (0, 0) and radius 3?",
            options: ["x² + y² = 3", "x² + y² = 9", "x² + y² - 9 = 0", "Both 2 and 3"],
            answer: 3
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

        // Style adjustments for larger font size for questions
        quizQuestion.style.fontSize = '40px';  // Increased font size for questions
        quizOptions.style.fontSize = '25px';  // Font size for options remains large

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
