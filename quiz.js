

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-quiz-btn');
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const nextButton = document.getElementById('next-question-btn');

    // Sample Questions for the Quiz
    const quizData = [
        {
            question: "What is the speed of light?",
            options: ["3x10^8 m/s", "1x10^8 m/s", "5x10^7 m/s", "1x10^6 m/s"],
            answer: 0
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Language", "None of the above"],
            answer: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Start Quiz Button Click Event
    startButton.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
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
