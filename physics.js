document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-physics');
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const nextButton = document.getElementById('next-question-btn');

    // Class 11-12 JEE Physics Questions
    const quizData = [
        {
            question: "What is the SI unit of universal gravitational constant (G)?",
            options: ["N·m²/kg²", "m/s²", "kg·m²/s²", "N·kg²/m²"],
            answer: 0
        },
        {
            question: "A ball is thrown vertically upward with a speed of 20 m/s. What is the maximum height it can reach? (Take g = 10 m/s²)",
            options: ["10 m", "20 m", "40 m", "50 m"],
            answer: 1
        },
        {
            question: "The motion of a planet around the sun is governed by which law?",
            options: ["Newton's First Law", "Kepler's Laws", "Newton's Second Law", "Coulomb's Law"],
            answer: 1
        },
        {
            question: "What is the dimensional formula for Planck's constant?",
            options: ["[M¹L²T⁻²]", "[M¹L²T⁻¹]", "[M¹L⁰T⁻¹]", "[M¹L⁻¹T²]"],
            answer: 1
        },
        {
            question: "A car travels in a circular path of radius 10 m at a constant speed of 5 m/s. What is its centripetal acceleration?",
            options: ["2.5 m/s²", "5 m/s²", "10 m/s²", "25 m/s²"],
            answer: 0
        },
        {
            question: "The escape velocity from Earth is approximately:",
            options: ["11.2 m/s", "1.12 km/s", "11.2 km/s", "112 km/s"],
            answer: 2
        },
        {
            question: "What is the work done in moving a charge of 2 C through a potential difference of 5 V?",
            options: ["2.5 J", "5 J", "10 J", "20 J"],
            answer: 2
        },
        {
            question: "In a Young's double-slit experiment, the fringe width is inversely proportional to:",
            options: ["Wavelength", "Slit separation", "Distance to the screen", "None of these"],
            answer: 1
        },
        {
            question: "The power of a lens with a focal length of 50 cm is:",
            options: ["+2 D", "+1 D", "-2 D", "-1 D"],
            answer: 1
        },
        {
            question: "A 2 kg object falls freely under gravity. What is its velocity after 5 seconds? (g = 10 m/s²)",
            options: ["10 m/s", "20 m/s", "30 m/s", "50 m/s"],
            answer: 3
        },
        {
            question: "What is the unit of electric flux?",
            options: ["N·m²/C", "N/C", "C/m²", "V·m"],
            answer: 0
        },
        {
            question: "A spring obeys Hooke's Law with a spring constant k. The work done in stretching it by x is:",
            options: ["kx", "kx²", "1/2 kx²", "1/2 kx"],
            answer: 2
        },
        {
            question: "The magnetic field inside a solenoid is:",
            options: ["Zero", "Non-uniform", "Directly proportional to the current", "Inversely proportional to the length"],
            answer: 2
        },
        {
            question: "The time period of a simple pendulum is directly proportional to the square root of:",
            options: ["Mass", "Length", "Gravity", "Amplitude"],
            answer: 1
        },
        {
            question: "The unit of thermal conductivity is:",
            options: ["W/m²·K", "W/m·K", "J/m·K", "N/m·K"],
            answer: 1
        },
        {
            question: "The speed of light in a medium of refractive index n is:",
            options: ["c/n", "c·n", "n/c", "c·n²"],
            answer: 0
        },
        {
            question: "The maximum kinetic energy of a photoelectron is given by:",
            options: ["hf - φ", "hf + φ", "hf", "hf/φ"],
            answer: 0
        },
        {
            question: "Which of the following quantities is conserved in elastic collisions?",
            options: ["Momentum only", "Kinetic energy only", "Both momentum and kinetic energy", "Neither momentum nor kinetic energy"],
            answer: 2
        },
        {
            question: "What is the SI unit of angular momentum?",
            options: ["kg·m/s", "kg·m²/s", "kg·m²/s²", "kg·m/s²"],
            answer: 1
        },
        {
            question: "The velocity of sound in air increases with:",
            options: ["Pressure", "Density", "Temperature", "None of these"],
            answer: 2
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
